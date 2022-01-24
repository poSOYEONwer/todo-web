/*
input text로 사용자 입력(todo) 받음
사용자가 enter 누르면 submit됨 - submit에 이벤트 리스너 달기
submit되면 todo를 화면에 뿌려주고 local storage에 저장

todo delete
*/


const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
const FINISH_TODO = "finish-todo";
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function finishToDo(e) {
  // e.preventDefault(); // 이 친구 default가 왜 submit이지..?
  const finishSpan = e.target.previousSibling;
  finishSpan.classList.toggle(FINISH_TODO);
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const finishBtn = document.createElement("button");
  finishBtn.type = "button";
  finishBtn.innerText = "✓"
  finishBtn.addEventListener("click", finishToDo);
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(finishBtn);
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);
}
function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

/* 

*/