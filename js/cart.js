let container = document.querySelector(".form-container");
let form = document.querySelector("form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObject = Object.fromEntries(data.entries());
  console.log("our data:", dataObject);

  form.reset();

  let name = dataObject.yourname;
  let email = dataObject.user_email;
  let password = dataObject.password;

  let message = `Welcome, ${name}! You are logged in!”`;

  console.log("first message to user", message);

  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  container.appendChild(messageParagraph);
}
