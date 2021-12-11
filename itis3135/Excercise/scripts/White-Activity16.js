$(document).ready(function(){
    let url = "https://api.flickr.com/services/feeds/photos_public.gne?" + 
    "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

    $.ajax({
        type: "get",
        url: url,
        data: "data",
        dataType: "json",
        success: function (data) {
            let images = "";
            $.each(data.items, function (index, item) { 
                 images += "<a href=" +  item.media.m + " data-lightbox=" + "building " + "data-title=" + item.title + ">" + "<img src=" + item.media.m + ">" +"</a>";
            });
            $("#new_building").html(images);
            
        }
    });
   
        
   

});