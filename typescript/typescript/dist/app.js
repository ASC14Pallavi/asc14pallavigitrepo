"use strict";
function createTaskElement(taskText) {
    var li = document.createElement("li");
    var taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
        var newText = prompt('Edit the task', taskText);
        if (newText !== null) {
            taskTextElement.textContent = newText;
        }
    });
    var deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(taskTextElement);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    return li;
}
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }
    var taskList = document.getElementById("taskList");
    var taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);
    taskInput.value = '';
}
document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.getElementById("addButton");
    if (addButton) {
        addButton.addEventListener("click", addTask);
    }
});
