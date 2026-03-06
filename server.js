const express = require('express')
const app = express()
require("dotenv").config();
const path = require('path');
console.log("API KEY:", process.env.ELEVENLABS_API_KEY);
app.use(express.json());
app.use(express.static(__dirname));
const port = 3000


const { gerarAudio } = require("./tts");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
  //res.send("o problema esta na rota")

});


app.listen(port, ()=> {
  console.log('Servidor rodando na porta',port);
})

/*app.get('/', (req,res)=> {
  res.send('Rota funcionando');
})*/

app.post("/tts", async (req,res) =>{
    try {
        const text = req.body.text;
console.log("Recebido texto para converter:", text);

        const audioBuffer = await gerarAudio(text);
        console.log("Áudio gerado com sucesso");

        res.setHeader("Content-Type", "audio/mpeg");
        res.send(audioBuffer);
    } catch(error) {
      console.error("ERRO DETALHADO NO TTS:", error);
        res.status(500).json({error: "Gerador de áudio falhou!"})
    }
})
