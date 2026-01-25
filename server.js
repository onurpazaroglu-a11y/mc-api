const fastify = require('fastify')({ logger: true });
const path = require('path');
const fastifyStatic = require('@fastify/static');

// Statik dosyaları sunmak için /public klasörü
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/', // http://localhost:3000/ ile erişilebilir
});

// Basit health endpoint
fastify.get('/health', async (request, reply) => {
  return { status: 'ok' };
});

const PORT = process.env.PORT || 3000;
fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) throw err;
  fastify.log.info(`MC API server running at ${address}`);
});
