userAnwers = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var len = questions.length;
var currentQuestion;
var questionCounter = 0;
var clickedButton;
var gameOverBool = false;
var totalAnswers;
var period;

//start button on click hides the button and starts the test by firing the countdown and generate functions
$("#startingButton").on("click", function start() {

    $("#startingButton").hide();
    $("#startingText").hide();
    $("#quiz").removeClass("hidden");

    generate();
    countdown();
});

//starts the timer and and generates a new questions if timer gets to 0
function countdown() {
    var seconds = 20;
    var countdown = document.getElementById('questionTimer');

    period = setInterval(function () { //Starts the interval
        seconds--;
        countdown.innerHTML = seconds;
        if (seconds === 0) {
            incorrectAnswers++;
            //console.log(incorrectAnswers);
            clearInterval(period); //Stops the interval
            //console.log('what "this" equals to inside of the interval', this);
            setTimeout(nextQuestion, 25);
        }
    }, 1000);
}
//randomly generates a question 
function generate() {
    if (gameOverBool === true) {
        return;
        reset();
    }
    var rand = Math.floor(Math.random() * len);


    //explore the method Array.splice() to remove a question from the array and put it somewhere else
    currentQuestion = questions[rand];
    $("#questionPlace").html(currentQuestion.question);
    var ansLen = currentQuestion.answers.length;
//pushes the answers 
    for (var i = 0; i < ansLen; i++) {
        $("#" + i).append(currentQuestion.answers[i]).show();
    }
//removes the empty buttons 
    for (i; i < 4; i++) {
        var emptyButton = $("#" + i).hide();
    }

    questionCounter++;
    $("#questionCounter").html(questionCounter);

}

//checks in the anwer clicked is correct 
$("label").on("click", function () {
    var guess = $(this)[0].innerText;
    correctGuess(guess);

});
//if the guess is correct 
function correctGuess(choice) {

    var correctAnswer = currentQuestion.solution;

    if (choice === correctAnswer) {
        correctAnswers++;
        alertify.notify('Correct! Great Job!', 'custom', 1);
        clearInterval(period);
        reset();
        nextQuestion();
    } //if the guess is incorrect 
    else {

        alertify.error('That is incorrect', 1);
        incorrectAnswers++;
        clearInterval(period);
        reset();
        nextQuestion();

    }

}
//generates a new question 
function nextQuestion() {
    clearInterval(period);
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
//check if the test is over
function checkIfGameEnd() {
    totalAnswers = correctAnswers + incorrectAnswers;
    if (totalAnswers === 10) {
        gameOverBool = true;
        reset();
        results();
        $("#questionCounter").html(0);

    }
}
//if the test is over pushes the results
function results() {
    $("#quiz").addClass("hidden");
    clearInterval(period);
    var finalMessage = "Thank you for taking the test!";
    finalMessage += "</br>" + "</br>" + "Questions you've answered correctly: " + correctAnswers + "</br>";
    finalMessage += "</br>";
    $("#questionPlace").html(finalMessage);
    var resetButton = $("<button>");
    resetButton.addClass("btn btn-lg btn-secondary center-block");
    resetButton.attr("id", "resetMe");
    resetButton.text("Try Again");
    $("#gameInfo").append(resetButton);

}

// event delegation
$("#gameInfo").on("click", "#resetMe", function () {
    correctAnswers = 0;
    incorrectAnswers = 0;
    seconds = 20;
    questionCounter = 0;
    gameOverBool = false;
    $("#startingText").hide();
    $("#quiz").removeClass("hidden");
    generate();
    countdown();
    $("#resetMe").hide();
});

//// alert dialog
//alertify.alert("Message");
