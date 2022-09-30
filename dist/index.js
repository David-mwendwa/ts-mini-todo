"use strict";
var todos = [];
var btn = document.getElementById('btn');
var input = document.getElementById('todoinput');
var form = document.querySelector('form');
var list = document.getElementById('todolist');
function handleSumbit(e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    input.value = '';
}
function createTodo(todo) {
    var newLi = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}
form.addEventListener('submit', handleSumbit);
// btn.addEventListener('click', function () {
//   alert(input.value);
//   input.value = '';
// });
