$(document).ready(function() {
    $('input[type="checkbox"]').change(function() {
        if ($(this).is(':checked')) {
            // Thực hiện hành động khi mục tiêu hoàn thành, ví dụ: thay đổi màu chữ
            $(this).closest('tr').css('color', 'green');
        } else {
            // Thực hiện hành động khi mục tiêu chưa hoàn thành, ví dụ: đặt màu mặc định
            $(this).closest('tr').css('color', 'inherit');
        }
    });
});