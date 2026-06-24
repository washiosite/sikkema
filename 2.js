const STEP = 100;   // 歩数

const log = document.getElementById("log");
let count = 0;

function randomWalk(){

    let x = 0;
    let y = 0;

    for(let i=0;i<STEP;i++){

        switch(Math.floor(Math.random()*4)){
            case 0: x++; break; // →
            case 1: x--; break; // ←
            case 2: y++; break; // ↑
            case 3: y--; break; // ↓
        }

    }

    const d = Math.sqrt(x*x+y*y);

    count++;

    log.innerHTML =
        `<tr>
            <td>${count}</td>
            <td>(0,0)</td>
            <td>${STEP}</td>
            <td>(${x},${y})</td>
            <td>${d.toFixed(3)}</td>
        </tr>` + log.innerHTML;
}

document.addEventListener("keydown",e=>{

    if(e.key.toLowerCase()==="q"){
        randomWalk();
    }

});

randomWalk();
