/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let form = document.getElementById("form");

document.getElementById("submit-btn").addEventListener("click", function(e) {
  e.preventDefault();
  
  let weightInKg = document.getElementById("search").value;
  let weightInLbs = weightInKg * 2.2046;
  let weightInGrams = weightInKg / 0.0010000;
  let weightInOz = weightInKg * 35.274;

  document.getElementById("output").innerHTML = 
  `
  <p><b>${weightInKg} kg converted: </b></p>
  <p>${weightInLbs} lbs</p>
  <hr>
  <p>${weightInGrams} g</p>
  <hr>
  <p>${weightInOz} oz</p>
  `;

  form.reset();
});