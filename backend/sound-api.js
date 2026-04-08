const fs = require('fs').promises;
const path = require('path');

const listaAudios = {
    "red":"red.mp3",
    "white":"white.mp3",
    "pink":"pink.mp3",
    "blue":"blue.mp3",
    "purple":"purple.mp3",
    "yellow":"yellow.mp3",
    "orange":"orange.mp3",
    "green":"green.mp3",
    "square":"square.mp3",
    "triangle":"triangle.mp3",
    "circle":"circle.mp3",
    "one":"one.mp3",
    "two":"two.mp3",
    "three":"three.mp3",
    "four":"four.mp3",
    "five":"five.mp3",
    "six":"six.mp3",
    "seven":"seven.mp3",
    "eight":"eight.mp3",
    "nine":"nine.mp3",
    "ten":"ten.mp3",
}


async function gerarAudio(text) {
    console.log("texto sendo processado", text);
    try {
        const nomeArquivo = listaAudios[text];

        const caminhoAudio = path.join(__dirname, 'sounds', nomeArquivo);

        const audioBuffer = await fs.readFile(caminhoAudio);
        return audioBuffer;
    } catch (error) {
        throw error;
    }
};

module.exports = {gerarAudio};