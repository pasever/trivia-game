
userAnwers = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var len = questions.length;
var currentQuestion;
var questionCounter = 0;
var clickedButton;
var gameOverBool = false;
var totalAnswers = correctAnswers + incorrectAnswers;




$(".quiz").ready(function () {
    $(".quiz").hide();
});


var x = $("#startingButton").on("click", function start() {

    $("#startingButton").hide();
    $("#startingText").hide();
    $(".quiz").show();
    generate();
    countdown();

});

function countdown() {
    var seconds = 15;
    var countdown = document.getElementById('questionTimer');


    int = setInterval(function () { //Starts the interval
        seconds--;
        countdown.innerHTML = seconds;
        if (seconds === 0) {
            clearInterval(int); //Stops the interval

            setTimeout(nextQuestion, 25);
        }
    }, 1000);
}

function generate() {
    if (gameOverBool === true) {
        return;
        reset();

    }
    var rand = Math.floor(Math.random() * len);

    currentQuestion = questions[rand];
    $("#questionPlace").html(currentQuestion.question);
    var ansLen = currentQuestion.answers.length;

    for (var i = 0; i < ansLen; i++) {
        $("#" + i).append(currentQuestion.answers[i]).show();
    }


    for (i; i < 4; i++) {
        var emptyButton = $("#" + i).hide();
    }

    questionCounter++;
    $("#questionCounter").html(questionCounter);


}


$("label").on("click", function () {
    var guess = $(this)[0].innerText;
    correctGuess(guess);

});

function correctGuess(choice) {

    var correctAnswer = currentQuestion.solution;
    if (choice === correctAnswer) {
        correctAnswers++;
        alert("Great Job!");
        //$("#correctPlace").html("Correct");
        clearInterval(int);
        reset();
        nextQuestion();
    } else {
        alert("Hmmmmmm");
        incorrectAnswers++;
        clearInterval(int);
        reset();
        nextQuestion();

    }

}


function nextQuestion() {
    clearInterval(int);
    $("label").html("");
    checkIfGameEnd();
    generate();
    reset();
}

function reset() {

    if (!gameOverBool) {
        countdown();

    }
    

}


function checkIfGameEnd() {
    totalAnswers = correctAnswers + incorrectAnswers;
    if (totalAnswers === 10) {
        gameOverBool = true;
        reset();
        $(".quiz").hide();
        results();
        $("#questionCounter").html(0);

    }
}

function results() {

    var finalMessage = "Thank you for taking the test!";
    finalMessage += "</br>" + "</br>" + "Questions you've answered correctly - " + correctAnswers + "</br>";
    //finalMessage += "</br>" + "If you want to take the test again click below";
    $("#questionPlace").html(finalMessage);
    //$("#startingButton").show();
    //$("#startingButton").on("click", x);
    
}