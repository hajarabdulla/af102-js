const form = document.querySelector("form");
const list = document.querySelector(".list");
const alert = document.querySelector(".alert");

if (localStorage.getItem("users") === null) {
  localStorage.setItem("users", JSON.stringify([]));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createBasket();
  list.innerHTML = "";
  getUsers();
  checkBasket();
});

function createBasket() {
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const users = JSON.parse(localStorage.getItem("users"));
  //   const users = [];

  users.push({
    name: username,
    userEmail: email,
    userPassword: password,
  });

  localStorage.setItem("users", JSON.stringify(users));

  console.log(users);
}

function getUsers() {
  const users = JSON.parse(localStorage.getItem("users"));

  users.map((user) => {
    list.innerHTML += `
            <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${user.name}</li>
            <li class="list-group-item">${user.userEmail}</li>
            
            </ul>
        </div>
            `;
  });
}

getUsers();

function checkBasket() {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users.length == 0) {
    alert.classList.remove("d-none");
  } else {
    alert.classList.add("d-none");
  }
}

checkBasket();
