// questions for quiz
let phrases = [
    {
        phrase: "Stop messing around and acting the ______!",
        options: [
            { text: 'shoe lace', correct: false },
            { text: 'prankster', correct: false },
            { text: 'maggot', correct: true },
            { text: 'baby', correct: false },
        ]
    },
    {
        phrase: "I passed Mary on the road, she was driving like she was ______.",
        options: [
            { text: 'late for mass', correct: true },
            { text: 'going to work', correct: false },
            { text: 'cycling', correct: false },
            { text: 'walking', correct: false },
        ]
    },
    {
        phrase: "Stop crying now or I will give you ______!",
        options: [
            { text: 'a punishment', correct: false },
            { text: 'a present', correct: false },
            { text: 'icecream', correct: false },
            { text: 'something to cry about', correct: true },
        ]
    },
    {
        phrase: "Siobhan had a baby so we are on our way to ______.",
        options: [
            { text: 'visit her', correct: false },
            { text: 'wet the babys head', correct: true },
            { text: 'go shopping', correct: false },
            { text: 'eat dinner', correct: false },
        ]
    },
    {
        phrase: "Dad is home, did you ______?",
        options: [
            { text: 'turn off the immersion', correct: true },
            { text: 'wash', correct: false },
            { text: 'eat', correct: false },
            { text: 'clean up', correct: false },
        ]
    },
    {
        phrase: "Were you _______? Close the door after you.",
        options: [
            { text: 'waiting long', correct: false },
            { text: 'cold outside', correct: false },
            { text: 'born in a field', correct: true },
            { text: 'on the way', correct: false },
        ]
    },
    {
        phrase: "Ah the car is _____ I will have to get a new one",
        options: [
            { text: 'broken', correct: false },
            { text: 'banjaxed', correct: true },
            { text: 'crashed', correct: false },
            { text: 'dopey', correct: false },
        ]
    },
    {
        phrase: "Yeah I am _____ with the new job",
        options: [
            { text: 'happy', correct: false },
            { text: 'delira', correct: true },
            { text: 'in love', correct: false },
            { text: 'busy', correct: false },
        ]
    },
    {
        phrase: "Sure come over to my _____ for some tae",
        options: [
            { text: 'bag', correct: false },
            { text: 'house', correct: false },
            { text: 'place', correct: false },
            { text: 'gaff', correct: true },
        ]
    },
    {
        phrase: "Oh I am _____ for you!",
        options: [
            { text: 'scarlet', correct: true },
            { text: 'embarrassed', correct: false },
            { text: 'happy', correct: false },
            { text: 'wagon', correct: false },
        ]
    },
];

// DOM elements
let homeArea = document.getElementsByClassName("home-area");
let quizArea = document.getElementsByClassName("quiz-area");
let resultsArea = document.getElementsByClassName("results-area");
let quizPhrase = document.getElementById("phrase");
let answerButtons = document.getElementById('answer-buttons');
let currentPhraseIndex = 0;
let score = 0;

function startQuiz() {
    homeArea[0].classList.add("hide");
    quizArea[0].classList.remove("hide");
    currentPhraseIndex = 0;
    score = 0;
    showQuiz();
}

function showQuiz() {
    resetAnswerButtons();
    let currentPhrase = phrases[currentPhraseIndex];
    let phraseNumber = currentPhraseIndex + 1;
    quizPhrase.innerHTML = phraseNumber + ". " + currentPhrase.phrase;

    currentPhrase.options.forEach(options => {
        let button = document.createElement("button");
        button.innerHTML = options.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (options.correct) {
            button.dataset.correct = options.correct;
        }
        button.addEventListener("click", checkAnswer);
    });
}

function resetAnswerButtons() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function checkAnswer(e) {
    let clickedButton = e.target;
    let correctOption = clickedButton.dataset.correct === "true";
    if (correctOption) {
        clickedButton.classList.add("correct-option");
        // incrementScore();
    } else {
        clickedButton.classList.add("incorrect-option");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct-option");
        }
        button.disabled = true;
    });
}
