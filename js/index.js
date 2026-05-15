let calcFNumb = document.querySelector("#inputFNumb");
let calcSNumb = document.querySelector("#inputSNumb");
let calcOperation = document.querySelector("#inputOperation");
let calcBtn = document.querySelector(".result-btn");
let calcResult = document.querySelector(".result-text");


let findFNumb = document.querySelector("#inputFNumbA");
let findSNumb = document.querySelector("#inputSNumbA");
let findBtn = document.querySelector(".result-btnA");
let findResult = document.querySelector(".result-textA");


let koefA = document.querySelector("#koefA");
let koefB = document.querySelector("#koefB");
let koefC = document.querySelector("#koefC");
let equationBtn = document.querySelector(".result-btnB");
let discriminator = document.querySelector(".discriminator");
let firstRoot = document.querySelector(".first-root");
let secondRoot = document.querySelector(".second-root");


let attemptss = 0;
let currentLevel = null;
let randomNumbEasy = Math.floor(Math.random() * 10) + 1;
let randomNumbMedium = Math.floor(Math.random() * 50) + 1;
let randomNumbHard = Math.floor(Math.random() * 100) + 1;
let attempts = document.querySelector(".guess-tryes");
let guessInput = document.querySelector("#guessNumb");
let guessBtn = document.querySelector(".result-btnC");
let guessResult = document.querySelector(".guess-result");
let guessEasyLevelBtn = document.querySelector(".easybtn");
let guessMediumLevelBtn = document.querySelector(".mediumbtn");
let guessHardLevelBtn = document.querySelector(".hardbtn");




let modalWindowRegBtn = document.querySelector(".reg-btn");
let modalWindow = document.querySelector(".modal-window");
let modalWindowReg = document.querySelector(".register-window");
let modalWindowLogin = document.querySelector(".login-window");
let modalWindowLoginBtn = document.querySelector(".log-btn");
let modalWindowResults = document.querySelector(".result-window");
let modalWindowResultsText = document.querySelector(".result-textE");
let joinBtn = document.querySelector(".btn1");
let isAccontCreated = document.querySelector(".isAccount");




let rpsEasyBtn = document.querySelector(".easy-btn");
let rpsHardBtn = document.querySelector(".hard-btn");

let rpsPlayerChoice = document.querySelector("#chooseSelect");

let stoneCreateChoice = document.createElement("option");
stoneCreateChoice.value = "stone";
stoneCreateChoice.textContent = "Камінь";
let scissorsCreateChoice = document.createElement("option");
scissorsCreateChoice.value = "scissors";
scissorsCreateChoice.textContent = "Ножиці";
let paperCreateChoice = document.createElement("option");
paperCreateChoice.value = "paper";
paperCreateChoice.textContent = "Папір";
let spockCreateChoice = document.createElement("option");
spockCreateChoice.value = "spock";
spockCreateChoice.textContent = "Спок";
let lizardCreateChoice = document.createElement("option");
lizardCreateChoice.value = "lizard";
lizardCreateChoice.textContent = "Ящірка";

let rpsResultBtn = document.querySelector(".result-btnD");
let rpsResultText = document.querySelector(".game-result");
let rpsLevel = null;




let snakeCanvas = document.querySelector("#snakeCanvas");
let snakeCtx = snakeCanvas.getContext("2d");

let snakeStartBtn = document.querySelector(".snake-start-btn");

let snakeScoreText = document.querySelector(".snake-score");
let snakeRecordText = document.querySelector(".snake-record");
let snakeLastText = document.querySelector(".snake-last");

let box = 15;

let snake = [];
let direction = "RIGHT";
let score = 0;
let game;

let record = localStorage.getItem("snakeRecord") || 0;
let lastScore = localStorage.getItem("snakeLastScore") || 0;

snakeRecordText.textContent = `Рекорд: ${record}`;
snakeLastText.textContent = `Останній результат: ${lastScore}`;

snake[0] = { x: 10 * box, y: 10 * box };

let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };

document.addEventListener("keydown", directionControl);

