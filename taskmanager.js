let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if (taskName !== '') {
        const newTask = {
            id: Date.now(),
            name: taskName
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <span>${task.name}</span>
            <button onclick="deleteTask(${task.id})">Usuń</button>
            <button class="edit" onclick="editTask(${task.id})">Edytuj</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function editTask(id) {
    const newName = prompt('Wprowadź nową nazwę zadania:');
    if (newName !== null) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { id: task.id, name: newName.trim() };
            }
            return task;
        });
        renderTasks();
    }
}

renderTasks();
