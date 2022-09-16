const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input1 = document.querySelector("#inputId1");
const input2 = document.querySelector("#inputId2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#form");

// aprendiendo addEventListener
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  // console.log({event});
  event.preventDefault();
  const sumaInputs = Number(input1.value) + Number(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
}

/*
console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});
// manipulacion de texto
h1.innerText = "Cambios por javascripts";
// cambiando clases
h1.setAttribute("class", "rojo");
// agregando clases
h1.classList.add("azul");

// creando elementos e insertandolo al html

const img = document.createElement("img");
const br = document.createElement("br");
// agregando atributo al elemento img
img.setAttribute(
  "src",
  "https://static.platzi.com/static/images/conf/logo_black@2x.png"
);

pid.appendChild(br);
pid.append(img);
*/
