// Validate first question: correct response is Monstar: VOID    
        
        $("#monstar-bupkus, #monstar-nada, #monstar-zilch, #monstar-null").on("click", function () {
            $("#match-feedback").html("Sorry, that's not correct. Please try again.");
             $("#next-question").load("includes/match-the-monstars/next-question-reset.html");
        });
        
        $("#monstar-void").on ( "click", function () {
            $("#match-feedback").html("That's correct!");
            $("#next-question").load("includes/match-the-monstars/next-question-button.html");
            $("#next-question").on ( "click", function () {
        
//    Load second question: correct response is Monstar: BUPKUS
        
                $("#match-feedback").html("");
                $("#next-question").load("includes/match-the-monstars/next-question-reset.html");
                $("#nerdluck-match").load ("includes/match-the-monstars/question-2.html", function () {
                    $("#monstar-void, #monstar-nada, #monstar-zilch, #monstar-null").on ("click", function () {
                        $("#match-feedback").html("Sorry, that's not correct. Please try again.");
                         $("#next-question").load("includes/match-the-monstars/next-question-reset.html");
                    });
                });
                 $("#monstar-bupkus").on ( "click", function () {
                    $("#match-feedback").html("That's correct!"); 
                    $("#next-question").load("includes/match-the-monstars/next-question-button.html");
                    $("#next-question").on ( "click", function () {

//    Load third question: correct response is Monstar: NULL
                        
                        $("#match-feedback").html("");
                        $("#next-question").load("includes/match-the-monstars/next-question-reset.html");
                        $("#nerdluck-match").load ("includes/match-the-monstars/question-3.html", function () {
                            $("#monstar-void, #monstar-nada, #monstar-zilch, #monstar-bupkus").on ("click", function () {
                        $("#match-feedback").html("Sorry, that's not correct. Please try again.");
                         $("#next-question").load("includes/match-the-monstars/next-question-reset.html");        
                            });
                        });
                 $("#monstar-null").on ( "click", function () {
                    $("#match-feedback").html("That's correct!"); 
                    $("#next-question").load("includes/match-the-monstars/next-question-button.html");
                    $("#next-question").on ( "click", function () {

//    Load fourth question: correct response is Monstar: NADA (script stops working here for some reason)                                              
                        $("#match-feedback").html("");
                        $("#next-question").load("includes/match-the-monstars/next-question-reset.html");
                        $("#nerdluck-match").load ("includes/match-the-monstars/question-4.html", function () {
                            $("#monstar-void, #monstar-null, #monstar-zilch, #monstar-bupkus").on ("click", function () {
                        $("#match-feedback").html("Sorry, that's not correct. Please try again.");
                         $("#next-question").load("includes/match-the-monstars/next-question-reset.html");        
                            });
                        });
                 $("#monstar-nada").on ( "click", function () {
                    $("#match-feedback").html("That's correct!"); 
                    $("#next-question").load("includes/match-the-monstars/next-question-button.html");
                    $("#next-question").on ( "click", function () {
                        
//    Load fifth question: correct response is Monstar: ZILCH
                        
                        $("#match-feedback").html("");
                        $("#next-question").load("includes/match-the-monstars/next-question-reset.html");
                        $("#nerdluck-match").load ("includes/match-the-monstars/question-5.html", function () {
                            $("#monstar-void, #monstar-null, #monstar-nada, #monstar-bupkus").on ("click", function () {
                        $("#match-feedback").html("Sorry, that's not correct. Please try again.");
                        $("#next-question").load("includes/match-the-monstars/next-question-reset.html");        
                            });
                        });
                 $("#monstar-zilch").on ( "click", function () {
                    $("#match-feedback").html("That's correct! Congrats on matching all the monstars!");
                                    });
                                })        
                            })
                        })
                    })
                })
            })
        })
    });