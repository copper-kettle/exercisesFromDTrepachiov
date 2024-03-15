function l1S1T6() {
	let word = prompt("Enter the word", "");
	let prefix = "Last letter of word " + word + " - ";
	if (word[word.length - 1].toLowerCase() == "ь") {
		alert(prefix + word[word.length - 2]);
	} else {
		alert(prefix + word[word.length - 1]);
	}
}

function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
	// почему, сука, some_id работает!!!!???? если он не определён?
}
executeButton(l1s1t6, l1S1T6);