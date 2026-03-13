const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings (username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    document.getElementById("todo-form").classList.remove(HIDDEN_CLASSNAME);
    document.getElementById("todo-list").classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}   else {
    // show the greetings
    paintGreetings(savedUsername);
}

function hidePlaceholder() {
    loginInput.placeholder = "";
}

function showPlaceholder() {
    loginInput.placeholder = "What is your name?";
}

loginInput.addEventListener("focus", hidePlaceholder);
loginInput.addEventListener("blur", showPlaceholder);