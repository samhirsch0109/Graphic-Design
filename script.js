
$(document).ready(function () {
    $('.hiddenContent').hide();

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


//code from tutorial 

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("#scrollTopBtn").fadeIn();
    } else {
        $("#scrollTopBtn").fadeOut();
    }
});

$("#scrollTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

let text = "Welcome to the Gallery!";
let index = 0;

function typeText() {
    if (index < text.length) {
        $("#typing-effect").append(text.charAt(index));
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();


  
  
  