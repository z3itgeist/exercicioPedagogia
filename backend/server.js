const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();


// Permitir JSON no body (para rotas de API)
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos (CSS, JS, imagens)
//app.use(express.static(path.join(__dirname, '..', 'frontend')));

const port = process.env.PORT || 8080;

const { gerarAudio } = require("./tts");

/*app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
  //console.log(path.join(__dirname, '..', 'frontend', 'index.html'));
  //res.send("o problema esta na rota")

});*/


app.listen(port, ()=> {
  console.log('Servidor rodando na porta',port);
})

app.get('/', (req,res)=> {
  res.send('Rota funcionando');
})

app.post("https://exerciciopedagogia-production.up.railway.app", async (req,res) =>{
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
