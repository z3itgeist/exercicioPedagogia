const express = require('express')
const app = express()
require("dotenv").config('/.env');

app.use(express.json());
const port = 3000


const { gerarAudio } = require("./tts");

app.listen(port, ()=> {
  console.log('Servidor rodando na porta',port);
  console.log(process.env.ELEVENLABS_API_KEY);
})



app.get('/', (req,res)=> {
  res.send('Rota funcionando');
})

app.post("/tts", async (req,res) =>{
    try {
        const text = req.body.text;
        const audioBuffer = await gerarAudio(text);

        res.setHeader("Content-Type", "audio/mpeg");
        res.send(audioBuffer);
    } catch(error) {
        res.status(500).json({error: "Gerador de áudio falhou!"})
    }
})
