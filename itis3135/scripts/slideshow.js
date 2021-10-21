
$(document).ready(function() {
    let currentImage = $("#slide-1");
    $('#img-1').on('click', function(){
        currentImage.hide();
        $("#slide-1").show();
        currentImage = $("#slide-1");
        
    });

    $('#img-2').on('click', function(){
        console.log("IMAGE ");
        currentImage.hide();
        $("#slide-2").show();
        currentImage = $("#slide-2");
        
    });

    $('#img-3').on('click', function(){
        currentImage.hide();
        $("#slide-3").show();
        currentImage = $("#slide-3");
    });

    $('#img-4').on('click', function(){
        currentImage.hide();
        $("#slide-4").show();
        currentImage = $("#slide-4");
    });

    $('#img-5').on('click', function(){
        currentImage.hide();
        $("#slide-5").show();
        currentImage = $("#slide-5");
    });

    $('#img-6').on('click', function(){
        currentImage.hide();
        $("#slide-6").show();
        currentImage = $("#slide-6");
    });
});

