let person = ["Bryson White", "Lebron James", "Adam Irvin", "Symere Woods", "Cam Newton", "Braden White", "Kanye West"];
let salaries = [];
let personWithSalary = [];
document.getElementById("employees").focus();




var $ = function (id) {
return document.getElementById(id);
};

window.onload = function () {
$("displayResults").onclick = displayResults;
$("addSalary").onclick = addSalary;
$("displaySalary").onclick = displaySalary;
};

function addSalary(){
    document.getElementById("employees").focus();
    
    const employees = document.getElementById("employees");
    let name = employees.options[employees.selectedIndex].value;
    let salary = "";
    if (name == ""){
        alert("Please select a name.");
    }
    else{

    while ((salary == "" || isNaN(salary)) && name != ""){
        salary = prompt("Enter a salary: ");
        if (salary == ""){
            salary = prompt("Please enter a valid salary.");
        }
        if (isNaN(salary)){
            salary = prompt("Please enter a valid number.")
        }
    }
    

    personWithSalary.push(person[name]);
    salaries.push(parseFloat(salary));

    document.getElementById("employees").focus();
    

}
    

}


function displayResults(){
    let filledArray = [];

    let averageValue;
    let highestValue;
    const results = document.getElementById("results");
    results.innerHTML = "";
    const heading = document.createElement("h2");
    const average = document.createElement("p");
    const highest = document.createElement("p");
    results.appendChild(heading);
    results.appendChild(average);
    results.appendChild(highest);
    if (salaries.length == 0){
        alert("No salaries have been added yet.")

    }
    else{
    heading.innerHTML = "Average and Highest Salary";
    

    let sum = 0;
    for (let i = 0; i < salaries.length; i++){
        sum += salaries[i];
    }
    averageValue = sum/salaries.length;
    average.innerHTML = `The average of all salaries is $${averageValue}`;

    highestValue = salaries[0];
    for (let j = 0; j < salaries.length-1; j++){
        if (salaries[j+1] > highestValue){
            highestValue = salaries[j+1]
        }

    }
    highest.innerHTML = `The highest salary is $${highestValue}`;


}






}


function displaySalary(){
    const table = document.getElementById("results_table");
    if (salaries.length == 0){
        alert("To display a table, you must enter at least one salary for an employee.")

    }

    else {
    table.innerHTML="";
    table.innerHTML = 
    (
        `<thead>
          <tr>
            <th>Name</th>
            <th>Salary</th> 
          </tr>
        </thead>`
    );
    
    for (let i = 0; i < personWithSalary.length; i++){
        const row = document.createElement("tr");
        const name = document.createElement("td");
        const salary = document.createElement("td");
        
        table.appendChild(row);
        row.appendChild(name).innerHTML = `${personWithSalary[i]}`;
        row.appendChild(salary).innerHTML = `$${salaries[i]}`;

    }
}


    
}