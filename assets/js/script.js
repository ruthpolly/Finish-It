// questions for quiz
let phrases = [
    {
        phrase: "Stop messing around and acting the ______!",
        options: ['shoe lace', 'prankster', 'maggot', 'baby'],
        answer: 2,
    },
    {
        phrase: "I passed Mary on the road, she was driving like she was ______.",
        options: ['late for mass', 'going to work', 'cycling', 'walking'],
        answer: 0,
    },
    {
        phrase: "Stop crying now or I will give you ______!",
        options: ['a punishment', 'a present', 'icecream', 'something to cry about'],
        answer: 3
    },
    {
        phrase: "Siobhan had a baby so we are on our way to ______.",
        options: ['visit her', 'wet the babys head', 'go shopping', 'eat dinner'],
        answer: 1
    },
    {
        phrase: "Dad is home, did you ______?",
        options: ['turn off the immersion', 'wash', 'eat', 'clean up'],
        answer: 0
    },
    {
        phrase: "Were you _______? Close the door after you.",
        options: ['waiting long', 'cold outside', 'born in a field', 'on the way'],
        answer: 2
    },
    {
        phrase: "Ah the car is _____ I will have to get a new one",
        options: ['broken', 'banjaxed', 'crashed', 'dopey'],
        answer: 1
    },
    {
        phrase: "Yeah I am _____ with the new job",
        options: ['happy', 'delira', 'in love', 'busy'],
        answer: 1
    },
    {
        phrase: "Sure come over to my _____ for some tae",
        options: ['bag', 'house', 'place', 'gaff'],
        answer: 3
    },
    {
        phrase: "Oh I am _____ for you!",
        options: ['scarlet', 'embarrassed', 'happy', 'wagon'],
        answer: 0
    },
];

// DOM elements
let homeArea = document.getElementsByClassName("home-area");
let quizArea = document.getElementsByClassName("quiz-area");
let resultsArea = document.getElementsByClassName("results-area");
let quizPhrase = document.getElementById("phrase");
let answerButtons = document.getElementById('answer-buttons');
let randomPhrase, currentPhrase;

// function to start quiz
function startQuiz() {
    homeArea[0].classList.add("hide");
    quizArea[0].classList.remove("hide");
    randomPhrase = phrases.sort(() => Math.random() - .5);
    currentPhrase = 0;
    nextPhrase();
}

function nextPhrase() {
    showPhrase(randomPhrase[currentPhrase]);
}

function showPhrase(phrase) {
    quizPhrase.innerText = phrase.phrase;
    phrase.options.forEach(answer => {
        
    })
}
// function to check the answer