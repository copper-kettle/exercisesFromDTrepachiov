import btn from "../../for_button.js";
import arr_letter from "../../random_letter.js";
 function l1S9T2() {
    let sourse = "Lorem ipsum dolor sit amet consectetur adipisicing elit.\ Omnis excepturi sapiente itaque necessitatibus";

    let array = arr_letter(sourse, 10, "pst");
    
     alert("Sourse array" + `\n` + '[' + array.join("  ") + ']');
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(".html")) {
            result.push(array[i]);
        }
    
    }

     alert("Result" + `\n` + "[" + result.join("  ") + "]");
}

 btn(l1s9t2, l1S9T2);