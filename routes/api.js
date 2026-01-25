const decisionController = require('../controllers/decisionController');

async function routes(fastify, options) {
    await decisionController(fastify, options);
}

module.exports = routes;
