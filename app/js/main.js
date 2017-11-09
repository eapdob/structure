$(function() {
    $(".header .menu .menu__item a").click(function(event) {
        // prevent standart operation
        event.preventDefault();

        var href = $(this).attr("href");
        var headerHeight = $(".header").height();

        // animate to id
        $("html, body").animate({scrollTop: $(href).offset().top - headerHeight - 92}, 750);
    });

    // var header = $(".header");
    // $(window).scroll(function() {
    //     console.log($(this).scrollTop());
    //     if ($(this).scrollTop() > 0 && !header.hasClass("fixed")) {
    //        header.addClass("fixed");
    //     } else if ($(this).scrollTop() <= 112 && header.hasClass("fixed")) {
    //        header.removeClass("fixed");
    //     }
    // });
});