function directionControl(event) {
    if (event.key === "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    }
    else if (event.key === "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    }
    else if (event.key === "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    }
    else if (event.key === "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    }
}

function drawGame() {
    snakeCtx.clearRect(0, 0, 300, 300);
    for (let i = 0; i < snake.length; i++) {
        snakeCtx.fillStyle = i === 0
            ? "#0B0E66"
            : "#26C7EA";
        snakeCtx.fillRect(
            snake[i].x,
            snake[i].y,
            box,
            box
        );
    }
    snakeCtx.fillStyle = "red";
    snakeCtx.fillRect(
        food.x,
        food.y,
        box,
        box
    );
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if (direction === "LEFT") snakeX -= box;
    if (direction === "RIGHT") snakeX += box;
    if (direction === "UP") snakeY -= box;
    if (direction === "DOWN") snakeY += box;
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        snakeScoreText.textContent = `Рахунок: ${score}`;
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.pop();
    }
    let newHead = {
        x: snakeX,
        y: snakeY
    };
    if (snakeX < 0 || snakeY < 0 || snakeX >= 300 || snakeY >= 300 || collision(newHead, snake)) {
        clearInterval(game);
        localStorage.setItem("snakeLastScore", score);
        snakeLastText.textContent =
            `Останній результат: ${score}`;
        if (score > record) {
            record = score;
            localStorage.setItem("snakeRecord", record);
            snakeRecordText.textContent =
                `Рекорд: ${record}`;
        }
        alert("Гра закінчена!");
        return;
    }
    snake.unshift(newHead);
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

snakeStartBtn.addEventListener("click", () => {
    clearInterval(game);
    snake = [];
    snake[0] = { x: 10 * box, y: 10 * box };
    direction = "RIGHT";
    score = 0;
    snakeScoreText.textContent = "Рахунок: 0";
    food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
    game = setInterval(drawGame, 120);
});







calcBtn.addEventListener('click', () => {
    const a = parseFloat(calcFNumb.value);
    const b = parseFloat(calcSNumb.value);
    const op = calcOperation.value.trim();
    let result;

    if (isNaN(a) || isNaN(b)) {
        calcResult.textContent = "Введіть числа!";
        return;
    }

    switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/':
            result = b !== 0 ? a / b : "Помилка (ділення на 0)";
            break;
        default: result = "Невірна операція";
    }

    calcResult.textContent = `Результат: ${result}`;
});

findBtn.addEventListener('click', () => {
    const a = parseFloat(findFNumb.value);
    const b = parseFloat(findSNumb.value);

    if (isNaN(a) || isNaN(b)) {
        findResult.textContent = "Введіть обидва числа!";
        return;
    }

    if (a > b) {
        findResult.textContent = `Більше число: ${a}`;
    } else if (b > a) {
        findResult.textContent = `Більше число: ${b}`;
    } else {
        findResult.textContent = "Числа рівні";
    }
});

equationBtn.addEventListener('click', () => {
    const a = parseFloat(koefA.value);
    const b = parseFloat(koefB.value);
    const c = parseFloat(koefC.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        discriminator.textContent = "Заповніть всі коефіцієнти!";
        firstRoot.textContent = "";
        secondRoot.textContent = "";
        return;
    }

    const D = b * b - 4 * a * c;
    discriminator.textContent = `D = ${D}`;

    if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        firstRoot.textContent = `x1 = ${x1.toFixed(2)}`;
        secondRoot.textContent = `x2 = ${x2.toFixed(2)}`;
    } else if (D === 0) {
        const x = -b / (2 * a);
        firstRoot.textContent = `x = ${x.toFixed(2)}`;
        secondRoot.textContent = "Корінь один";
    } else {
        firstRoot.textContent = "Коренів немає";
        secondRoot.textContent = "D < 0";
    }
});



guessEasyLevelBtn.addEventListener('click', () => {
    currentLevel = 'easy';
    attemptss = 0;
    guessResult.textContent = "Ви вибрали легкий рівень. Вгадайте число від 1 до 10.";
    attempts.textContent = '';
});
guessMediumLevelBtn.addEventListener('click', () => {
    currentLevel = 'medium';
    attemptss = 0;
    guessResult.textContent = "Ви вибрали середній рівень. Вгадайте число від 1 до 50.";
    attempts.textContent = '';
});
guessHardLevelBtn.addEventListener('click', () => {
    currentLevel = 'hard';
    attemptss = 0;
    guessResult.textContent = "Ви вибрали важкий рівень. Вгадайте число від 1 до 100.";
    attempts.textContent = '';
});

guessBtn.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess)) {
        guessResult.textContent = "Введіть число!";
        return;
    }

    attemptss++;

    let targetNumber;
    if (currentLevel === 'easy') {
        targetNumber = randomNumbEasy;
    } else if (currentLevel === 'medium') {
        targetNumber = randomNumbMedium;
    } else if (currentLevel === 'hard') {
        targetNumber = randomNumbHard;
    } else {
        guessResult.textContent = "Виберіть рівень складності!";
        return;
    }

    if (guess === targetNumber) {
        guessResult.textContent = `Вітаємо! Ви вгадали число ${targetNumber} за ${attemptss} спроб.`;
    } else if (guess < targetNumber) {
        guessResult.textContent = "Загадане число більше.";
    } else {
        guessResult.textContent = "Загадане число менше.";
    }
    attempts.textContent = `Спроби: ${attemptss}`;
});


