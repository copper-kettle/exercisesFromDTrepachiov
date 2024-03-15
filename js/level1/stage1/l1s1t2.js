function l1S1T2() {
	let string = prompt("Enter string", "");
	alert("String lenght " + string.length + " simbols");
}

function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
}
executeButton(l1s1t2, l1S1T2);