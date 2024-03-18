var textInput = document.querySelector("#mensagem-entrada");
var outInput = document.querySelector("mensagem-saida");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('mensagem-saida').innerHTML = '</textarea reandoly id="mensagem-entrada">' + resultCripto + '</textarea>' + '<button class = "btns" id="btn-copiar" onclick="copiar()">Copiar</button>'

}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('mensagem-saida').innerHTML = '</textarea reandoly id="mensagem-entrada">' + resultDescripto + '</textarea>' + '<button class= "btns" id="btn-copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCopiar = document.getElementById("mensagem-entrada");

    textoCopiar.select();
    document.execCommand('copy');
    alert("Texto copiado");
}