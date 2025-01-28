
$(document).ready(function () {
    $('.teacher-name').on('click', function () {
        $(this).next('.teacher-details').slideToggle(); // Toggle the next details
    });
})