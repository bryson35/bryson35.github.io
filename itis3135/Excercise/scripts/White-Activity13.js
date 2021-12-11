$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json",
        dataType: "json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        
        success: function(data) {
            $("#team").html("");
            let len = data.teammembers.length;
            for (let i = 0; i < len; i++){
                let name = $(`<h2>${data.teammembers[i].name}</h2>`);
                let title = $(`<p>${data.teammembers[i].title}</p>`);
                let bio = $(`<p>${data.teammembers[i].bio}</p>`);

                $("#team").append(name).append(title).append(bio);
            }

            
        },
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        }

    });
});