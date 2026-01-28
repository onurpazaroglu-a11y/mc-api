const { runOllama } = require('../services/ollama')

async function chatRoutes(fastify, options) {
fastify.post('/chat', async (request, reply) => {
    try {
    const { message } = request.body
    const response = await runOllama(message)
    return { response }
    } catch (err) {
    fastify.log.error(err)
    reply.code(500).send({ error: err.message })
    }
})
}

module.exports = chatRoutes
