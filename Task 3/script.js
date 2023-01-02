/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let button = document.getElementById("btn");
let output = document.getElementById("output");

button.addEventListener("click", function() {
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(users => {
      let html = "";
      users.forEach(user => {
        html += `
          <div class="user">
            <img src="${user.avatar_url}" alt="${user.login}" class="avatar" />
            <p>${user.login}</p>
          </div>
        `;
      });
      output.innerHTML = html;
    });
});

let message = document.getElementById("message");
message.style.display = "none";