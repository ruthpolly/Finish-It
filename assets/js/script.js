// questions for quiz
let phrases = [
    {
        phrase: "Stop messing around and acting the ______!",
        answers: ['maggot', 'prankster', 'shoe-lace', 'baby'],
        answer: 'maggot',
    },
    {
        phrase: "I passed Mary on the road, she was driving like she was ______.",
        answers: ['late for mass', 'going to work', 'cycling', 'walking'],
        answer: 'late for mass',
    },
    {
        phrase: "Stop crying now or I will give you ______!",
        answers: ['something to cry about', 'a present', 'icecream', 'a punsihment'],
        answer: 'something to cry about'
    },
    {
        phrase: "Siobhan had a baby so we are on our way to ______.",
        answers: ['visit her', 'wet the babys head', 'go shopping', 'eat dinner'],
        answer: 'wet the babys head'
    },
    {
        phrase: "Dad is home, did you ______?",
        answers: ['turn off the immersion', 'wash', 'eat', 'clean up'],
        answer: 'turn off the immersion'
    },
    {
        phrase: "Were you _______? Close the door after you.",
        answers: ['born in a field', 'cold outside', 'waiting long', 'on the way'],
        answer: 'born in a field'
    },
    {
        phrase: "Ah the car is _____ I will have to get a new one",
        answers: ['banjaxed', 'broken', 'crashed', 'dopey'],
        answer: 'banjaxed'
    },
    {
        phrase: "Yeah I am _____ with the new job",
        answers: ['delira', 'happy', 'in love', 'busy'],
        answer: 'delira'
    },
    {
        phrase: "Sure come over to my _____ for some tae",
        answers: ['gaff', 'house', 'place', 'bag'],
        answer: 'gaff'
    },
    {
        phrase: "Oh I am _____ for you!",
        answers: ['scarlet', 'embarrassed', 'happy', 'wagon'],
        answer: 'scarlet'
    },
];

// DOM elements
let homeArea = document.getElementsByClassName("home-area");
let quizArea = document.getElementsByClassName("quiz-area");
let resultsArea = document.getElementsByClassName("results-area");

// function to start quiz
function startQuiz() {
    homeArea[0].classList.add("hide");
    quizArea[0].classList.remove("hide");
}

console.log('connected');

// function to check the answer