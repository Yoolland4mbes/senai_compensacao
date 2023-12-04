document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var imc = (peso / (altura/100) ** 2).toFixed(2);

    var resultado = "";

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc < 25) {
        resultado = "Peso ideal";
    } else if (imc < 30) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obesidade";
    }

    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc + "<br>Situação atual: " + resultado;
});