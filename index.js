
function minus() {
    var task = document.getElementById("task");
    task.innerHTML += "-"; 
}
function add() {
    var task = document.getElementById("task");
    task.innerHTML += "+"; 
}
function divide() {
    var task = document.getElementById("task");
    task.innerHTML += "/"; 
}
function mul() {
    var task = document.getElementById("task");
    task.innerHTML += "*"; 

}
function equal() {
    var task = document.getElementById("task");
    var sum = task.innerHTML;
    console.log(sum);
    task.innerHTML =""; 
}
function update(parms) {
    console.log(parms);
    var task = document.getElementById("task");
    task.innerHTML += parms; 
}
function clear() {
    var task = document.getElementById("task");
    task.innerHTML =""; 
}