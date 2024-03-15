function l1S1T5() {
	let first_word = prompt("Enter first word", "");
	let second_word = prompt("Enter second word", "");
	if (first_word[0] == second_word[0]) {
		alert("Первые буквы совпадают");
	} else {
		alert("Первые буквы не совпадают");
	}
}

function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
}
executeButton(l1s1t5, l1S1T5);