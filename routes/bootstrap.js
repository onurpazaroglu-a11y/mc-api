module.exports = async function (fastify) {
    fastify.get('/bootstrap', async (req) => {
        return {
            ok: true,
            data: {
                client: req.context.client,
                features: {
                    execute: req.context.client === 'mchc'
                }
            }
        }
    })
}
