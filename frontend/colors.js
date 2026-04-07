//criar as função que recebe o id do botão
//pra cada botão vem um som associado via case/switch
//os sons vem de algum fonte online pra evitar salvar tantos arquivos
//gerar sons com o ttsreader e a api deles
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function(event){
        const element = event.currentTarget;
        colorSounds(element);
        
    });
});

function colorSounds(element) {
    
    const id = element.id;
    const img = element.tagName === "IMG" ? element : element.querySelector("img");
    const textToRead = img ? img.alt : "";

    if(textToRead){
        console.log("A cor é:", textToRead, "e o id é:", id);
        audio(textToRead)
 }
}

async function audio(textToRead) {
    
    const response = await fetch ('https://exerciciopedagogia-production.up.railway.app/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: textToRead})
    });

  const audioBlob = await response.blob();
  const audioUrl = URL.createObjectURL(audioBlob);
  
  const audio = new Audio(audioUrl);
  audio.play();
}
