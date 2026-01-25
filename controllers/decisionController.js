const decisionService = require('../services/decisionService');

async function routes(fastify, options) {
    fastify.post('/decision', async (request, reply) => {
        try {
            const decision = request.body;
            const result = await decisionService.processDecision(decision);
            return reply.code(200).send(result);
        } catch (err) {
            request.log.error(err);
            return reply.code(500).send({ error: err.message });
        }
    });

    fastify.get('/decision/:id', async (request, reply) => {
        try {
            const { id } = request.params;
            const decision = await decisionService.getDecisionById(id);
            if (!decision) return reply.code(404).send({ error: 'Decision not found' });
            return reply.code(200).send(decision);
        } catch (err) {
            request.log.error(err);
            return reply.code(500).send({ error: err.message });
        }
    });

    fastify.post('/decision/:id/approve', async (request, reply) => {
        try {
            const { id } = request.params;
            const { approve } = request.body;
            const result = await decisionService.approveDecision(id, approve);
            return reply.code(200).send(result);
        } catch (err) {
            request.log.error(err);
            return reply.code(500).send({ error: err.message });
        }
    });
}

module.exports = routes;
