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
    const text = element.textContent;

    console.log("A cor é:", text, "e o id é:", id);
    audio(text)

}

async function audio(text) {
    
    const response = await fetch ('/tts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: text})
    });

  const audioBlob = await response.blob();
  const audioUrl = URL.createObjectURL(audioBlob);
  
  const audio = new Audio(audioUrl);
  audio.play();
}