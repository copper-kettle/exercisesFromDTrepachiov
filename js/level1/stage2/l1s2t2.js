function l1S2T2() {
	let number = prompt("Enter number", "000");
	// let first_fig = Number(number.toString()[0]);
	let last_fig = Number(number.toString()[number.length - 1]);
	alert("Last number  " + last_fig);
}

function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
}

executeButton(l1s2t2, l1S2T2);