function l1S1T4() {
	let number = prompt("введите целое число", 0);
	console.log(typeof +number);
	if (+number == 0) {
		alert("Ноль");
	} else if (+number % 2 == 0) {
		alert("Число " + (number) + " чётное");
	} else {
		alert("Число " +  (number) + " нечётное");
	}
}

function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
}

executeButton(l1s1t4, l1S1T4);