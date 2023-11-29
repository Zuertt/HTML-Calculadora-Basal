const FLUJO = document.getElementById("flu");
const MAN = document.getElementById("man");
const TEXTOCC3 = document.getElementById("textocc3");
const ERROR = document.getElementById("error");
const BOTON = document.getElementById("calcular");
const NOMBRES= document.getElementById('nombres') //poner despes//
const INPUT = document.getElementById("peso");
// esta parte es para poner un escuchador de varios tipos de casos.
BOTON.addEventListener("click", () => {
if (INPUT.value == "") {
    ERROR.style.display = "block";
    FLUJO.style.display = "none";
    MAN.style.display = "none";
    TEXTOCC3.style.display = "none";
} 
else if (INPUT.value <= 30) {
    let holly = algoritmoHolliday(INPUT.value);
    FLUJO.innerHTML = holly[0] + " cc";
    FLUJO.style.display = "block";
    MAN.innerHTML = holly[1] + "cc/hr";
    MAN.style.display = "block";
    TEXTOCC3.innerHTML = holly[2] + " m+m/2";
    TEXTOCC3.style.display = "block";
    ERROR.style.display = "none";
    NOMBRES.innerHTML= "Metodo Holliday-Sega"
} 
else {
    let sc = superficie(INPUT.value);
    FLUJO.innerHTML = sc[0] + "cc por 1500";
    FLUJO.style.display = "block";
    MAN.innerHTML = sc[1]+ "cc por 2000";
    MAN.style.display = "block";
    ERROR.style.display = "none";
    TEXTOCC3.style.display= "none"
    NOMBRES.innerHTML= "Metodo de superficie corporal"
}
});

// en donde dice entrada va la variable que va a ejecutar la funcion (el argumento)

function algoritmoHolliday(peso) {
  let resultado;
  if (peso <= 10) {
    resultado = peso * 100;
  } else if (peso > 10 && peso <= 20) {
    resultado = 1000 + (peso - 10) * 50;
  } else {
    resultado = 1500 + (peso - 20) * 20;
  }
  return [resultado, (resultado / 24).toFixed(2),((resultado / 24) * 1.5).toFixed(2),];
}
function superficie(peso) {
  let superficieCorporal = (peso * 4 + 7) / (peso + 90);
  return [
    (superficieCorporal * 1500).toFixed(2),
    (superficieCorporal * 2000).toFixed(2),
  ];
}


