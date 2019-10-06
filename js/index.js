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


// $(document).ready(function () {
//
// });

//***********/about us   *************