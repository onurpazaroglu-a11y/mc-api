// services/mchService.js
const axios = require('axios');

const OLLAMA_API = 'http://host.docker.internal:11434/v1/generate'; // Docker container'dan host

async function execute(body) {
    const prompt = body.command;

    try {
        const resp = await axios.post(OLLAMA_API, {
            model: 'llama2',
            prompt: prompt
        });
        return resp.data.completion;
    } catch (err) {
        return `AI hatası: ${err.message}`;
    }
}

module.exports = { execute };
