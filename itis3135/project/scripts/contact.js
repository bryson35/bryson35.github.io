$(document).ready(function () {
    $("#contact_form").submit(function (e) { 
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "https://webpages.uncc.edu/bwhite90/itis3135/project/contact.php",
            data: $("#contact_form").serialize(),
            success: function () {
                alert("Your message was sent");
            },
            error: function (){
                alert("There was an error submitting your message");
            }
        });
        
    });
});