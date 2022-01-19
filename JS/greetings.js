const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);

}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
    // show th
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}