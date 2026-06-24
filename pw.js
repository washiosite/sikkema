const tbody = document.getElementById("tbody");

const NUM = "0123456789";
const ALNUM = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const SPEED = 1_000_000_000; // 1秒に10億回試行

const TYPES = [
    ["数字4桁", NUM, 4],
    ["数字6桁", NUM, 6],
    ["英数字4桁", ALNUM, 4],
    ["英数字6桁", ALNUM, 6],
    ["英数字10桁", ALNUM, 10]
];

function randomPassword(chars, length){
    let s = "";
    for(let i=0;i<length;i++){
        s += chars[Math.floor(Math.random()*chars.length)];
    }
    return s;
}

function formatTime(sec){

    if(sec < 1) return sec.toFixed(6) + " 秒";
    if(sec < 60) return sec.toFixed(2) + " 秒";

    sec /= 60;
    if(sec < 60) return sec.toFixed(2) + " 分";

    sec /= 60;
    if(sec < 24) return sec.toFixed(2) + " 時間";

    sec /= 24;
    if(sec < 365) return sec.toFixed(2) + " 日";

    sec /= 365;
    return sec.toFixed(2) + " 年";
}

function generate(){

    tbody.innerHTML = "";

    for(const [name, chars, len] of TYPES){

        const pw = randomPassword(chars, len);

        const total = chars.length ** len;

        const average = total / 2 / SPEED;

        tbody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${pw}</td>
            <td>${total.toLocaleString()}</td>
            <td>${formatTime(average)}</td>
        </tr>`;
    }

}

document.getElementById("gen").onclick = generate;

document.addEventListener("keydown",e=>{
    if(e.key.toLowerCase()=="q") generate();
});

generate();
