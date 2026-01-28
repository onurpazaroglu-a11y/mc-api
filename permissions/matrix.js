const matrix = {
    mchc: ['execute', 'status', 'health'],
    mchs: ['status', 'health']
}

function can(client, action) {
    return matrix[client]?.includes(action)
}

module.exports = { can }
