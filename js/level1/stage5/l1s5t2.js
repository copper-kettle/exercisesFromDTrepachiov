function l1S5T2() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    alert(sum);
}
import btn from "../../for_button.js";
btn(l1s5t2, l1S5T2);