const mchClient = require('../grpc/mch.client')

async function execute(payload) {
    // validate / enrich
    return mchClient.execute(payload)
}

module.exports = { execute }
