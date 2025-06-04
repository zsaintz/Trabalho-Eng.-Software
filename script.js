function Mensagem() {
    var mensagem = document.getElementById("mensagem");
    if (mensagem.innerText.trim() === "") {
        mensagem.innerText = "A criatividade exige coragem";
        backgroundColor = "#95cbc6";
        mensagem.style.backgroundColor = backgroundColor;
        botao.innerText = "Ocultar Mensagem";

    } else {
        mensagem.innerText = "";
        mensagem.style.backgroundColor = "transparent";
    }
}