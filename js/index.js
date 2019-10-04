//              overlay part
$(document).ready(function () {
    $(".overicon").hover(function () {
        $(this).children("div.overlay").fadeIn(400).css("dispaly", "block");
        $(this).mouseleave(function () {
            $(this).children("div.overlay").fadeOut(400);
        });
    });
});
//          end of the overlay
