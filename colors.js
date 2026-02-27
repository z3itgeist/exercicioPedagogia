//criar as função que recebe o id do botão
//pra cada botão vem um som associado via case/switch
//os sons vem de algum fonte online pra evitar salvar tantos arquivos
//gerar sons com o ttsreader e a api deles
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function(event){
        colorSounds(event.target.id);
    });
});

function colorSounds(buttonId) {
    switch(buttonId) {
        case "redButton":
            console.log("red sound");
            break;
        case "yellowButton":
            console.log("yellow sound");
            break;
        case "blueButton":
            console.log("blue sound");
            break;
        case "whiteButton":
            console.log("white sound");
            break;
        case "pinkButton":
            console.log("pink sound");
            break;
        case "purpleButton":
            console.log("purple sound");
            break;
        case "orangeButton":
            console.log("orange sound");
            break;
        case "greenButton":
            console.log("green sound");
            break;
    }

}