const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function deleteTask(taskItem) {
    taskItem.remove();
}

function addTaskWithDelete(taskValue) {
    const newTask = document.createElement('li');
    newTask.innerText = taskValue;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteTask(newTask);
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
}

addTaskButton.addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value;

    if (taskValue) {
        addTaskWithDelete(taskValue);
        taskInput.value = '';  // Clear input after adding
    } else {
        alert("Please enter a task");
    }
});

// Edit task on double-click
taskList.addEventListener('dblclick', function(e) {
    if (e.target.tagName === 'LI') {
        const newTaskValue = prompt("Edit your task", e.target.innerText);
        if (newTaskValue) {
            e.target.childNodes[0].nodeValue = newTaskValue;  // Update text
        }
    }
});
