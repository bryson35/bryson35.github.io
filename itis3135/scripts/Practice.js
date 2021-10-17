let total = 0;

var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	$("espresso").onclick = function(){
		document.getElementById("order").innerHTML +=
		(
			`<br> $1.95 - Espresso - Delicious espresso. Wanna try it?`
		);
		total += 1.95;
		document.getElementById("total").innerHTML = (`<em>Total: $${parseFloat(total).toFixed(2)}</em>`);
	}

	$("cappuccino").onclick = function(){
		document.getElementById("order").innerHTML += 
		(
			`<br> $3.45 - Cappuccino - Delicious Cappuccino!`
		);
		total += 3.45;
		document.getElementById("total").innerHTML = (`<em>Total: $${parseFloat(total).toFixed(2)}</em>`);
	}

	//add onclick event handler for each image

	// for click event add item to order and update total

	// display order and total

	
		
}; // end onload


// add to order function

const espressoPrice = 1.95;
const cappPrice = 3.45;
function addItem(){


}