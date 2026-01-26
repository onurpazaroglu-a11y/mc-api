const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')

const pkgDef = protoLoader.loadSync(
    path.join(__dirname, 'mch.proto')
)
const proto = grpc.loadPackageDefinition(pkgDef).mch

const client = new proto.MCH(
    process.env.MCH_GRPC_ADDR || 'mch:50051',
    grpc.credentials.createInsecure()
)

function execute(payload) {
    return new Promise((resolve, reject) => {
        client.Execute(payload, (err, res) => {
            if (err) return reject(err)
            resolve(res)
        })
    })
}

module.exports = { execute }
