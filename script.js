function randomNumber() {
    const num = Math.floor(Math.random() * 10);
    document.getElementById("number").textContent = num;
}

// 初回表示
randomNumber();
