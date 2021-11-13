$(document).ready(function() {
        // preload each image
                let pics = [
                        "images/Activity10_images/h1.jpg",
                        "images/Activity10_images/h2.jpg",
                        "images/Activity10_images/h3.jpg",
                        "images/Activity10_images/h4.jpg",
                        "images/Activity10_images/h5.jpg",
                        "images/Activity10_images/h6.jpg"
                ];

                let count = pics.length;
                let $imgs = new Array();
                for (let i = 0; i < count-1; i++){
                        $imgs.push($('<img>').attr('src', pics[i]));
                }


        $('ul li a').click(function (e) { 
                e.preventDefault();
                $("#caption").fadeOut(3000);
                $("#image").fadeOut(3000, function(){
                        let $a = $(e.currentTarget);
                        let src = $a.attr('href');
                        let cap = $a.attr('title');
                        $("#image").attr('src', src);
                        $("#caption").html(cap);
                        $("#image").fadeIn(3000);
                        $("#caption").fadeIn(3000);
                        $("#caption").animate({fontSize: "2em"}, 3000);

                });
                

        }); 

        //focus on first link thumbnail when page loads
        $("ul li a:first").focus();


}); // end ready