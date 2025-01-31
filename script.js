
$(document).ready(function () {
    $('.teacher-name').on('click', function () {
        $(this).next('.teacher-details').slideToggle(); // Toggle the next details
    });
})


$(document).ready(function () {
    $('.toggle-button').on('click', function () {
        $('.information').toggle();
    });
});

$('.project-image').on('mouseenter', function (event) {
    $(event.currentTarget).next('.project-description').fadeIn(800);
});

$('.project-image').on('mouseleave', function (event) {
    $(event.currentTarget).next('.project-description').fadeOut(500);
});