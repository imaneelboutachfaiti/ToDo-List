let addButton = document.getElementById("add-button");
let toDoTask = document.getElementById("task-field");
let toDoList = document.getElementById("todo-list");
let validationMsg = document.getElementById("validationMessage");

function addToDoItem() {
  let itemText = toDoTask.value;
  newToDoItem(itemText);
}

const CHECKBOX_CLASSNAME = "completed";

function checkboxOnChange(event) {
  event.target.classList.toggle(CHECKBOX_CLASSNAME, event.target.checked);
}

const ERROR_MESSAGE = "Task description is required.";
function newToDoItem(itemText) {
  // undefined, null, '', false, 0
  if (!toDoTask.value) {
    validationMsg.textContent = ERROR_MESSAGE;
  } else {
    let toDoItem = document.createElement("li");
    let toDoText = document.createTextNode(itemText);
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.onchange = checkboxOnChange;
    toDoItem.appendChild(checkbox);
    toDoItem.appendChild(toDoText);
    toDoList.appendChild(toDoItem);
  }
}

addButton.addEventListener("click", addToDoItem);
