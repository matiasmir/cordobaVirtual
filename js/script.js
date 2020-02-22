// /** Tipos de datos */
// let nombre = "fran"; /** puede ser modificada */

// /** variables pueden ser */

// let string = "texto 132131241";

// let numbers = 1231231;

// let listas = ["nombre1", "nombre2"];

// /** objetos */

// let auto = {
//   marca: "Honda",
//   modelo: "Civic"
// };

// /*****************************/

// function saludameWacho(nombre, edad) {
//   return alert(`hola ${nombre} tenes ${edad} años`);
// }

$(document).ready(function() {
  function checkUrl() {
    const url = document.URL.split("/"); /** "http://localhost:5500/" */
    if (url[3] === "") {
      $("#primero").css("border-bottom", "4px solid red");
    }
  }

  checkUrl();
});
