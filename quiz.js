//Intialise core variables
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const finishedContainerElement = document.getElementById('finished-container');
const drawerTitle = document.getElementById('pubDrawerTitle');
const instructions = document.getElementById('instructions');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-btns');
const scoreText = document.getElementById('score');
const pubQuizDrawer = document.querySelector('.pub-quiz');
const closeBtn = document.getElementById('close-btn');


//Pre-define shuffle variables that can be manipulated later & score
let shuffQuestions, currentQuestionIndex;
let score = 0;

//Add click event listener to start button
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

closeBtn.addEventListener('click', () => {
    pubQuizDrawer.hide();
})

//function to start the game
function startGame() {
    startBtn.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    drawerTitle.classList.add('hide');
    instructions.classList.add('hide');
    shuffQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
    score = 0;
}

//function to set the next question
function setNextQuestion() {
    resetState();
    showQuestion(shuffQuestions[currentQuestionIndex]);
}

//function to show the next question in the question HTML element
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn-answer');
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

//function to reset answer button content on every question
function resetState() {
    nextBtn.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//function to select an answer
function selectAnswer(e) {
    const selBtn = e.target;
    const correct = selBtn.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        questionContainerElement.classList.add('hide');
        finishedContainerElement.classList.remove('hide');
        newHomeRingPercentage = homeRing.percentage + score;
        homeRing.percentage = newHomeRingPercentage;
        homeRing.textContent = `${newHomeRingPercentage}`;

    }

    if (selBtn.dataset = correct) {
        score++;
    }

    scoreText.innerHTML = score;
    
}


//function to set correct/wrong class onto element
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    };
}


//function to clear classes
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


//questions & answers arrays
const questions = [
    {
        question: 'In what part of the body would you find the fibula?',
        answers: [
            {text: 'Leg', correct: true},
            {text: 'Torso', correct: false},
            {text: 'Arm', correct: false},
            {text: 'Hand', correct: false}
        ]
        
    },

    {
        question: 'How many rings are on the Olympic flag?',
        answers: [
            {text: 'None', correct: false},
            {text: '4', correct: false},
            {text: '5', correct: true},
            {text: '7', correct: false}
        ]
        
    },

    {
        question: 'In darts, whats the most points you cans core with a single throw?',
        answers: [
            {text: '20', correct: false},
            {text: '50', correct: false},
            {text: '60', correct: true},
            {text: '100', correct: false}
        ]
        
    },

    {
        question: 'Which of these countries has the largest population?',
        answers: [
            {text: 'Iran', correct: false},
            {text: 'Russia', correct: false},
            {text: 'Brazil', correct: true},
            {text: 'Germany', correct: false}
        ]
        
    },

    {
        question: 'What is traditionally served as the main course on Burns Night?',
        answers: [
            {text: 'Black Pudding', correct: false},
            {text: 'Meat and Potato Pie', correct: false},
            {text: 'Haggis', correct: true},
            {text: 'Fish and Chips', correct: false}
        ]
        
    }

]