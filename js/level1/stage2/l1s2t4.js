function l1S2T4() {
	let number = prompt("Enter a number", "000");
	alert("Diits quantity of number " + String(number).length);
}

function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
}

executeButton(l1s2t4, l1S2T4);