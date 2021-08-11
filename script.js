'use strict'

const headerInput = document.querySelector('.header-input');
const btnAdd = document.getElementById('add');
const ulTodo = document.getElementById('todo');
const btnComplete = document.querySelectorAll('.todo-complete');
const btnRemove = document.querySelectorAll('.todo-remove');
const ulCompleted = document.getElementById('completed');

let todos = [];
let completed = [];

const addData = () => {
    // let newTodo = {
    //     todoInput: headerInput.value,
    // };

    //todos.push(newTodo);
    plan();

}

function plan() {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const btnRemove = document.createElement('button');
    const btnComplete = document.createElement('button');

    li.classList.add('todo-item');
    div.classList.add('todo-buttons');
    btnRemove.classList.add('todo-remove');
    btnComplete.classList.add('todo-complete');
    span.textContent = headerInput.value;

    li.appendChild(div);
    li.appendChild(span);
    div.appendChild(btnRemove);
    div.appendChild(btnComplete);

    ulTodo.appendChild(li);

    todos.push(li.textContent);

    btnComplete.addEventListener('click', (event) => {
        done(event.target);
        li.style.display = 'none';
        
    });
};

const done = (target) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const btnRemove = document.createElement('button');
    const btnComplete = document.createElement('button');

    li.classList.add('todo-item');
    div.classList.add('todo-buttons');
    btnRemove.classList.add('todo-remove');
    btnComplete.classList.add('todo-complete');
    span.textContent = headerInput.value;

    li.appendChild(div);
    li.appendChild(span);
    div.appendChild(btnRemove);
    div.appendChild(btnComplete);

    ulCompleted.appendChild(li);

    btnComplete.addEventListener('click', (event) => {
        plan(event.target);
        li.style.display = 'none';
        
    });
    console.log(target);
}

btnAdd.addEventListener('click', addData);


document.addEventListener('click', event => {
    console.log('click', event.target);
})