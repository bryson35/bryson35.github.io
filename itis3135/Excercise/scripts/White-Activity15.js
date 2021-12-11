$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "facultyList.json",
        data: "data",
        dataType: "json",
        success: function (response) {

            for (let i = 0; i < response.facultymembers.length; i++){
            let image = (`<img src=${response.facultymembers[i].image}>`);
            let name = (`<h2>${response.facultymembers[i].full_name}</h2>`);
            let dep = (`<h3>${response.facultymembers[i].department}</h3>`);
            let bio = (`<p>${response.facultymembers[i].bio}</p>`);

            $('#faculty').append(image).append(name).append(dep).append(bio);
            }
            
        }
    });
});
