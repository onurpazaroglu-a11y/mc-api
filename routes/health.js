async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
        return { status: 'Mis!', time: new Date() };
    });
}

module.exports = routes;
