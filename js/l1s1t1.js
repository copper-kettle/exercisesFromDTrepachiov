function l1S1T1() {
	let number = prompt ("Введите число", 0);
	if (number < 0 && number !== 0) {
		alert("Число " + number + " отрицательное");
	} else if (number > 0) {
		alert("Число " + number + " положительное");
	} else {
		alert("Ноль");
	}
}
function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
}
executeButton(l1s1t1, l1S1T1);