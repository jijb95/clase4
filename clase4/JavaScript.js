
function rectangulo(num1, num2) {
    document.getElementById("resr").innerHTML = parseInt(num1) * parseInt(num2) + "cm²"
}
function triangulo(num1, num2) {
    var n = 2;
    document.getElementById("rest").innerHTML = (parseInt(num1) * parseInt(num2))/n + "cm²";
}
function rombo(num1, num2) {
    var n = 2;
    document.getElementById("resb").innerHTML = (parseInt(num1) * parseInt(num2)) / n + "cm²";
}
function paralelo(num1, num2) {
    document.getElementById("resr").innerHTML = parseInt(num1) * parseInt(num2);
}
function circulo(num1) {
    var n = 2;
    document.getElementById("resc").innerHTML = Math.PI * Math.pow(num1, n) + "cm²";
}