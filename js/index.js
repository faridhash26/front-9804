//              overlay part
$(document).ready(function () {
    $(".overicon").hover(function () {
        $(this).children("div.overlay").fadeIn(400).css("dispaly", "block");
        $(this).mouseleave(function () {
            $(this).children("div.overlay").fadeOut(400);
        });
    });
    $(".imagelink").hover(function () {
        console.log();
        $(this).find(".overlayicons").slideDown(600);
        $(this).mouseleave(function () {
            $(this).find(".overlayicons").slideUp(600);
        });
    });
});
//*********** end of the overlay*************
//***********about us   *************


$(function() {
    $('a[href]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 3000);
                return false;
            }
        }
    });
});

//***********/about us   *************