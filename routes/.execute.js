const { can } = require('../permissions/matrix')
const mchService = require('../services/mchService')

module.exports = async function (fastify) {
    fastify.post('/api/execute', async (req, reply) => {
        if (!can(req.context.client, 'execute')) {
            return reply.code(403).send({
                ok: false,
                error: { code: 'PERMISSION_DENIED' }
            })
        }

        const result = await mchService.execute(req.body)
        return { ok: true, context: req.context.client, data: result }
    })
}
