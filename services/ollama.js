const OLLAMA_BASE_URL =
process.env.OLLAMA_BASE_URL || 'http://localhost:11434';

const MODEL =
process.env.OLLAMA_MODEL || 'llama2';

async function runOllama(prompt) {
const res = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    model: MODEL,
    prompt,
    stream: false
    })
});

if (!res.ok) {
    throw new Error('Ollama not reachable');
}

const data = await res.json();
return data.response;
}

module.exports = { runOllama };
