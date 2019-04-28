// create an object of questions

$(document).ready(function () {

// REMOVE THIS AFTER THE UPDATES
    confirm("\n \n \n \n Hello there :)...  \n \n \n ");
    confirm("\n \n \n \n This is just the barebones structure of the Homework.... a proof of concept that my code works for it.. \n \n \n ");
    confirm("\n \n \n \n This doesnt have any style or Questions yet.. I will work on it later :) \n \n \n ");
    confirm("\n \n \n \n I just want to make sure i submit this before 11:59 PM today 04/27/19 \n \n \n ");
    confirm("\n \n \n \n Cuz the Bootcampspot website might be down.\n \n \n ");
    confirm("\n \n \n \n This is a proof of concept that my code works \n \n \n ");




// REMOVE THIS AFTER THE UPDATES

    $("#timer-card").hide();
    var options = [
        {
            question: "QUESTION 1",
            choice: ["choice1", "choice2", "choice3", "choice4"],
            answer: 3,
            right: "assets/images/test.gif",
            wrong: "assets/images/wrong.gif",
            time: "assets/images/notime.gif",

        },
        {
            question: "QUESTION 2",
            choice: ["choice1", "choice2", "choice3", "choice4"],
            answer: 1,
            right: "assets/images/test.gif",
            wrong: "assets/images/wrong.gif",
            time: "assets/images/notime.gif",
        },
        {
            question: "QUESTION 3",
            choice: ["choice1", "choice2", "choice3", "choice4"],
            answer: 0,
            right: "assets/images/test.gif",
            wrong: "assets/images/wrong.gif",
            time: "assets/images/notime.gif",
        },
        {
            question: "QUESTION 4",
            choice: ["choice1", "choice2", "choice3", "choice4"],
            answer: 1,
            right: "assets/images/test.gif",
            wrong: "assets/images/wrong.gif",
            time: "assets/images/notime.gif",
        },
        {
            question: "QUESTION 5",
            choice: ["choice1", "choice2", "choice3", "choice4"],
            answer: 2,
            right: "assets/images/test.gif",
            wrong: "assets/images/wrong.gif",
            time: "assets/images/notime.gif",
        },
        {
            question: "QUESTION 6",
            choice: ["choice1", "choice2", "choice3", "choice4"],
            answer: 3,
            right: "assets/images/test.gif",
            wrong: "assets/images/wrong.gif",
            time: "assets/images/notime.gif",
        },
        {
            question: "QUESTION 7",
            choice: ["choice1", "choice2", "choice3", "choice4"],
            answer: 2,
            right: "assets/images/test.gif",
            wrong: "assets/images/wrong.gif",
            time: "assets/images/notime.gif",
        },
        {
            question: "QUESTION 8",
            choice: ["choice1", "choice2", "choice3", "choice4"],
            answer: 2,
            right: "assets/images/test.gif",
            wrong: "assets/images/wrong.gif",
            time: "assets/images/notime.gif",
        },
        {
            question: "QUESTION 9",
            choice: ["choice1", "choice2", "choice3", "choice4"],
            answer: 3,
            right: "assets/images/test.gif",
            wrong: "assets/images/wrong.gif",
            time: "assets/images/notime.gif",

        },
        {
            question: "QUESTION 10",
            choice: ["choice1", "choice2", "choice3", "choice4"],
            answer: 3,
            right: "assets/images/test.gif",
            wrong: "assets/images/wrong.gif",
            time: "assets/images/notime.gif",

        },


    
    
    ];


    // a variable for correct , wrong and unanswered count
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var timesUp = 0;

    //timer value , this is the seconds per question display
    var timer = 10;

    // variable for the intervalNumber to be used on the set delay function to count down
    var intervalNumber = 1;

    // variable to store the pick of the person , this will be on a string
    var answerClicked = "";

    //variable for the countdown timer, to avoid the bug of it running faster when clicked more than once
    var running = false;

    //variable tobe used as the basis on when the game should end. when this variable count is equal to the answered + unanswerd, the code will stop and display the player stats ...
    var roundChecker = options.length;

    console.log(roundChecker + "var");

    console.log(options.length + "raw count");
    var pick;
    var index;
    var holder = [];

    // console.log(intervalNumber + "this is the interval id outside the function");

    // run the reset function , then hide the objects attached to it to start the game
    $("#reset").hide();
    //click start button to start game..

    //get the element id start , then on click of that button..
    $("#start").on("click", function () {
        $("#jumbotron").hide();
        $("#timer-card").show();
        //hide the start element id , 
        $("#start").hide();
        //run the function "display the questions"
        displayQuestion();
        //run the timer function..
        runTimer();
        //loop based on the number of lenght of the "options" array .
        for (var i = 0; i < options.length; i++) {
            // push the index of the option[i] to the array holder , to be used later .. reference this
            holder.push(options[i]);
            // console.log (holder);
            // console.log (options[i] + "this is the options") ;
        }
    })
    //timer start
    function runTimer() {
        //if the timer is "NOT" running, start the countdown 
        if (!running) {
            // the decrement is set to 1000 which means, 1 second , run the FUNCTION decrement every 1 second
            intervalNumber = setInterval(decrement, 1000);
            //then set the boolean to true . this will prevent the timer from counting down faster every time the function is called.
            running = true;
            console.log(intervalNumber + "THIS IS THE runTIMER");
        }
    }

// this function prevents the bug of the timer not showing up the right time as soon as the next question gets loaded
function showTimer() {
    $("#timer-card").show();    
    $("#timeleft").html("<h3>READY?</h3>");
}



    //timer countdown FUNCTION --->>>
    function decrement() {
        //get the element ID of the timeleft , then display it on the HTML , 
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;
        //stop timer if reach 0
        if (timer === 0) {
            // then add to the variable of UNANSWERED COUNT .. 
            timesUp++;
            // run the stop function , reference this later .. 
            stop();
            // display the "TIME IS UP " , then display the correct answer
            $("#answers").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            // run the HIDEPICTURE function .. Reference this later ..
            ranOut();
        }
    }


    //TEST
    //     var myVar;

    //     function myFunction() {
    //     myVar = setInterval(alertFunc, 4000);
    // }

    //     function alertFunc() {
    //   alert("Hello!");
    // }
    // myFunction();
    // console.log(myVar + "myvar value");

    //timer stop
    function stop() {
        // set the running boolean variable to "false" . 
        running = false;
        // clear the intervalNumber . 
        clearInterval(intervalNumber);
        timer = 10;
        console.log(intervalNumber + "this is the intervalNumber on the stop function");
    }
    //randomly pick question in array if not already shown
    //display question and loop though and display possible answers
    function displayQuestion() {
        showTimer();
        //generate random index in array,, THIS WILL BE USED FOR SPLICING THE ARRAY
        index = Math.floor(Math.random() * options.length);
        //pick will be the basis for the displayed questions and answers
        pick = options[index];

        //		console.log(pick.question);
        //iterate through answer array and display

        // get the id question block then create an HTML file for it , with the values of the pick.question
        $("#questions").html("<h2>" + pick.question + "</h2>");
        // next is to generate the questions , 

        // loop thru all the pick choices length ,
        for (var i = 0; i < pick.choice.length; i++) {
            //generate a variable for user choice with the prefix of "create a div "
            var userChoice = $("<div>");
            // on that generated variable , add a class for it, this will help in styling
            userChoice.addClass("answerchoice");
            // on that generated variable , add the html an html text to it called , pick.choice[i] this will display all the options 
            userChoice.html(pick.choice[i]);

            //assign array position to it so can check answer, generate an attribute for it , this will be the basis for the checker, the attribute to be assigned is the number of the index
            userChoice.attr("data-guessvalue", i);
            // console.log (userChoice.attr + "THIS IS THE USERCHOICEATTR");


            // finally , append that to the answer block to generate all the question , this is not randomized, 
            $("#answers").append(userChoice);
            //		}
        }


        //click function to select answer and outcomes
        $(".answerchoice").on("click", function () {
            //grab array position from answerClicked attribute ,  then match it to the pick answer. use the parse to generate the integer from the attribute of "data-guessvalue". use this to compare the value to add if its right or wrong
            answerClicked = parseInt($(this).attr("data-guessvalue"));
            // console.log (this + "THIS IS THE THIS ON THE FUNCTION CHECKER ")
            //correct guess or wrong guess outcomes
            if (answerClicked === pick.answer) {
                console.log(pick.answer + "THIS IS THE PICK ANSWER")
                // call the stop function , 
                stop();
                correctAnswer++;
                // clear the user guess value to make way for the next user guess value
                answerClicked = "";
                //display the notification, correct!
                $("#answers").html("<p>Correct!</p>");
                //call the hidepicture function, reference later
                rightAnswer();

                // if the above statement is not met , it will trigger the else function
            } else {

                // call the stop function, then 
                stop();
                // incriment the wrong count variable
                wrongAnswer++;
                // clear the user array
                answerClicked = "";
                // display the wrong thing 
                $("#answers").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
                // call the win/loss
                wrongPick();
            }
        })
    }

    // roundChecker function
    function rightAnswer() {
        $("#timer-card").hide();
        // this will append the image if the answer is correct
        $("#answers").append("<img src=" + pick.right + ">");
        // console.log (newArray + "this is the newArray");
        // console.log (pick + "this is the pick");

        // SPLICE array of options based on the index generated by the index variable   , this will prevent the randomizer picking the same questions over and over again
        options.splice(index, 1);

        console.log(options.length + "AFTER SPILCED");
        // console.log (index + "this is the INDEX ");

        // this will be the timer for the pictures to show out if the user has guessed it right or wrong
        let show = setTimeout(function () {
            $("#answers").empty();
            // reset the timer back to 10
            timer = 10;
            //run the score screen if all questions answered, 

            // since i am using the "SPLICE" the length of options array gets lower everytime it gets spliced out. making the use of ".length" unviable.
            if ((wrongAnswer + correctAnswer + timesUp) === roundChecker) {
                // console.log(options.length + "SCORER");
                // call the scoreReset function to display the stats
                scoreReset();

                // else, run the timer and continue displaying the questions           
            } else {
                runTimer();
                displayQuestion();
            }
            // this function is wrapped around the timeout 3 seconds to display the correct answer / wrong answer and display the gif
        }, 3000);


    }
    // WRONG ANSWER FUNCTION, EXACT COPY OF THE RIGHT ANSWER FUNCTION, just calling the associated gif for the wrong answer
    function wrongPick() {
        $("#timer-card").hide();
        // this will append the image if the answer is correct
        $("#answers").append("<img src=" + pick.wrong + ">");

        // SPLICE array of options based on the index generated by the index variable   , this will prevent the randomizer picking the same questions over and over again
        options.splice(index, 1);

        console.log(options.length + "AFTER SPILCED");
        // console.log (index + "this is the INDEX ");

        // this will be the timer for the pictures to show out if the user has guessed it right or wrong
        let show = setTimeout(function () {
            $("#answers").empty();
            // reset the timer back to 10
            timer = 10;
            //run the score screen if all questions answered, 

            // since i am using the "SPLICE" the length of options array gets lower everytime it gets spliced out. making the use of ".length" unviable.
            if ((wrongAnswer + correctAnswer + timesUp) === roundChecker) {
                // console.log(options.length + "SCORER");
                // call the scoreReset function to display the stats
                scoreReset();
                // else, run the timer and continue displaying the questions           
            } else {
                runTimer();
                displayQuestion();
                        }
            // this function is wrapped around the timeout 3 seconds to display the correct answer / wrong answer and display the gif
        }, 3000);


    }

    function ranOut() {
        $("#timer-card").hide();
        // this will append the image if the answer is correct
        $("#answers").append("<img src=" + pick.time + ">");
        // console.log (newArray + "this is the newArray");
        // console.log (pick + "this is the pick");

        // SPLICE array of options based on the index generated by the index variable   , this will prevent the randomizer picking the same questions over and over again
        options.splice(index, 1);

        console.log(options.length + "AFTER SPILCED");
        // console.log (index + "this is the INDEX ");

        // this will be the timer for the pictures to show out if the user has guessed it right or wrong
        let show = setTimeout(function () {
            $("#answers").empty();
            // reset the timer back to 10
            timer = 10;
            //run the score screen if all questions answered, 

            // since i am using the "SPLICE" the length of options array gets lower everytime it gets spliced out. making the use of ".length" unviable.
            if ((wrongAnswer + correctAnswer + timesUp) === roundChecker) {
                // console.log(options.length + "SCORER");
                // call the scoreReset function to display the stats
                scoreReset();
                // else, run the timer and continue displaying the questions           
            } else {
                runTimer();
                displayQuestion();
                
            }
            // this function is wrapped around the timeout 3 seconds to display the correct answer / wrong answer and display the gif
        }, 3000);


    }



    // if the user wants to play again, he can click reset
    $("#reset").on("click", function () {
        $("#jumbotron").show();
        $("#reset").hide();
        $("#answers").empty();
        $("#questions").empty();
        for (var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();

    })
    // short handed the display of when the user wins
    function scoreReset() {
        $("#questions").empty();
        $("#questions").html("<h3>NICE!! </h3>");
        $("#answers").append("<h4> Correct: " + correctAnswer + "</h4>");
        $("#answers").append("<h4> Incorrect: " + wrongAnswer + "</h4>");
        $("#answers").append("<h4> Unanswered: " + timesUp + "</h4>");
        $("#reset").show();
        correctAnswer = 0;
        wrongAnswer = 0;
        timesUp = 0;
    }

})


