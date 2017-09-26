
userAnwers = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var len = questions.length;
var currentQuestion;
var questionCounter = 0;
var clickCounter = 0;
var clickedButton;

$(".quiz").ready(function () {
    $(".quiz").hide();
});


$("#startingButton").on("click", function () {

    $("#startingButton").hide();
    $("#startingText").hide();
    $(".quiz").show();
    generate();
    countdown();

});

function countdown() {
    var seconds = 20;
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

    var rand = Math.floor(Math.random() * len);
    currentQuestion = questions[rand];
    $("#questionPlace").html(currentQuestion.question);
    var ansLen = currentQuestion.answers.length;

    for (var i = 0; i < ansLen; i++) {
        $("#" + i).append(currentQuestion.answers[i]).show();
       
    }
 
    for ( i; i < 4; i++ ) {
        var emptyButton = $("#" + i).hide();
    }

    questionCounter++;
    $("#questionCounter").html(questionCounter);


}

$("label").on("click", function () {
    var guess = $(this)[0].innerText;
    console.log(guess);
    correctGuess(guess);
    clickCounter++;
    console.log(clickCounter);

});

function correctGuess(choice) {

    var correctAnswer = currentQuestion.solution;
    console.log(correctAnswer);
    if (choice === correctAnswer) {
        correctAnswers++;
        console.log("Great Job!");
        alert("Great Job!");
        console.log(correctAnswers);
        clearInterval(int);
        reset();
        nextQuestion();
    } else {
        alert("Hmmmmmm");
        console.log("Hmmmmm");
        incorrectAnswers++;
        console.log(incorrectAnswers);
        clearInterval(int);
        reset();
        nextQuestion();

    }

}


function nextQuestion() {
    clearInterval(int);
    $("label").html("");
    generate();
    reset();
}

function reset() {
    seconds = 15;
    countdown();

}
if (clickCounter == 10) {
    alert("Thank you for taking the test!");
//    results();

}


//    $("#questionPlace").html(questions[rand].question);
//    
// //for loop around questions answers
//  //i is iterator for question index
//  //j is the iterator for the answers index
//  for(var j = 0; j > questions[i].answers.length; j++){
//    //appended buttons to the button div
//    //id is j to determine value
//    //doSomething passes over the question index and the answer index
//    //  `   tick mark allows you to insert varaibles with a ${} around the variable
//    // look up javascript tick marks to read more in it
//    $("div").append(`<button id="${j}" onClick=doSomething(j, i)>${questions[i].answers[j]}</button>`)
//  }
//
//  //accepts the answer index and question index
//  doSomething(answer, question) {
//    //determines solution from the questions solution and the answer the user chose
//    if(questions[question].solution == questions[question].answers[answer]){
//
//    }
//  }
//
//
//questions[0].answers[1]
//function generate () {
//    $("#questionPlace").html(questions[1].question);
//    $(myArray)[1].addClass('active');
//    var questionsSomething = questions[0];
//    console.log(questions[1].question);
//    $("#answersPlace").html("<h1>Hello here</h1>");
//}
//var container = document.createElement("div");
//for (var i = 0; i < questions.length; i++) {
//    var questionsContainer = document.createElement("div");
//    questionsContainerId = "questions" + 1;  
//}
// make a variable thats going to hold the question number
// randomly select an element from questions array 
// increment varibale that holds question number by one
// remove that element from array
// make html consisting of 
// question text
// possible answers
// <button value="answer_value">answer_text</button>
// register event handlers for possible answer buttons 
// function(event) {
//      var value_of_button_clicked = event.target.value // probably hold the value
// }
// user clicks button answer
// compare value of button with value of correct answer
// if it is the same
// display message congrats || optional
// move on to next question
// else
// display green border around correct answer
// move on to next questions