const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const SCALE = 4; // 数字を大きくするほど低解像度

function draw() {

    const w = Math.ceil(window.innerWidth / SCALE);
    const h = Math.ceil(window.innerHeight / SCALE);

    canvas.width = w;
    canvas.height = h;

    // 拡大表示
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";

    ctx.imageSmoothingEnabled = false;

    const img = ctx.createImageData(w, h);
    const data = img.data;

    for (let i = 0; i < data.length; i += 4) {
        data[i]     = Math.floor(Math.random() * 256); // R
        data[i + 1] = Math.floor(Math.random() * 256); // G
        data[i + 2] = Math.floor(Math.random() * 256); // B
        data[i + 3] = 255;
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
