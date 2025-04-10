let tasks = [];
function renderTasks() {
    const tasklist =document.getElementById('task-list');
    tasklist.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${task}</span>
        <button onclick="deleteTask(${index})">削除</button>
       `;
       tasklist.appendChild(li);
    });
}

document.getElementById('add-task').addEventListener('click', () => {
    const title = document.getElementById('new-task').value.trim();
    if (!title) return;
    tasks.push(title);
    document.getElementById('new-task').value ='';
    renderTasks();
});

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
