let level = 1;
let attempts = 0;

// Comparaciones para el Nivel 1
const comparisonsLevel1 = [
    { subject1: "A bear", subject2: "a person", question: "Is the bear more?", options: ["bigger", "smaller"], answer: "bigger" },
    { subject1: "A skyscraper", subject2: "a house", question: "Is the skyscraper more?", options: ["taller", "shorter"], answer: "taller" },
    { subject1: "A cheetah", subject2: "a turtle", question: "Is the cheetah more?", options: ["faster", "slower"], answer: "faster" }
];

const comparisonsLevel2 = [
    { sentence: "An elephant is ___ than a mouse.", options: ["bigger", "smaller", "older"], answer: "bigger" },
    { sentence: "A skyscraper is ___ than a house.", options: ["taller", "wider", "smaller"], answer: "taller" },
    { sentence: "A cheetah is ___ than a turtle.", options: ["faster", "weaker", "stronger"], answer: "faster" }
];

const versus = [
    { question: "Choose the correct sentence:", options: [
        "The giraffe is tallest animal.",
        "The giraffe is the tallest animal.",
        "The giraffe is taller animal."
    ], answer: "The giraffe is the tallest animal." }
];

// Iniciar el juego
function startGame() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const id = document.getElementById("id").value;

    if (name && email && id) {
        document.getElementById("user-form").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        loadLevel();
    } else {
        alert("Please fill in all fields.");
    }
}

// Cargar el nivel actual
function loadLevel() {
    document.getElementById("levelTitle").innerText = `Level ${level}`;
    const instructions = document.getElementById("instructions");
    const answerInput = document.getElementById("answerInput");
    const optionsDiv = document.getElementById("options");

    answerInput.classList.add("hidden");
    optionsDiv.classList.add("hidden");

    if (level === 1) {
        // Nivel 1: Comparar dos sujetos y elegir el adjetivo correcto en modo comparativo
        const comparison = comparisonsLevel1[attempts];
        instructions.innerText = `${comparison.subject1} and ${comparison.subject2}: ${comparison.question}`;
        optionsDiv.classList.remove("hidden");
        optionsDiv.innerHTML = "";

        comparison.options.forEach(option => {
            const btn = document.createElement("button");
            btn.innerText = option;
            btn.onclick = () => (answerInput.value = option);
            optionsDiv.appendChild(btn);
        });
    } else if (level === 2) {
        // Nivel 2: Elegir la opción correcta de la oración
        const comparison = comparisonsLevel2[attempts];
        instructions.innerText = comparison.sentence;
        optionsDiv.classList.remove("hidden");
        optionsDiv.innerHTML = "";

        comparison.options.forEach(option => {
            const btn = document.createElement("button");
            btn.innerText = option;
            btn.onclick = () => (answerInput.value = option);
            optionsDiv.appendChild(btn);
        });
    } else if (level === 3) {
        // Nivel 3: Elegir la oración correcta
        const versusQuestion = versus[attempts];
        instructions.innerText = versusQuestion.question;
        optionsDiv.classList.remove("hidden");
        optionsDiv.innerHTML = "";

        versusQuestion.options.forEach(option => {
            const btn = document.createElement("button");
            btn.innerText = option;
            btn.onclick = () => (answerInput.value = option);
            optionsDiv.appendChild(btn);
        });
    }
}

// Enviar la respuesta
function submitAnswer() {
    const answerInput = document.getElementById("answerInput").value.trim();
    if (!answerInput) {
        alert("Please select or type an answer.");
        return;
    }

    const isCorrect =
        (level === 1 && answerInput === comparisonsLevel1[attempts].answer) ||
        (level === 2 && answerInput === comparisonsLevel2[attempts].answer) ||
        (level === 3 && answerInput === versus[attempts].answer);

    if (isCorrect) {
        attempts++;
        if (attempts === 3) {
            attempts = 0;
            level++;
        }

        if (level > 3) {
            endGame();
        } else {
            loadLevel();
        }
    } else {
        alert("Incorrect, try again!");
    }
}

// Terminar el juego
function endGame() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("end-message").classList.remove("hidden");
}
