var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,3300,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
    $("update").onclick = updateCalorie;
    $("averageCal").onclick = showAverageCalories;
    $("show_max").onmouseover = showMax;
    

};

function updateCalorie(){
    let userCal = parseInt(document.getElementById("calories").value);
    let userDay = document.querySelector("input[name='day']:checked").value;
    if (isNaN(parseInt(userCal))){
        alert("Enter a valid number.");
        document.querySelector('input[name="day"]:checked').checked = false;
        document.getElementById("calories").value = '';
        
    }
    else{
        calories[userDay] = userCal;
        alert(`Your updated calorie details are:${calories}`);
        document.querySelector('input[name="day"]:checked').checked = false;
        document.getElementById("calories").value = '';
    }
}

function showAverageCalories(){
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < calories.length; i++){
        sum += calories[i];
    }
    avg = sum/7;
    avg = Math.round(avg);

    document.getElementById("average").style.color = "green"
    document.getElementById("average").style.backgroundColor = "transparent";
    document.getElementById("average").value = (`${avg}`);
}

function showMax() {
    document.getElementById("showMax").innerHTML = "";
    let showMax = document.createElement("p");
    let max = calories[0];
    let day = 0;

    for (let i = 0; i < calories.length; i++){
        if (max < calories[i]){
            max = calories[i];
            day = i;
        }
    }
    showMax.innerHTML = `Your maximum consumed calorie is ${max} on ${days[day]}`;
    document.getElementById("showMax").appendChild(showMax);

    

}
