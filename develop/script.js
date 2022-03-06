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

function startQuiz(){
    $("#rules").addClass("hidden");
}

$ ("#start").click(startQuiz);

