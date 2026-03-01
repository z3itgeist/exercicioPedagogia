import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY, 
});

export default async function audioGenerator(req, res) {

    if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { texto } = req.body; // Pega o texto enviado pelo seu botão

    // 2. A lógica que você pegou da documentação (adaptada para JS)
    const audioStream = await client.textToSpeech.stream('JBFqnCBsd6RMkjVDRZzb', {
      modelId: 'eleven_multilingual_v2',
      text: texto,
      outputFormat: 'mp3_44100_128',
    });

    const chunks = [];
    for await (const chunk of audioStream) {
      chunks.push(chunk);
    }
    const content = Buffer.concat(chunks);

    // 3. Resposta assertiva: devolve o arquivo de áudio real
    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(content);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao gerar áudio' });
  }
}