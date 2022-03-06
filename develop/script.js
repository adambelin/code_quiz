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

function answerQuestion(answer, correctAnswer){
    if (answer===correctAnswer) {
        alert("correct dumbass");
    }
    else {
        alert("quit being stupid")
    }
    console.log(answer);
    myQuestions.shift ();
    nextQuestion();
}

function startQuiz() {
    nextQuestion();
}

function endQuiz() {
    alert("good job pp head")
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

$ ("#start").click(startQuiz);

