// To-Do List App Logic

document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('date-input');
    const todoList = document.getElementById('todo-list');
    const filterBtn = document.getElementById('filter-btn');
    const deleteAllBtn = document.getElementById('delete-all-btn');

    let todos = [];

    function renderTodos(list = todos) {
        todoList.innerHTML = '';
        if (list.length === 0) {
            todoList.innerHTML = '<tr><td colspan="4" class="no-task">No task found</td></tr>';
            return;
        }
        list.forEach((todo, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${todo.text}</td>
                <td>${todo.date}</td>
                <td class="${todo.done ? 'status-done' : 'status-pending'}">${todo.done ? 'Done' : 'Pending'}</td>
                <td>
                    <button class="action-btn" onclick="markDone(${idx})">Done</button>
                    <button class="action-btn" onclick="deleteTodo(${idx})">Delete</button>
                </td>
            `;
            todoList.appendChild(tr);
        });
    }

    window.markDone = function(idx) {
        todos[idx].done = true;
        renderTodos();
    };

    window.deleteTodo = function(idx) {
        todos.splice(idx, 1);
        renderTodos();
    };

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const text = todoInput.value.trim();
        const date = dateInput.value;
        if (!text || !date) {
            alert('Please enter a task and a due date.');
            return;
        }
        todos.push({ text, date, done: false });
        todoInput.value = '';
        dateInput.value = '';
        renderTodos();
    });

    filterBtn.addEventListener('click', function() {
        const today = new Date().toISOString().split('T')[0];
        const filtered = todos.filter(todo => todo.date === today);
        renderTodos(filtered);
    });

    deleteAllBtn.addEventListener('click', function() {
        console.log('Delete All clicked');
        if (confirm('Delete all tasks?')) {
            todos.length = 0;
            renderTodos();
        }
    });

    renderTodos();
}); 