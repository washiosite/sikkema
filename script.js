const n = document.getElementById("n");

function generate() {
    n.textContent = Math.floor(Math.random() * 10);
}

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "q") {
        generate();
    }
});

generate();
