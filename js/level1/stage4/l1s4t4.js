function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
} 

function l1S1T4() {
    for (let i = 2; i <= 100; i++) {
        if (i % 2 == 0) {
         console.log(i);   
        }
        
    }
}

executeButton(l1s4t4, l1S1T4);