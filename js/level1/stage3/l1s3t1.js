function l1s3T1() {
	let string = prompt("Enter string", "");
	if (string.length > 1) {
		alert("Prenultimate simbol of string - " + string[string.length - 2 ]);
	} else { 
		alert("Enter more that one symbol");
		l1s3T1();
	}
}


function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
}

executeButton(l1s3t1, l1s3T1);