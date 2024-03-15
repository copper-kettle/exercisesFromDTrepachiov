function l1S7T2() {
    let num = prompt("Enter number", "");
    let arr = [];
    for (let i = 0; i < String(num).length; i++) {
        arr[i] = String(num[i]);
        arr[i] = Number(arr[i]);
        console.log(typeof arr[i]);
    }
    alert(num + "  " + typeof num +` \n `+ arr + " " + typeof arr);
}
import btn from "../../for_button.js";
btn(l1s7t2, l1S7T2);