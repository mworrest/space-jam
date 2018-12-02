//    Validate QUESTION 1: incorrect -> try again / correct -> next question 
    
        $("#1a, #1b, #1d").on( "click", function() {
          $("#quiz-feedback").html("Sorry, that's not correct. Please try again.");
            $("#next-question").load("includes/trivia-quiz/next-question-reset.html");
          });
            
        $("#1c").on( "click", function () {
            $("#quiz-feedback").html("That's correct!");
            $("#next-question").load("includes/trivia-quiz/next-question-button.html");
            $("#next-question").on( "click", function () {
            $(".quiz-question").load( "includes/trivia-quiz/question-2.html", function () {

//    Validate QUESTION 2: incorrect -> try again / correct -> next question
                
                $("#2b, #2c, #2d").on( "click", function() {
                    $("#quiz-feedback").html("Sorry, that's not correct. Please try again.");
                });
                $("#2a").on( "click", function () {
                    $("#quiz-feedback").html("That's correct!");
                    $("#next-question").load("includes/trivia-quiz/next-question-button.html");
                    $("#next-question").on( "click", function () {
                    $(".quiz-question").load( "includes/trivia-quiz/question-3.html", function () {

//    Validate QUESTION 3: incorrect -> try again / correct -> next question
                        
                        $("#3a, #3b, #3d").on( "click", function() {
                            $("#quiz-feedback").html("Sorry, that's not correct. Please try again.");
                        });
                        $("#3c").on( "click", function () {
                            $("#quiz-feedback").html("That's correct!");
                            $("#next-question").load("includes/trivia-quiz/next-question-button.html");
                            $("#next-question").on( "click", function () {
                            $(".quiz-question").load( "includes/trivia-quiz/question-4.html", function () { 

//    Validate QUESTION 4: incorrect -> try again / correct -> next question
                                
                                $("#4b, #4c, #4d").on( "click", function() {
                                    $("#quiz-feedback").html("Sorry, that's not correct. Please try again.");
                                });
                                $("#4a").on( "click", function () {
                                    $("#quiz-feedback").html("That's correct!");
                                    $("#next-question").load("includes/trivia-quiz/next-question-button.html");
                                    $("#next-question").on( "click", function () {
                                    $(".quiz-question").load( "includes/trivia-quiz/question-5.html", function () {

//    Validate QUESTION 5: incorrect -> try again / correct -> next question
                                        
                                            $("#5a, #5c, #5d").on( "click", function() {
                                                $("#quiz-feedback").html("Sorry, that's not correct. Please try again.");
                                            });
                                            $("#5b").on( "click", function () {
                                                $("#quiz-feedback").html("That's correct!");
                                                $("#next-question").load("includes/trivia-quiz/next-question-button.html");
                                                $("#next-question").on( "click", function () {
                                                $(".quiz-question").load( "includes/trivia-quiz/question-6.html", function () {
                                                        
//    Validate QUESTION 6: incorrect -> try again / correct -> finish quiz
                                                    
                                                        $("#6a, #6c, #6d").on( "click", function() {
                                                            $("#quiz-feedback").html("Sorry, that's not correct. Please try again.");
                                                        });
                                                        $("#6b").on( "click", function () {
                                                            $("#quiz-feedback").html("That's correct! Congrats on finishing the quiz! You're a Looney Tunes wiz!");
                                                                
                                                                })
                                                            })
                                                        })
                                                    })
                                                })  
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
