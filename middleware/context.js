module.exports = async function (fastify) {
    fastify.addHook('onRequest', async (req) => {
        req.context = { client: req.headers['x-client-type'] || 'mchs' }
    })
}
