import btn from "../../for_button.js";
import arr_letter from "../../random_letter.js";
function l1S9T1() {
    let sourse = "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
    Omnis excepturi sapiente itaque necessitatibus";
    
    let array = arr_letter(sourse, 8, "prf");
    alert("Sourse array" + `\n` + '[' + array.join("  ") + ']')
    let result =[];
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("http//")) {
            result.push(array[i]);
        }
    }
    alert("Result" + `\n` + "[" + result.join("  ") + "]");
}
btn(l1s9t1, l1S9T1);