const fastify = require('fastify')({ logger: true });
const path = require('path');
const fastifyStatic = require('@fastify/static');

// Static UI
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/',
});

// API routes
const apiRoutes = require('./routes/api');
fastify.register(apiRoutes, { prefix: '/api' });

// Health check (opsiyonel ama önerilir)
fastify.get('/health', async () => {
  return { status: 'ok' };
});

const PORT = process.env.PORT || 3000;
fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`MC API running at ${address}`);
});
