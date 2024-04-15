import btn from "../../for_button.js";
function l1S10T2() {
	let number = document.querySelector("#inp_l1s10t2");
	let num_val = number.value;
	console.log(number);
	
	alert("Source line - " + num_val + `\n` +  
		"Result line - " + num_val.split("").reverse().join(""));
	window.location.reload();

}
btn(l1s10t2, l1S10T2);