modalWindowResultsText += "Вітаємо! Ви успішно увійшли в систему.";
joinBtn.addEventListener('click', () => {   
    modalWindow.style.display = 'flex';
    modalWindowReg.style.display = 'flex';
});
isAccontCreated.addEventListener('click', () => {
    modalWindowReg.style.display = 'none';
    modalWindowLogin.style.display = 'flex';
});
modalWindowLoginBtn.addEventListener('click', () => {
    modalWindowLogin.style.display = 'none';
    modalWindowResults.style.display = 'flex';
});
modalWindowRegBtn.addEventListener('click', () => {
    modalWindowReg.style.display = 'none';
    modalWindowResults.style.display = 'flex';
});


rpsEasyBtn.addEventListener('click', () => {
    rpsLevel = 'easy';
    rpsPlayerChoice.innerHTML = '';
    rpsPlayerChoice.appendChild(stoneCreateChoice);
    rpsPlayerChoice.appendChild(scissorsCreateChoice);
    rpsPlayerChoice.appendChild(paperCreateChoice);
    rpsResultText.textContent = "Ви вибрали легкий режим. Виберіть камінь, ножиці або папір.";
});
rpsHardBtn.addEventListener('click', () => {
    rpsLevel = 'hard';
    rpsPlayerChoice.innerHTML = '';
    rpsPlayerChoice.appendChild(stoneCreateChoice);
    rpsPlayerChoice.appendChild(scissorsCreateChoice);
    rpsPlayerChoice.appendChild(paperCreateChoice);
    rpsPlayerChoice.appendChild(spockCreateChoice);
    rpsPlayerChoice.appendChild(lizardCreateChoice);
    rpsResultText.textContent = "Ви вибрали важкий режим. Виберіть камінь, ножиці, папір, Спок або ящірку.";
});
rpsResultBtn.addEventListener('click', () => {
    if(!rpsLevel){
        rpsResultText.textContent = "Спочатку виберіть рівень!";
        return;
    }
    const playerChoice = rpsPlayerChoice.value;
    const choices = currentLevel === 'easy' ? ['stone', 'scissors', 'paper'] : ['stone', 'scissors', 'paper', 'spock', 'lizard'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (computerChoice === 'stone') {
        computerChoiceText = "Камінь";
    }
    else if (computerChoice === 'scissors') {
        computerChoiceText = "Ножиці";
    } else if (computerChoice === 'paper') {
        computerChoiceText = "Папір";
    } else if (computerChoice === 'spock') {
        computerChoiceText = "Спок";
    } else if (computerChoice === 'lizard') {
        computerChoiceText = "Ящірка";
    }

    if (playerChoice === computerChoice) {
        rpsResultText.textContent = `Нічия! Комп'ютер вибрав ${computerChoice}.`;
    } else if (
        (playerChoice === 'stone' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'stone' || computerChoice === 'spock')) ||
        (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'stone')) ||
        (playerChoice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock'))
    ) {
        rpsResultText.textContent = `Ви виграли! Комп'ютер вибрав ${computerChoice}.`;
    } else {
        rpsResultText.textContent = `Ви програли! Комп'ютер вибрав ${computerChoice}.`;
    }
});
