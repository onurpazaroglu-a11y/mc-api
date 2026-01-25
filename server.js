const fastify = require('fastify')({ logger: true });
const apiRoutes = require('./routes/api');
const healthRoutes = require('./routes/health');

const PORT = process.env.PORT || 3005;

fastify.register(apiRoutes, { prefix: '/api' });
fastify.register(healthRoutes, { prefix: '/health' });

fastify.listen({ port: PORT }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`MC API server running at ${address}`);
});
