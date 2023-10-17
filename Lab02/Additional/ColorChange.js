$(document).ready(function() {
    $('#introduction h1').hover(function() {
        $(this).css('color', 'red');
    }, function() {
        $(this).css('color', '#CAEDFF');
    });
});