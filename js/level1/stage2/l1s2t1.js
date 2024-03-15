function l1S2T1() {
	let number = prompt("Enter a nuvber", "000");
	let string = number.toString();

	alert("First rigure of number - " + string[0]);
}

function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
}

executeButton(l1s2t1, l1S2T1);