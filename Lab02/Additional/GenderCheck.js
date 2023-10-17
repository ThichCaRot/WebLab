$(document).ready(function() {
    $('input[name="fav_language"]').change(function() {
        if ($(this).is(':checked')) {
            alert("Bạn đã chọn giới tính: " + $(this).val());
        }
    });
});