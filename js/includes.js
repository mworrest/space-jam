$(document).ready(function () {
    $('#navbar').load('includes/navbar.html');
    $('#sidebar_issues').load('includes/sidebar_issues.html');
    $('#footer').load('includes/footer.html');
    
    $('#jordan-trigger').click(function(){
        $('#test-content').load( 'includes/characters/jordan.html' );
    });
    $('#ewing-trigger').click(function(){
        $('#test-content').load( 'includes/characters/ewing.html' );
    });
    $('#bugs-trigger').click(function(){
        $('#test-content').load( 'includes/characters/bugs.html' );
    });
    

});