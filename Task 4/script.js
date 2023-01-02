/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
  .then(response => response.json())
  .then(cars => {
    let html = "";
    cars.forEach(car => {
      html += `
        <div class="car">
          <h2>${car.brand}</h2>
          <ul>
      `;
      car.models.forEach(model => {
        html += `<li>${model}</li>`;
      });
      html += `</ul></div>`;
    });
    // Display the HTML in the output element
    document.getElementById("output").innerHTML = html;
  });