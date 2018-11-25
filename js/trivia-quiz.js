
//Incorrect answer, show 'try again' message
    
        $("#1a, #1b, #1d, #2b, #2c, #2d, #3a, #3b, #3d, #4b, #4c, #4d, #5a, #5c, #5d, #6a, #6c, #6d").on( "click", function() {
          $("#quiz-feedback").html("Sorry, that's not correct. Please try again.");
          });
    
//Correct answer, show next question button and load QUESTION 2 when button is clicked

        $("#1c").on( "click", function () {
            $("#quiz-feedback").html("That's correct!");
            $("#next-question").load("includes/trivia-quiz/next-question-button.html");
            $("#next-question").on( "click", function () {
            $(".quiz-question").load("includes/trivia-quiz/question-2.html");
        })
          });

//Correct answer, show next question button and load QUESTION 3 when button is clicked

        $("#2a").on( "click", function () {
            $("#quiz-feedback").html("That's correct!");
            $("#next-question").load("includes/trivia-quiz/next-question-button.html");
            $("#next-question").on( "click", function () {
            $(".quiz-question").load("includes/trivia-quiz/question-3.html");
        })
          });
    
//Correct answer, show next question button and load QUESTION 4 when button is clicked

        $("#3c").on( "click", function () {
            $("#quiz-feedback").html("That's correct!");
            $("#next-question").load("includes/trivia-quiz/next-question-button.html");
            $("#next-question").on( "click", function () {
            $(".quiz-question").load("includes/trivia-quiz/question-4.html");
        })
          });

//Correct answer, show next question button and load QUESTION 5 when button is clicked
 
        $("#4a").on( "click", function () {
            $("#quiz-feedback").html("That's correct!");
            $("#next-question").load("includes/trivia-quiz/next-question-button.html");
            $("#next-question").on( "click", function () {
            $(".quiz-question").load("includes/trivia-quiz/question-5.html");
        })
          });
    
//Correct answer, show next question button and load QUESTION 6 when button is clicked

        $("#5b").on( "click", function () {
            $("#quiz-feedback").html("That's correct!");
            $("#next-question").load("includes/trivia-quiz/next-question-button.html");
            $("#next-question").on( "click", function () {
            $(".quiz-question").load("includes/trivia-quiz/question-6.html");
        })
          });
    
//Correct answer, end quiz

        $("#6b").on( "click", function () {
            $("#quiz-feedback").html("That's correct! Congrats on finishing the quiz, you're officially a Looney Tunes wiz!");
            });
    