


//Main function that is called  when button is pressed
function polygonConverter(){
    let num = prompt("Black Wolf would like you to enter a number between 0 and 10");
    validateEntry(num);
    
}

// Validates whether a number is either NAN or if it is not within range
function validateEntry(entry){
    if (isNaN(entry)){
        entry = prompt("ERROR: Please enter a number");
        validateEntry(entry);
    }
    else if (entry == 0 || entry > 10){
        entry= prompt("ERROR: Number must be between 0 and 10 ");
        validateEntry(entry);
    }
    else{
     alert(`The shape that has ${entry} sides is a ${getShape(entry)}`);
    }

}

//gets shape name based on number entered
function getShape(num){
    num = Math.round(Math.abs(num));

    if (num == 1){
        return "henagon";
    }
    if (num == 2){
        return "digon";
    }
    if (num == 3){
        return "trigon";
    }
    if (num == 4){
        return "tetragon";
    }
    if (num == 5){
        return "pentagon";
    }
    if (num == 6){
        return "hexagon";
    }
    if (num == 7){
        return "heptagon";
    }
    if (num == 8){
        return "octagon";
    }
    if (num == 9){
        return "enneagon";
    }
    if (num == 10){
        return "decagon";
    }
    return 0;
}

