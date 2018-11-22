$(document).ready(function () {
    $('#navbar').load('includes/navbar.html');
    $('#footer').load('includes/footer.html');
    $('#test-content').load('includes/characters/bugs.html');
    
    
    
    $('#jordan-trigger').click(function (){
        $('#test-content').load('includes/characters/jordan.html');
    });
    $('#ewing-trigger').click(function (){
        $('#test-content').load('includes/characters/ewing.html');
    });
    $('#bugs-trigger').click(function (){
        $('#test-content').load('includes/characters/bugs.html');
    });
    

});