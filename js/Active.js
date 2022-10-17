//SELECTEURS
const newTodo = document.querySelector("new-todo")
const todoButton = document.querySelector("todo-button")
const todoList = document.querySelector("todo-list")

//ECOUTEURS
todoButton.addEventListener("click", addTodo);

//FUNCTIONS

function addTodo(event){
    console.log("hello")
}