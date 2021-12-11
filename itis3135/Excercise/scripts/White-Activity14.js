$(document).ready(function() {
    $("a").click(function (e) { 
        e.preventDefault();

        let url = (`json_files/${$(this).attr('title')}.json`);
        

        $.ajax({
            type: "get",
            url: url,
            data: "data",
            dataType: "json",
            success: function (data) {
                $("main").html("");
                let title = (`<h1>${data.speakers[0].title}</h1>`);
                let month = (`<h2>${data.speakers[0].month}</h2>`);
                let name = (`<h3>${data.speakers[0].speaker}</h3>`);
                let image = (`<img src=${data.speakers[0].image} alt=${data.speakers[0].speaker}_picture>`);
                let text = (`<p>${data.speakers[0].text}<p>`);

                $("main").append(title).append(month).append(name).append(image).append(text);
                
                
            },
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            }
        });
        
    });
	
}); // end ready