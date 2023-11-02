window.onload = function () {
    alert("bem-vindo à página interativa!");
}


function dizerBomDia() {
    var nome = document.getElementById("nome").value;
    alert("bom dia, " + nome + "!");
}


function verificarParOuImpar() {
    var numero = document.getElementById("numero").value;
    if (numero % 2 === 0) {
        alert(numero + " é um número par.");
    } else {
        alert(numero + " é um número ímpar.");
    }
}


function calcular() {
    var operacao = document.getElementById("operacao").value;
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado;

    if (operacao === "soma") {
        resultado = num1 + num2;
    } else if (operacao === "subtracao") {
        resultado = num1 - num2;
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}