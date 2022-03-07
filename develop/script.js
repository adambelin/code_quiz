let startTime = 0
const timerSeconds = 40
let timerOffset = 0
let currentTimer = timerSeconds
let intervalId = 0

let myQuestions = [
    {
        question: "Commonly used data types do not include?",
        answers: {
            a: 'strings',
            b: 'booleans',
            c: 'alerts',
            d: 'numbers'
        },

        correctAnswer: 'a'
    },

    {
        question: "The condition in an if / else statement is enclosed with ________.",
        answers: {
            a: 'quotes',
            b: 'curly brackets',
            c: 'parenthesis',
            d: 'square brackets'
        },

        correctAnswer: 'c'
    },

    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: {
            a: 'numbers and strings',
            b: 'other arrays',
            c: 'booleans',
            d: 'all of the above'
        },

        correctAnswer: 'd'
    },

    {
        question: "String values must be enclosed within _____ when being assigned to variables",
        answers: {
            a: 'commas',
            b: 'curly brackets',
            c: 'quotes',
            d: 'parenthesis'
        },

        correctAnswer: 'c'
    },
]

$(document).ready(function () {
    let currentHighScore = localStorage.getItem("high score");
    if (currentHighScore) {
        $("#high-score").html(currentHighScore);
    }
    else{
        $("#high-score").html("n/a");
    }
})

function answerQuestion(answer, correctAnswer){
    $("#result").removeClass("hidden");
    if (answer===correctAnswer) {
        $("#result").html("correct");
    }
    else {
        $("#result").html("incorrect");
        timerOffset += 10;
    }
 
    myQuestions.shift ();
    nextQuestion();
}

function startQuiz() {
    nextQuestion();
    startTimer();
}

function saveHighScore(currentScore) {
    let currentHighScore = localStorage.getItem ("high score");
    console.log(currentHighScore);
    if(currentHighScore) {
        let highScore = Math.max(currentHighScore, currentScore);
        localStorage.setItem("high score", highScore);
        localStorage.setItem("initials", $("#initials").val());
    }
    else {
        localStorage.setItem("high score", currentScore);
    }
}

function endQuiz() {
    $("#question").addClass("hidden");
    $("#enter_initial").removeClass("hidden");
    clearInterval(intervalId);

        let now = Date.now();
        let delta = Math.floor((now - startTime)/1000);
        currentTimer = timerSeconds - (delta + timerOffset);
        
        if (currentTimer > 0){
            $("#current_time").html(currentTimer);
        }

        else {
            $("#current_time").html("Time is up!");
        }

    $("#final_score").html(currentTimer);
}

function nextQuestion(){
    $("#rules").addClass("hidden");
    $("#question").removeClass("hidden");
    if (myQuestions.length === 0) {
        endQuiz();
        return;
    }
    let question=myQuestions [0];
    $("#question_title").html(question.question);
    $("#answer_a").html(question.answers.a);
    $("#answer_b").html(question.answers.b);
    $("#answer_c").html(question.answers.c);
    $("#answer_d").html(question.answers.d);

    $ ("#answer_a").off("click").click(function (){
        answerQuestion("a", question.correctAnswer);
    });
    $ ("#answer_b").off("click").click(function (){
        answerQuestion("b", question.correctAnswer);
    });
    $ ("#answer_c").off("click").click(function (){
        answerQuestion("c", question.correctAnswer);
    });
    $ ("#answer_d").off("click").click(function (){
        answerQuestion("d", question.correctAnswer);
    });
}

function startTimer() {
    startTime = Date.now();
    console.log (startTime);


    intervalId = setInterval(function(){
        let now = Date.now();
        let delta = Math.floor((now - startTime)/1000);
        currentTimer = timerSeconds - (delta + timerOffset);
        
        if (currentTimer > 0){
            $("#current_time").html(currentTimer);
        }

        else {
            $("#current_time").html("Time is up!");
        }
    }, 500);
}

$ ("#start").click(startQuiz);

function submitScore() {
    saveHighScore(currentTimer)

    let initals = $("#initials").val()
    let highScore = localStorage.getItem("initals", initials);
    console.log(highScore);
    $("#high-score", "#initials").html(highScore);
}

$ ("#submit").click(submitScore);