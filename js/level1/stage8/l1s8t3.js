import  btn  from "../../for_button.js";

function l1S8T3() {
    let array = [1.456, 2.125, 3.32, 4.1, 5.34];
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toFixed(1) + "  ";
    }
    console.log(array);
    alert("Result" + array);
}

btn(l1s8t3, l1S8T3);