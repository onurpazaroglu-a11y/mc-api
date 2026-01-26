module.exports = async function (fastify) {

    // POST /api/execute
    fastify.post('/execute', async (request, reply) => {
        const { command } = request.body || {};

        if (!command) {
            reply.code(400);
            return {
                ok: false,
                error: 'command field is required'
            };
        }

        // Şimdilik mock – ileride MCH / CLI / gRPC buraya bağlanır
        const result = {
            received: command,
            executedAt: new Date().toISOString(),
            status: 'executed'
        };

        return {
            ok: true,
            data: result
        };
    });

};
