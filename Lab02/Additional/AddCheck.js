$(document).ready(function() {
    $('input[type="checkbox"]').change(function() {
        if ($(this).is(':checked')) {
            $(this).closest('tr').css('color', 'green');
        } else {
            $(this).closest('tr').css('color', 'inherit');
        }
    });
});