function l1S7T3() {
    let num = prompt("Enter number", "");
    let num_arr = num.split("");
    for (let i = 0; i < num.length; i++) {
        if (isNaN(Number(num[i]))) {
            alert("you must enter a number");
            return;
        } 
        
    }
    alert(Number(num_arr.reverse().join("")));
    
}
import btn from "../../for_button.js";
btn(l1s7t3, l1S7T3);