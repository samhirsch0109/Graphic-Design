
$(document).ready(function () {
    $('.question').click(function () {
        $(this).next('.hiddenContent').slideToggle();
    });


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
})