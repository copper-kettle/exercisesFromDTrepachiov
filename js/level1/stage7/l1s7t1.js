function l1S7T1() {
    let string = "abcde";
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        arr[i] = string[i]; 
    }
    alert("String " + string + "  array " + arr);
}
import btn from "../../for_button.js";
btn(l1s7t1, l1S7T1);