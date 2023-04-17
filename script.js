// Variables
var startBtn = document.getElementById("startBtn");
var homeContainer = document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionText = document.getElementById("questionText");
var score = 0;
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var highScores=[];
var output="";

let i =0;
var timeRemaining = 50;
var time= true;
var timerStart = false;
var countDownTimer = document.getElementById("countDownTimer");


// Timer run-out
var countDown = setInterval(setCountDown, 1000);

function setCountDown(){
    if(timerStart)
    timeRemaining--;
    if(timeRemaining <= 0){
        quizOver();
    timeRemaining = 0;
    }
    document.getElementById("timer").innerHTML = timeRemaining;
};


// Questions
var quizQuestions = [{
    questions: "Arrays in Javascript can be used to store ___.",
    answerOptions: ["A: Arrays", "B: Strings", "C: Booleans", "D: Alerts"],
    correctAnswer: 3
},
{
    questions: "A very useful tool used during development and debugging for printing content to the debugger is___.",
    answerOptions:[ "A: Javascript", "B: For Loops", "C: Bash", "D: Console.log"],
    correctAnswer: 2
},
{
    questions: "Commonly used data types DO NOT include:",
    answerOptions: ["A: Strings", "B: Numbers", "C: Alerts", "D: Booleans"],
    correctAnswer: 4
},
{
    questions: "String values must be enclosed within ___ when being assigned to variables.",
    answerOptions: ["A: Curly Brackets","B: Commas", "C: Parentheses", "D: Quotation Marks"],
    correctAnswer: 4
},
{
    questions: "The condition of an if / else statement is enclosed within ___.",
    answerOptions: ["A: Curly Brackets", "B: Quotation Marks", "C: Square Brackets", "D: Parentheses"],
    correctAnswer: 1}
];

// Start Quiz
startBtn.addEventListener("click",function() {
    homeContainer.style.display="none";
    quizContainer.style.display = "block";
    countDownTimer.style.display="block";
    document.getElementById("score").innerHTML="Score " + score;
    document.getElementById("scoreTrack").style.display="block";
    setCountDown();
    startQuiz();
    timerStart= true;
});

function startQuiz(){
questionText.textContent = quizQuestions[i].questions;
answerA.textContent = quizQuestions[i].answerOptions[0];
answerB.textContent = quizQuestions[i].answerOptions[1];
answerC.textContent = quizQuestions[i].answerOptions[2];
answerD.textContent = quizQuestions[i].answerOptions[3];
};

//Answered A
answerA.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    if (correctAnswer === 0){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
        setTimeout(function(){
            document.getElementById("userResponse").innerHTML = "";
            }, 500)


        score = score + 1;
        document.getElementById("score").innerHTML="Score " + score;

}
else{
    timeRemaining -= 10;
    document.getElementById("userResponse").innerHTML = "Incorrect";
    setTimeout(function(){
        document.getElementById("userResponse").innerHTML = "";
        }, 500)
}

if (i>= quizQuestions.length -1){
quizOver();
} else {
    i++
    startQuiz();
};

});

//Answered B
answerB.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    if (correctAnswer === 1){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
        setTimeout(function(){
            document.getElementById("userResponse").innerHTML = "";
            }, 500)

        score = score + 1;
        document.getElementById("score").innerHTML="Score " + score;
   
}else{
    timeRemaining -= 10;
    document.getElementById("userResponse").innerHTML = "Incorrect";
    setTimeout(function(){
        document.getElementById("userResponse").innerHTML = "";
        }, 500)
}
if (i>= quizQuestions.length -1){
    quizOver();
} else {
    i++
    startQuiz();
};

});

//Answered C
answerC.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    if (correctAnswer === 2){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
        setTimeout(function(){
            document.getElementById("userResponse").innerHTML = "";
            }, 500)

        score = score + 1;
        document.getElementById("score").innerHTML="Score " + score;
    }
    else
    {
        timeRemaining -= 10;
        document.getElementById("userResponse").innerHTML = "Incorrect";
        setTimeout(function()
        {
        document.getElementById("userResponse").innerHTML = "";
        }, 500)
    }

if (i>= quizQuestions.length -1){
quizOver();
} else {
    i++
    startQuiz();
};
});

//Answered D
answerD.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    if (correctAnswer === 3){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
        setTimeout(function(){
            document.getElementById("userResponse").innerHTML = "";
            }, 500)
       
        score = score + 1;
        document.getElementById("score").innerHTML="Score " + score;
}else{
    timeRemaining -= 10;
    document.getElementById("userResponse").innerHTML = "Incorrect";
    setTimeout(function(){
        document.getElementById("userResponse").innerHTML = "";
        }, 500)
}
if (i>= quizQuestions.length -1){
quizOver();

} else {
    i++
    startQuiz();
};
});

//Quiz Over
function quizOver(){
    document.getElementById("quizContainer").style.display="none";
    document.getElementById("countDownTimer").style.display="none";
    document.getElementById("scoreTrack").style.display="none";
    document.getElementById("userResponse").innerHTML="";
    document.getElementById("finalScore").innerHTML= score;
    document.getElementById("endGame").style.display="block";
};

//Initials and Score
function submitScore(){
   highScores.push(document.getElementById("initia+ls").value+" "+score);
    viewHighScores();
};

function viewHighScores(){
    document.getElementById("endGame").style.display= "none";
    document.getElementById("quizContainer").style.display= "none";
    document.getElementById("homeContainer").style.display= "none";
    document.getElementById("highScoresPage").style.display="block";
    document.getElementById("highScores").textContent= highScores.join('\n');      
     clearQuiz();
};

//Go to Homepage
function goHome(){
    document.getElementById("highScoresPage").style.display="none";
    document.getElementById("homeContainer").style.display="block";
    countDownTimer.style.display="block";
    document.getElementById("score").style.display="block";
    document.getElementById("scoreTrack").style.display="block";
    score=0;
    document.getElementById("score").innerHTML="Score " + score;
    clearQuiz();
};

//Clearing Scores and Page
function clearScores(){
    highScores = [];
    document.getElementById("highScores").innerHTML= highScores;  
};

function clearQuiz(){
document.getElementById("initials").value="";
timeRemaining=75;
time=true;
timerStart=false;
i=0
};