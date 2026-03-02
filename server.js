const express = require('express')
const app = express()

const port = 3000

app.listen(port, ()=> {
  console.log('Servidor rodando ana porta',port);
})

app.use(express.json());

app.get('/', (req,res)=> {
  res.send('Rota funcionando');
})

app.post("/tts", async (req,res) =>{
    try {
        const text = req.body.text;
        const audioBuffer = await gerarAudio(texto);

        res.setHeader("Content-Type", "audio/mpeg");
        res.send(audioBuffer);
    } catch(error) {
        res.status(500).json({error: "Gerador de áudio falhou!"})
    }
})
