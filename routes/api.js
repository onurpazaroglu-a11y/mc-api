const decisionController = require('../controllers/decisionController');
const chatController = require('../controllers/chatController');

async function routes(fastify, options) {
await decisionController(fastify, options);
await chatController(fastify, options);
}

module.exports = routes;


async function routes(fastify, options) {
    await decisionController(fastify, options);
}

module.exports = routes;
