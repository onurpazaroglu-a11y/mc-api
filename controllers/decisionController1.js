const decisionService = require('../services/decisionService');

async function routes(fastify, options) {

    // Yeni Decision Object oluştur ve HITL ile işle
    fastify.post('/decision', async (request, reply) => {
        try {
            const decision = request.body;
            const result = await decisionService.processDecision(decision);
            return reply.code(200).send(result);
        } catch (err) {
            request.log.error(err);
            return reply.code(500).send({ error: 'Decision processing failed' });
        }
    });

    // Decision Object sorgulama (opsiyonel)
    fastify.get('/decision/:id', async (request, reply) => {
        try {
            const { id } = request.params;
            const decision = await decisionService.getDecisionById(id);
            if (!decision) return reply.code(404).send({ error: 'Decision not found' });
            return reply.code(200).send(decision);
        } catch (err) {
            request.log.error(err);
            return reply.code(500).send({ error: 'Decision fetch failed' });
        }
    });
}

module.exports = routes;
