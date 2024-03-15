import btn from "../../for_button.js";

function l1S7T4() {
    let num = document.querySelector("#inp_l1s7t4");
    if (num.value == null || num.value == undefined || num.value == 0) {
        alert("You must enter a number");
    } else {
        let arr = String(num.value).split("");
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += Number(arr[i]);
        }

        alert("Result  " + sum);
        num.value = "";
    }

}
 
btn(l1s7t4, l1S7T4);