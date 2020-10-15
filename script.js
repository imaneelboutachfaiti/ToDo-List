var addButton = document.getElementById("add-button");
var toDoTask = document.getElementById("task-field");
var toDoList = document.getElementById("todo-list");

function addToDoItem() {
    var itemText = toDoTask.value;
    newToDoItem(itemText, false);
}
function onClick() {

}
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");

    } else {
        this.classList.add("completed");
        alert("completed");
        this.classList.add("checked");
    }
}

function newToDoItem(itemText, completed) {
    if (document.getElementById("task-field").value == ""){
    var validationMsg = document.getElementById("validationMessage");
    validationMsg.textContent="You should add a task first !";
    }
    else {
        var toDoItem = document.createElement("li");
        var toDoText = document.createTextNode(itemText);
        var box = document.createElement("input");
        box.type = "checkbox";
        toDoItem.appendChild(box);
        toDoItem.appendChild(toDoText);
        if (completed) {
            toDoItem.classList.add("completed");
        }

        toDoList.appendChild(toDoItem);
        toDoItem.addEventListener("dblclick", toggleToDoItemState);
    }
}

addButton.addEventListener("click", addToDoItem);
