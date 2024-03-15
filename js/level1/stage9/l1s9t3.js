import arr from "../../random_array.js";
import btn from "../../for_button.js";
import remove_dpl from "../../remove_duplicate.js";
 function l1S9T3() {
    let array = arr(20, 50, 5);
    remove_dpl(array);
    alert("Sourse array" + `\n` + "[" + array.join("  ") + ']');
    for (let i = 0; i < array.length; i++) {
        array[i] += array[i] * 0.1;      
    }

     alert("Result" + `\n` + "[" + array.join("  ") + ']');
 }
 btn(l1s9t3, l1S9T3);