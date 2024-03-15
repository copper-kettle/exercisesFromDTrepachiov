function l1S4T1() {
    let num = 0;
    while (num >= 0 && num < 100) {
        num++;
        console.log(num);
    }
}

    function executeButton(some_id, some_func) {
	    some_id.addEventListener('click', some_func);
    }
    executeButton(l1s4t1, l1S4T1);