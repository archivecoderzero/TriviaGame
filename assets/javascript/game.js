// PSUEDO CODE //

// Create variables, equeal to the object, of which the randomizer will pick the order of the questions that is going to be displayed .

// Create a timer that counts backwards.it is initalized by the "start now " button from the jumbrtron .when that time strikes zero, it will display message which tells the player that he lost a turn. Will come back to this later.

// Create a question that has 4 choices , the user will pick 1 out of the 4 and it will display if the user has it right , incorporate the time on each question, when the user picks an answer , display corresponding choices, probably you need to create an object here. if you want to randomize the questions being asked , you probably need to put in an object . 

// Create an event whenever the user click an answer, it verifies if the the answert clicked was the correct answer. for fun stuff , you can also put in an onclick event whenver the user clicks outside the range , like change the css backround or make the background static .

// Every time the user clicks a "choice" , the function verifies if it is the right or wrong answer and tells the user by displaying a funny gif . 

// after questions , show the stats of the player and then reroll the function to pick from the object at random , if you have time , you can also have the user pick the theme of questions , then change the css background based on that choice,,,IF YOU HAVE TIME ..

// for fun stuff , include something like a music and a sound when the user picks something.. 

// START CODING HERE : 
var questions = [		

// test question object .

//QUESTION NUMBER 1 //
{
question: "question Number 1", 
choice: ["answer1","answer2","answer3","answer4"],
answer: 3,
right: "assets/images/test.gif",
wrong: "assets/images/test1.gif",
},
//QUESTION NUMBER 1 //


//QUESTION NUMBER 2 //
{
    question: "question Number 2", 
    choice: ["answer1","answer2","answer3","answer4"],
    answer: 1,
    right: "assets/images/test.gif",
    wrong: "assets/images/test1.gif",

},
    //QUESTION NUMBER 2 //


//QUESTION NUMBER 3 //
{
    question: "question Number 3", 
    choice: ["answer1","answer2","answer3","answer4"],
    answer: 3,
    right: "assets/images/test.gif",
    wrong: "assets/images/test1.gif",

},
    //QUESTION NUMBER 3 //


    //QUESTION NUMBER 4 //
{
    question: "question Number 4", 
    choice: ["answer1","answer2","answer3","answer4"],
    answer: 1,
    right: "assets/images/test.gif" ,
    wrong: "assets/images/test1.gif",

},
    //QUESTION NUMBER 4 //


    //QUESTION NUMBER 5 //
{
    question: "question Number 5", 
    choice: ["answer1","answer2","answer3","answer4"],
    answer: 4,
    right: "assets/images/test.gif",
    wrong: "assets/images/test1.gif",


},
    //QUESTION NUMBER 5 //



//END OF QUESTIONARES
]
var correctAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var timeRemaining = 10;
var intervalId;
var correctCount = 0;
var wrongCount = 0;
var unanswerCount = 0;
var running = false;


$("#gameStart").on("click", function () {
    $("#gameStart").hide();
    gameStart ();
})


// MAIN FUNCTION WHEN THE GAME START BUTTON IS PRESSED ---------START
function gameStart () {
    runTimer();

}

// MAIN FUNCTION WHEN THE GAME START BUTTON IS PRESSED ---------END



//TIMER FUNCTIONS HERE ------------------------------------ START
function runTimer(){
if (running == false) {
intervalId = setInterval(decrement, 1000); 
running = true;
}
}

function decrement() {
$("#timeleft").text(timeRemaining);
timeRemaining --;

if (timeRemaining === 0) {
    unanswerCount++;
    stop();
    //show that the answer was wrong
}	
}

//timer stop
function stop() {
running = false;
clearInterval(intervalId);
}

//TIMER FUNCTIONS HERE ------------------------------------END






