import arr from "../../random_array.js";
function l1S6T2() {
    let array = arr(2, 25, 8);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += Math.sqrt(array[i]);
    }
    alert("Array " + array + "  result " + sum);
}
import btn from "../../for_button.js";
btn(l1s6t2, l1S6T2);