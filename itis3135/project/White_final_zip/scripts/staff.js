//AJAX request to retrive staff info
$.ajax({
    type: "get",
    url: "json/staff.json",
    data: "data",
    dataType: "json",
    success: function (data) {
        let member = "<div class='row'>";
        for (let i = 0; i < data.staff.length; i++){
            member +=(
                `
                <div class="column">
                    <div class="card">
                    <img src="${data.staff[i].image}" alt="${data.staff[i].name}" style="width:100%">
                    <div class="container">
                        <h2>${data.staff[i].name}</h2>
                        <p class="title">${data.staff[i].title}</p>
                        <p>${data.staff[i].email}</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                `
                );

            }

            $(".staff-members").html(member);

        
        
    }
});