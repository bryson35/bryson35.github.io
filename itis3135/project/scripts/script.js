$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 799,
        slideMargin: 20,
        randomStart: true,
        slideMargin: 3000,
        pager: true,
        pagerType: 'short',
        pagerSelector: "#id_pager"
    });

    //accordion
    $(".textbox_1").accordion({
        collapsible:true,
        active:false,
        

    });

    $(".textbox_2").accordion({
        collapsible:true,
        active:false

    });

    
});