const API_URL = 'http://127.0.0.1:5000/tasks';

async function renderTasks() {
    const res = await fetch(API_URL);
    const tasks = await res. json();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${task.title}</span>
        <button onclick="deleteTask(${task.id})">削除</button>
        `;
        taskList.appendChild(li);
    });
}

document.getElementById('add-task').addEventListener('click', async () => {
    const title = document.getElementById('new-task').value.trim();
    if (!title) return;
    await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title}),
    });
    document.getElementById('new-task').value = '';
    renderTasks();
});

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, {method: 'DELETE'});
    renderTasks();
}

renderTasks();