const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}
loginButton.addEventListener("click", onLoginBtnClick);

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(savedUsername);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
