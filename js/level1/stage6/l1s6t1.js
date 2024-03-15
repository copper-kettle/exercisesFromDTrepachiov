import arr from "../../random_array.js";
function l1S6T1() {
    let array = arr(3, 20, 6);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]**2;
        
    }
    alert("Is array " + array);
    alert("Sum " + sum);
}
import btn from "../../for_button.js"
btn(l1s6t1, l1S6T1);