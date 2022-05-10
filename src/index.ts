import "./styles.css";

/* Implemente un método llamado cantidadDeDivisores
que reciba un número entero y devuelva la cantidad
de divisores
*/

let dato1 = document.getElementById("dato1");
let btnCalcular = document.getElementById("calcular");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese un número entero:";

let esMultiplo = (numero1: number, numero2: number): boolean => {
  return numero1 % numero2 === 0;
};
let cantidadDeDivisores = (numero: number): number => {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor <= numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
};
btnCalcular.addEventListener("click", () => {
  let numero: number = Number(dato1.value);

  let cantDivisores: number = cantidadDeDivisores(numero);

  console.log("El número " + numero + " tiene " + cantDivisores + " divisores");
});
