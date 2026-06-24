const n = document.getElementById("n");
const table = document.getElementById("table");

let count = Array(10).fill(0);

for(let i=0;i<10;i++){
    table.innerHTML += `<tr><td>${i}</td><td id="c${i}">0</td></tr>`;
}

function generate(){
    const x = Math.floor(Math.random()*10);
    n.textContent = x;

    count[x]++;
    document.getElementById(`c${x}`).textContent = count[x];
}

document.addEventListener("keydown",e=>{
    switch(e.key.toLowerCase()){
        case "q":
            generate();
            break;

        case "r":
            count.fill(0);
            for(let i=0;i<10;i++){
                document.getElementById(`c${i}`).textContent=0;
            }
            break;
    }
});

generate();
