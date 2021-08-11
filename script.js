'use strict'

const headerInput = document.querySelector('.header-input');
const addBtn = document.getElementById('add');
const todoUl = document.getElementById('todo');
const completeBtn = document.querySelectorAll('.todo-complete');
const removeBtn = document.querySelectorAll('.todo-remove');
const completedUl = document.getElementById('completed');

const todos = [];
const completed = [];

const complete = (target) => {
    const li = target.parentNode.parentNode;
    const text = target.textContent;
    const liParent = li.parentNode;
    const id = liParent.id;
    
    if (id === 'todo') {
        todos.splice(todos.indexOf(text), 1);
        completed.push(text);
        completedUl.appendChild(li);
        save();
    } else if (id === 'completed') {
        completed.splice(completed.indexOf(text), 1);
        todos.push(text);
        todoUl.appendChild(li);
        save();
    }
}

const remove = (target) => {
    const li = target.parentNode.parentNode;
    const text = target.textContent;
    const liParent = li.parentNode;
    const id = liParent.id;
    
    if (id === 'todo') {
        todos.splice(todos.indexOf(text), 1);
        save();
    } else if (id === 'completed') {
        completed.splice(completed.indexOf(text), 1);
        save();
    }

    liParent.removeChild(li);
}

const addwidget = () => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const removeBtn = document.createElement('button');
    const completeBtn = document.createElement('button');

    li.classList.add('todo-item');
    div.classList.add('todo-buttons');
    removeBtn.classList.add('todo-remove');
    completeBtn.classList.add('todo-complete');
    span.textContent = headerInput.value;

    li.appendChild(div);
    li.appendChild(span);
    div.appendChild(removeBtn);
    div.appendChild(completeBtn);

    todoUl.appendChild(li);
    todos.push(li.textContent);

    completeBtn.addEventListener('click', (event) => {
        complete(event.target);
    });
    removeBtn.addEventListener('click', (event) => {
        remove(event.target);
    });
};

addBtn.addEventListener('click', addwidget);

let todoSave = localStorage.getItem('todo');
let completedSave = localStorage.getItem('completed');

const save = () => {
    todoSave = todos;
    completedSave = completed;
    localStorage.setItem('todo', todoSave);
    localStorage.setItem('completed', completedSave);
}

addBtn.addEventListener('click', () => {
    localStorage.setItem('todo', '') === todoSave;
    localStorage.setItem('completed', '') === completedSave;
    save();
});
