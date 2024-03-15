function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
} 

function l1S1T5() {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0) {
         console.log(i);   
        }
        
    }
}

executeButton(l1s4t5, l1S1T5);