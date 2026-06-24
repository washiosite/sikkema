const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function randomHex() {
    return "#" + Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, "0");
}

function draw() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const img = ctx.createImageData(canvas.width, canvas.height);
    const data = img.data;

    for (let i = 0; i < data.length; i += 4) {

        const color = randomHex();

        data[i]     = parseInt(color.slice(1,3),16); // R
        data[i + 1] = parseInt(color.slice(3,5),16); // G
        data[i + 2] = parseInt(color.slice(5,7),16); // B
        data[i + 3] = 255;                           // A
    }

    ctx.putImageData(img, 0, 0);
}

draw();

window.addEventListener("resize", draw);

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "q") {
        draw();
    }
});
