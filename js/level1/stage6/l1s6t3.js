import arr from "../../random_array.js";
function l1S6T3() {
    let array = arr(-10, 10, 6);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    alert("Array " + array + "  result " + sum);
}
import btn from "../../for_button.js";
btn(l1s6t3, l1S6T3);