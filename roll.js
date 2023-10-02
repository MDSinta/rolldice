const button = document.body.querySelector("button");

button.addEventListener("click", roll);

function roll() {
    total = 0;
    const dice1 = Math.floor(Math.random() * 5 + 1);
    const dice2 = Math.floor(Math.random() * 5 + 1);
    total = dice1 + dice2;

    const p1 = document.createElement("P");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.textContent = "roll 1:" + dice1;
    p2.textContent = "roll 2: " + dice2;
    p3.textContent = "total: " + total;
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);
}