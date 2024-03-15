function  l1S1T3() {
	let string = prompt("Enter string", "");
	let last_symbol = string.length - 1;
	if (string[last_symbol] == " ") {
		alert("Last symbol of sting - spase")
	} else {
		alert("Last symbol of sting - " + string[last_symbol]);
	}
}

function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
}

executeButton(l1s1t3, l1S1T3);