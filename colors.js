//criar as função que recebe o id do botão
//pra cada botão vem um som associado via case/switch
//os sons vem de algum fonte online pra evitar salvar tantos arquivos
//gerar sons com o ttsreader e a api deles
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function(event){
        const element = event.target;
        colorSounds(element);
        
    });
});

function colorSounds(element) {
    
    const id = element.id;
    const texto = element.textContent;

    console.log("A cor é:", texto, "e o id é:", id);
    audio(texto)

}

async function audio(texto) {
    
    const response = await fetch ('/tts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({texto: texto})
    });

  const audioBlob = await response.blob();
  const audioUrl = URL.createObjectURL(audioBlob);
  
  const audio = new Audio(audioUrl);
  audio.play();
}