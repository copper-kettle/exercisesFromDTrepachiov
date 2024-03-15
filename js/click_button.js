function clickButton(some_func) {
    let task = document.querySelector(".task");
    task.onclick = (e) => {
        some_func; 
    }
}