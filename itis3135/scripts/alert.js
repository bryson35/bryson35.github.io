

function alertSimple(){
    alert("My script is running!");
}

function todayDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if (dd < 10){
        dd = '0' + dd;
    }
    if (mm < 10){
        mm = '0' + mm;
    }
    today = mm + '-' + dd + '-' + yyyy;
    return today;
}

function currentTime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    return time;
}

function sum(){
    let a = prompt("Enter first number ");
    let b = prompt("Enter second number ");
    a = parseInt(a);
    b = parseInt(b);
    alert(`The sum is ${a+b}`);
}

function isEven(){
    let num = prompt("Enter a number ");
    if (num % 2 == 0){
    alert(`${num} is even`);
    }
    else{
        alert(`${num} is odd`)
    }
}

function orderNames(){
    let names = [];
    let name1 = prompt("Enter the name of 3 Wolves. Wolf 1: ");
    names[0] = name1;
    let name2 = prompt("Wolf 2 ");
    names[1] = name2;
    let name3 = prompt("Wolf 3");
    names[2] = name3;
    names.sort();
    alert(`Names in alphabetical order: ${names}`);
}

function product(){
    let a = prompt("Enter first number ");
    let b = prompt("Enter second number ");
    a = parseInt(a);
    b = parseInt(b);
    alert(`The product is ${a*b}`);
}

function displayMessage(){
    alert(`Thank you for visitng Black Wolf LLC!`);
}

var userName = prompt("What is your name? " );
var mood = prompt("How are you doing today? ");
var message = ("Today is " + todayDate() + ", and the time is: "+currentTime()+
". Black Wolf LLC welcomes you, " + userName + "! We're glad you are doing " + mood + "!");

document.getElementById("intro").innerHTML = message;


