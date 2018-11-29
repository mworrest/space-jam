// Navigation JS

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        x.className += " dropdown-border";
        x.className += " show";
    } else {
        x.className = "topnav";
    }
}


$(document).ready(function () {
    $('#navbar').load('includes/navbar.html');
    $('#footer').load('includes/footer.html');
    $('#test-content').load('includes/characters/bugs.html');
    $('#filmmakers').load('includes/filmmakers/reitman.html');
    $('#new').load('includes/new-characters/lebron.html');
    
//  New Characters
    $('#lebron-trigger').click(function (){
        $('#new').load('includes/new-characters/lebron.html');
    }); 
    $('#tina-trigger').click(function (){
        $('#new').load('includes/new-characters/tina.html');
    }); 
    $('#gossamer-trigger').click(function (){
        $('#new').load('includes/new-characters/gossamer.html');
    }); 
    $('#petunia-trigger').click(function (){
        $('#new').load('includes/new-characters/petunia.html');
    }); 

    
//  NBA Players
    $('#jordan-trigger').click(function (){
        $('#test-content').load('includes/characters/jordan.html');
    });
    $('#ewing-trigger').click(function (){
        $('#test-content').load('includes/characters/ewing.html');
    });
    $('#barkley-trigger').click(function (){
        $('#test-content').load('includes/characters/barkley.html');
    });
    $('#johnson-trigger').click(function (){
        $('#test-content').load('includes/characters/johnson.html');
    });
    $('#bogues-trigger').click(function (){
        $('#test-content').load('includes/characters/bogues.html');
    });
    $('#bradley-trigger').click(function (){
        $('#test-content').load('includes/characters/bradley.html');
    });
    
    
//  Looney Tunes 
    $('#bugs-trigger').click(function (){
        $('#test-content').load('includes/characters/bugs.html');
    });
    $('#daffy-trigger').click(function (){
        $('#test-content').load('includes/characters/daffy.html');
    });
     $('#porky-trigger').click(function (){
        $('#test-content').load('includes/characters/porky.html');
    });
    $('#tweety_syl-trigger').click(function (){
        $('#test-content').load('includes/characters/tweety.html');
    });
    $('#elmer-trigger').click(function (){
        $('#test-content').load('includes/characters/elmer.html');
    });
    $('#coyote-trigger').click(function (){
        $('#test-content').load('includes/characters/coyote.html');
    });
    
    
//  Filmmakers     
    $('#reitman-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/reitman.html');
    });
    $('#medjuck-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/medjuck.html');
    });
    $('#goldberg-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/goldberg.html');
    });
     $('#pytka-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/pytka.html');
    });
    $('#falk-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/falk.html');
    });
    $('#ross-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/ross.html');
    });
    $('#kirkland-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/kirkland.html');
    });
    $('#chapman-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/chapman.html');
    });
    $('#kahn-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/kahn.html');
    });
    $('#webb-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/webb.html');
    });
    $('#polk-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/polk.html');
    });
    $('#howard-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/newton.html');
    });
    $('#smith-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/smith.html');
    });
    $('#cervone-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/cervone.html');
    });
    $('#tippe-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/tippe.html');
    });
    $('#perkins-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/perkins.html');
    });
    $('#jones-trigger').click(function (){
        $('#filmmakers').load('includes/filmmakers/jones.html');
    });
    
    

});