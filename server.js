const fastify = require('fastify')({ logger: true });
const path = require('path');
const fastifyStatic = require('@fastify/static');

// Serve static frontend
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/',
});

// Mock CLI command endpoint
fastify.post('/command', async (request, reply) => {
  const { command } = request.body;
  // Basit echo / mock response
  const response = `Received: ${command}`;
  fastify.log.info(`Command executed: ${command}`);
  return { response };
});

const PORT = process.env.PORT || 3000;
fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) throw err;
  fastify.log.info(`MC API server running at ${address}`);
});
