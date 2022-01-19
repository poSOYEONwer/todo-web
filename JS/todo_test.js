/*
input text로 사용자 입력(todo) 받음
사용자가 enter 누르면 submit됨 - submit에 이벤트 리스너 달기
submit되면 todo를 화면에 뿌려주고 local storage에 저장

todo delete
*/
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "toDoArr";
toDoArr = [];


function handleTodo (e) {
    e.preventDefault();
    const todo = input.value;
    toDoArr.push(todo);
    let li = document.createElement("li");
    li.innerText = todo;
    todoList.appendChild(li);
    input.value = "";
    
}

function saveTodo(todo) {
   
}
form.addEventListener("submit",handleTodo);