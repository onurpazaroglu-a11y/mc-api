const { runOllama } = require('../services/ollama');

async function chatController(fastify, options) {
fastify.post('/chat', async (request, reply) => {
    try {
    const { message } = request.body;

    if (!message) {
        reply.code(400).send({ error: 'message is required' });
        return;
    }

    const response = await runOllama(message);
    return { response };
    } catch (err) {
    fastify.log.error(err);
    reply.code(500).send({ error: err.message });
    }
});
}

module.exports = chatController;
