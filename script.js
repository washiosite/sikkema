const n = document.getElementById("n");
const history = document.getElementById("history");

const log = [];

function generate() {
    const x = Math.floor(Math.random() * 10);

    n.textContent = x;

    // 新しい履歴を先頭に追加
    log.unshift(x);

    // 最大100件まで保持
    if (log.length > 100) log.pop();

    history.textContent = log.join(" ");
}

document.addEventListener("keydown", e => {
    switch (e.key.toLowerCase()) {
        case "q":
            generate();
            break;

        case "r":
            log.length = 0;
            history.textContent = "";
            break;
    }
});

generate();
