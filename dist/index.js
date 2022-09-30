"use strict";
var btn = document.getElementById('btn');
var input = document.getElementById('todoinput');
var form = document.querySelector('form');
var list = document.getElementById('todolist');
var todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    var todosJSON = localStorage.getItem('todos');
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function handleSumbit(e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
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
