// create an object of questions

$(document).ready(function () {
    // REMOVE THIS AFTER THE UPDATES
    $("#main").hide();

    $("#timer-card").hide();
    var options = [
        {
            question: "How many muscles do you use when you take a step?",
            choice: ["ONE! its called the leg muscle..and yes im SURE!", "200 Muscles", "324 plus 147 if you add the hand sway", "None, we live in a simulation"],
            answer: 1,
            right: "assets/images/right1.gif",
            wrong: "assets/images/wrong1.gif",
            time: "assets/images/time1.gif",

        },
        {
            question: "Your brain uses just as much power as a ...?",
            choice: ["10-W Light Bulb", "Nuclear Power Plant", "AAA Battery 1.5 Volts ", "let me think.. *bzztt bzzt* right now its using up energy like the T-1300 2nd Gen Motor"],
            answer: 0,
            right: "assets/images/right2.gif",
            wrong: "assets/images/wrong2.gif",
            time: "assets/images/time2.gif",
        },
        {
            question: "Humans (us) in general spends how many years in our lifetime eating?",
            choice: ["All the Time.. *MUNCH CRUNCH..MUNCH*", "1 Year", "I will answer this after I eat", " 5 Years "],
            answer: 3,
            right: "assets/images/right3.gif",
            wrong: "assets/images/wrong3.gif",
            time: "assets/images/time3.gif",
        },
        {
            question: "How many times does an average person breath everyday? ",
            choice: ["(✔) Im a Robot", "86,400", "Only 2 , BREATH IN- thats one , and BREATH OUT. see TWO! ..", "20,000 "],
            answer: 3,
            right: "assets/images/right4.gif",
            wrong: "assets/images/wrong4.gif",
            time: "assets/images/time4.gif",
        },
        {
            question: "In a year , how many days do you spend sleeping? ",
            choice: ["150 days", "\" you are in a simulation, you are neither awake nor dreaming \" ", "122 days", "Someday...some.. day.."],
            answer: 2,
            right: "assets/images/right5.gif",
            wrong: "assets/images/wrong5.gif",
            time: "assets/images/time5.gif",
        },
        {
            question: "Human Bone is stronger than ... ?",
            choice: ["Melded Titanium Alloy ", "4 Slotted +10 Broadsword", "Adamantium 13", "Steel"],
            answer: 3,
            right: "assets/images/right6.gif",
            wrong: "assets/images/wrong6.gif",
            time: "assets/images/time6.gif",
        },
        {
            question: "How many muscles do we use to smile?",
            choice: ["Depends, If you want to include the dash .:-) ", "More than 59, but less than 100 ..", "43", "00111010 00101001"],
            answer: 2,
            right: "assets/images/right7.gif",
            wrong: "assets/images/wrong7.gif",
            time: "assets/images/time7.gif",
        },
        {
            question: "A drop of human blood contains about how many cells?",
            choice: ["Cells are not liquid, So this question is invalid...", "Around 250 Million", "1 Billion", "Red and white blood cell. so 2 , FINAL ANSWER.."],
            answer: 1,
            right: "assets/images/right8.gif",
            wrong: "assets/images/wrong8.gif",
            time: "assets/images/time8.gif",
        },
        {
            question: "A typical adult human has roughly how many atoms?",
            choice: ["Somewhere around Bajillions and Trajillions , but less than Quajilions", "7,000,000,000,000,000,000,000,000,000", "No way to count that...", "90 Billion"],
            answer: 1,
            right: "assets/images/right9.gif",
            wrong: "assets/images/wrong9.gif",
            time: "assets/images/time9.gif",

        },
        {
            question: "Whats the strongest muscle in your body in terms of excerting force?",
            choice: ["The Heart, our human emotions are catalyst for war", "Elbow Muscle ", "Muscle group of Biceps and Triceps", "Masseter (Jaw Muscle)"],
            answer: 3,
            right: "assets/images/right10.gif",
            wrong: "assets/images/wrong10.gif",
            time: "assets/images/time10.gif",

        },



    ];

    var options1 = [
        {
            question: "How many muscles do you use when you take a step?",
            choice: ["126 Muscles", "200 Muscles", "324 Muscles", "10 Muscle"],
            answer: 1,
            right: "assets/images/right1.gif",
            wrong: "assets/images/wrong1.gif",
            time: "assets/images/time1.gif",

        },
        {
            question: "Your brain uses just as much power as a ...?",
            choice: ["10-W Light Bulb", "9 V Battery", "AAA Battery 1.5 Volts ", "20 Watt Amplifier"],
            answer: 0,
            right: "assets/images/right2.gif",
            wrong: "assets/images/wrong2.gif",
            time: "assets/images/time2.gif",
        },
        {
            question: "Humans (us) in general spends how many years in our lifetime eating?",
            choice: ["5 Years", "1 Year", "10 Year", " 6 Year"],
            answer: 3,
            right: "assets/images/right3.gif",
            wrong: "assets/images/wrong3.gif",
            time: "assets/images/time3.gif",
        },
        {
            question: "How many times does an average person breath everyday? ",
            choice: ["20,921", "86,400", "30,000", "6,000"],
            answer: 3,
            right: "assets/images/right4.gif",
            wrong: "assets/images/wrong4.gif",
            time: "assets/images/time4.gif",
        },
        {
            question: "In a year , how many days do you spend sleeping? ",
            choice: ["150 days", "12 Days", "122 days", "100 Days"],
            answer: 2,
            right: "assets/images/right5.gif",
            wrong: "assets/images/wrong5.gif",
            time: "assets/images/time5.gif",
        },
        {
            question: "Human Bone is stronger than ... ?",
            choice: ["Carbon", "Titanium", "Iron", "Steel"],
            answer: 3,
            right: "assets/images/right6.gif",
            wrong: "assets/images/wrong6.gif",
            time: "assets/images/time6.gif",
        },
        {
            question: "How many muscles do we use to smile?",
            choice: ["23", "71 including masseters", "43", "10"],
            answer: 2,
            right: "assets/images/right7.gif",
            wrong: "assets/images/wrong7.gif",
            time: "assets/images/time7.gif",
        },
        {
            question: "A drop of human blood contains about how many cells?",
            choice: ["1,000,000", "Around 250 Million", "1 Billion", "20 Billion"],
            answer: 1,
            right: "assets/images/right8.gif",
            wrong: "assets/images/wrong8.gif",
            time: "assets/images/time8.gif",
        },
        {
            question: "A typical adult human has roughly how many atoms?",
            choice: ["1,000,000", "7,000,000,000,000,000,000,000,000,000", "10 Centillion", "90 Billion"],
            answer: 1,
            right: "assets/images/right9.gif",
            wrong: "assets/images/wrong9.gif",
            time: "assets/images/time9.gif",

        },
        {
            question: "Whats the strongest muscle in your body in terms of excerting force?",
            choice: ["Biceps", "Triceps", "Gastropodia", "Masseter (Jaw Muscle)"],
            answer: 3,
            right: "assets/images/right10.gif",
            wrong: "assets/images/wrong10.gif",
            time: "assets/images/time10.gif",

        },



    ];


    // console.log(options[8].right + "positions")
    // console.log(options[6].right + "positions")
    // console.log(options[0].wrong + "positions")

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
    $("#reset1").hide();

    //click start button to start game..

    //get the element id start , then on click of that button..
    $("#start").on("click", function () {
        $("#main").show();
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

    function almostTime() {
        if (timer === 2) {
            $("#main").css("backgroundImage", "url('assets/images/timebgg1.gif')", "background-position", "center", "background-repeat", " no-repeat", "background-size", "cover");
            $("body").css("backgroundImage", "url('assets/images/burn.gif')", "background-position", "center", "background-repeat", " no-repeat", "background-size", "cover");
            $("#timer").attr("src", "assets/images/almosttime.gif");
            $('audio#clock')[0].play();
            $(".answerchoice").css("border", "solid 2px red");



        }
    }

    function resetTimerImg() {
        $("body").css("backgroundImage", "url('assets/images/bg.png')", "background-position: center");
        $("#timer").attr("src", "assets/images/time.gif");
        $("#main").css("backgroundImage", "url('assets/images/bgmain.gif')", "background-position", "center", "background-repeat", " no-repeat", "background-size", "cover");
        $(".answerchoice").css("border", "solid 2px blue");



    }




    //timer countdown FUNCTION --->>>
    function decrement() {
        //get the element ID of the timeleft , then display it on the HTML , 
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;
        almostTime();
        //stop timer if reach 0
        if (timer === -2) {
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
        resetTimerImg();
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
            userChoice.attr('id',"sound"+ i);
            console.log("sound" + i);
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
        $('audio#right')[0].play();

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
        $('audio#wrong')[0].play();
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
        $("#jumbotron").hide();
        $("#reset1").hide();
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

        if (correctAnswer > 8) {
            let aaa = "assets/images/right7.gif";
            $("#questions").empty();
            $('audio#winner')[0].play();
            $("#questions").html("<h3> You know yourself ..</h3>");
            $("#answers").append("<img src=" + aaa + ">");
            $("#answers").append("<h4> Correct: " + correctAnswer + "</h4>");
            $("#answers").append("<h4> Incorrect: " + wrongAnswer + "</h4>");
            $("#answers").append("<h4> Unanswered: " + timesUp + "</h4>");
            $("#reset").show();
            $("#reset").text("Play Again");
            $("#reset1").text("Try SERIOUS MODE");
            $("#reset1").show();

            correctAnswer = 0;
            wrongAnswer = 0;
            timesUp = 0;
        }

        else if (correctAnswer >= 5) {
            let aaa = "assets/images/wrong1.gif";
            $('audio#meh')[0].play();
            $("#questions").empty();
            $("#questions").html("<h3>You kinda made it!! .. kinda ..</h3>");
            $("#answers").append("<img src=" + aaa + ">");
            $("#answers").append("<h4> Correct: " + correctAnswer + "</h4>");
            $("#answers").append("<h4> Incorrect: " + wrongAnswer + "</h4>");
            $("#answers").append("<h4> Unanswered: " + timesUp + "</h4>");
            $("#reset").show();
            $("#reset").text("Play Again");
            $("#reset1").text("Try SERIOUS MODE");
            $("#reset1").show();

            correctAnswer = 0;
            wrongAnswer = 0;
            timesUp = 0;


        }

        else {
            let aaa = "assets/images/wrong5.gif";
            $('audio#loss')[0].play();
            $("#questions").empty();
            $("#questions").html("<h3>Congratulations! you scored more than -1 ! :)</h3>");
            $("#answers").append("<img src=" + aaa + ">");
            $("#answers").append("<h4> Correct: " + correctAnswer + "</h4>");
            $("#answers").append("<h4> Incorrect: " + wrongAnswer + "</h4>");
            $("#answers").append("<h4> Unanswered: " + timesUp + "</h4>");
            $("#reset").show();
            $("#reset").show();
            $("#reset1").text("Try SERIOUS MODE");
            $("#reset").text("Play Again");
            $("#reset1").show();

            correctAnswer = 0;
            wrongAnswer = 0;
            timesUp = 0;
        }
    }

    ////// START OF SERIOUS MODE ----------------------->>>>>>>>>>>>>>>>>>>>>

    $("#reset1").hide();
    //click start button to start game..

    //get the element id start , then on click of that button..
    $("#start1").on("click", function () {
        $("#main").show();
        $("#jumbotron").hide();
        $("#timer-card").show();
        //hide the start element id , 
        $("#start1").hide();
        $("#start").hide();

        //run the function "display the questions"
        displayQuestion1();
        //run the timer function..
        runTimer();
        //loop based on the number of lenght of the "options" array .
        for (var i = 0; i < options1.length; i++) {
            // push the index of the option[i] to the array holder , to be used later .. reference this
            holder.push(options1[i]);
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

    function almostTime() {
        if (timer === 2) {
            $("#main").css("backgroundImage", "url('assets/images/timebgg1.gif')", "background-position", "center", "background-repeat", " no-repeat", "background-size", "cover");
            $("body").css("backgroundImage", "url('assets/images/burn.gif')", "background-position", "center", "background-repeat", " no-repeat", "background-size", "cover");
            $("#timer").attr("src", "assets/images/almosttime.gif");
            $(".answerchoice").css("border", "solid 2px red");
            $('audio#clock')[0].play();
            


        }
    }

    function resetTimerImg() {
        $("body").css("backgroundImage", "url('assets/images/bg.png')", "background-position: center");
        $("#timer").attr("src", "assets/images/time.gif");
        $("#main").css("backgroundImage", "url('assets/images/bgmain.gif')", "background-position", "center", "background-repeat", " no-repeat", "background-size", "cover");
        $(".answerchoice").css("border", "solid 2px blue");



    }




    //timer countdown FUNCTION --->>>
    function decrement() {
        //get the element ID of the timeleft , then display it on the HTML , 
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;
        almostTime();
        //stop timer if reach 0
        if (timer === -2) {
            // then add to the variable of UNANSWERED COUNT .. 
            timesUp++;
            // run the stop function , reference this later .. 
            stop();
            // display the "TIME IS UP " , then display the correct answer
            $("#answers").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            // run the HIDEPICTURE function .. Reference this later ..
            ranOut1();
        }
    }

    function stop() {
        // set the running boolean variable to "false" . 
        running = false;
        // clear the intervalNumber . 
        resetTimerImg();
        clearInterval(intervalNumber);
        timer = 10;
        console.log(intervalNumber + "this is the intervalNumber on the stop function");
    }
    //randomly pick question in array if not already shown
    //display question and loop though and display possible answers
    function displayQuestion1() {
        showTimer();
        //generate random index in array,, THIS WILL BE USED FOR SPLICING THE ARRAY
        index = Math.floor(Math.random() * options1.length);
        //pick will be the basis for the displayed questions and answers
        pick = options1[index];

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
            userChoice.attr('id',"sound"+ i);
            console.log("sound" + i);
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
                rightAnswer1();

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
                wrongPick1();
            }
        })
    }

    // roundChecker function
    function rightAnswer1() {
        $('audio#right')[0].play();

        $("#timer-card").hide();
        // this will append the image if the answer is correct
        $("#answers").append("<img src=" + pick.right + ">");
        // console.log (newArray + "this is the newArray");
        // console.log (pick + "this is the pick");

        // SPLICE array of options based on the index generated by the index variable   , this will prevent the randomizer picking the same questions over and over again
        options.splice(index, 1);

        console.log(options1.length + "AFTER SPILCED");
        // console.log (index + "this is the INDEX ");

        // this will be the timer for the pictures to show out if the user has guessed it right or wrong
        let show = setTimeout(function () {
            $("#answers").empty();
            //run the score screen if all questions answered, 

            // since i am using the "SPLICE" the length of options array gets lower everytime it gets spliced out. making the use of ".length" unviable.
            if ((wrongAnswer + correctAnswer + timesUp) === roundChecker) {
                // console.log(options.length + "SCORER");
                // call the scoreReset function to display the stats
                scoreReset1();

                

                // else, run the timer and continue displaying the questions           
            } else {
                runTimer();
                displayQuestion1();
            }
            // this function is wrapped around the timeout 3 seconds to display the correct answer / wrong answer and display the gif
        }, 3000);


    }
    // WRONG ANSWER FUNCTION, EXACT COPY OF THE RIGHT ANSWER FUNCTION, just calling the associated gif for the wrong answer
    function wrongPick1() {
        $('audio#wrong')[0].play();
        $("#timer-card").hide();
        // this will append the image if the answer is correct
        $("#answers").append("<img src=" + pick.wrong + ">");

        // SPLICE array of options based on the index generated by the index variable   , this will prevent the randomizer picking the same questions over and over again
        options1.splice(index, 1);

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
                scoreReset1();
                // else, run the timer and continue displaying the questions           
            } else {
                runTimer();
                displayQuestion1();
            }
            // this function is wrapped around the timeout 3 seconds to display the correct answer / wrong answer and display the gif
        }, 3000);


    }

    function ranOut1() {
        $("#timer-card").hide();
        // this will append the image if the answer is correct
        $("#answers").append("<img src=" + pick.time + ">");
        // console.log (newArray + "this is the newArray");
        // console.log (pick + "this is the pick");

        // SPLICE array of options based on the index generated by the index variable   , this will prevent the randomizer picking the same questions over and over again
        options1.splice(index, 1);

        console.log(options1.length + "AFTER SPILCED");
        // console.log (index + "this is the INDEX ");

        // this will be the timer for the pictures to show out if the user has guessed it right or wrong
        let show = setTimeout(function () {
            $("#answers").empty();
            //run the score screen if all questions answered, 

            // since i am using the "SPLICE" the length of options array gets lower everytime it gets spliced out. making the use of ".length" unviable.
            if ((wrongAnswer + correctAnswer + timesUp) === roundChecker) {
                // console.log(options.length + "SCORER");
                // call the scoreReset function to display the stats
                scoreReset();
                // else, run the timer and continue displaying the questions           
            } else {
                runTimer();
                displayQuestion1();

            }
            // this function is wrapped around the timeout 3 seconds to display the correct answer / wrong answer and display the gif
        }, 3000);


    }



    // if the user wants to play again, he can click reset
    $("#reset1").on("click", function () {
        $("#jumbotron").hide();
        $("#reset").hide();
        $("#reset1").hide();
        $("#answers").empty();
        $("#questions").empty();
        for (var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion1();

    })
    // short handed the display of when the user wins
    function scoreReset1() {

        if (correctAnswer > 8) {
            let aaa = "assets/images/right7.gif";
            $("#questions").empty();
            $('audio#winner')[0].play();
            $("#questions").html("<h3> Congratulations! Top Notch Score!</h3>");
            $("#answers").append("<img src=" + aaa + ">");
            $("#answers").append("<h4> Correct: " + correctAnswer + "</h4>");
            $("#answers").append("<h4> Incorrect: " + wrongAnswer + "</h4>");
            $("#answers").append("<h4> Unanswered: " + timesUp + "</h4>");
            $("#reset1").show();
            $("#reset1").text("Play Again");
            $("#reset").text("Try FUN MODE!");
            $("#reset").show();


            correctAnswer = 0;
            wrongAnswer = 0;
            timesUp = 0;
        }

        else if (correctAnswer >= 5) {
            let aaa = "assets/images/wrong1.gif";
            $('audio#meh')[0].play();
            $("#questions").empty();
            $("#questions").html("<h3>Nice going!</h3>");
            $("#answers").append("<img src=" + aaa + ">");
            $("#answers").append("<h4> Correct: " + correctAnswer + "</h4>");
            $("#answers").append("<h4> Incorrect: " + wrongAnswer + "</h4>");
            $("#answers").append("<h4> Unanswered: " + timesUp + "</h4>");
            $("#reset1").show();
            $("#reset1").text("Play Again");
            $("#reset").text("Try FUN MODE!");
            $("#reset").show();
            correctAnswer = 0;
            wrongAnswer = 0;
            timesUp = 0;


        }

        else {
            let aaa = "assets/images/wrong5.gif";
            $('audio#loss')[0].play();
            $("#questions").empty();
            $("#questions").html("<h3>You can do better</h3>");
            $("#answers").append("<img src=" + aaa + ">");
            $("#answers").append("<h4> Correct: " + correctAnswer + "</h4>");
            $("#answers").append("<h4> Incorrect: " + wrongAnswer + "</h4>");
            $("#answers").append("<h4> Unanswered: " + timesUp + "</h4>");
            $("#reset1").show();
            $("#reset1").text("Play Again");
            $("#reset").text("Try FUN MODE!");
            $("#reset").show();
            correctAnswer = 0;
            wrongAnswer = 0;
            timesUp = 0;
        }
    }



    function clickclick() {
        $('audio#click')[0].play();
      }


    $("#sound0").mouseover(function() {
        clickclick();
        console.log("ENTERING")
    });

    $("#sound1").mouseover(function() {
        clickclick();
        console.log("ENTERING")
    });

    $("#sound2").mouseover(function() {
        clickclick();
        console.log("ENTERING")
    });

    $("#sound3").mouseover(function() {
        clickclick();
        console.log("ENTERING")
    });
        

var debugclick = 0;

// $(this).on("click", function () {
//     console.log(debugclick)
//     debugclick++
//     console.log(debugclick)
//     if (debugclick === 15){
//         correctAnswer = 5;
//         scoreReset();
//         $("#answers").empty();
//         alert("debug end screen")
//     }

// })

})


