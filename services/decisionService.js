const logger = require('../utils/logger');

// Mock DB
const decisions = new Map();
const validPlugins = ['Architech', 'Traid', 'Writer'];

async function processDecision(decision) {
    if (!decision.intent_id || !decision.plugin_id) {
        throw new Error('Invalid Decision Object');
    }

    if (!validPlugins.includes(decision.plugin_id)) {
        throw new Error(`AVV_ERR_PLUGIN_NOT_VALID: Plugin '${decision.plugin_id}' is not recognized`);
    }

    let status = 'PENDING_APPROVAL';
    if (decision.required_approval === false) status = 'APPROVED';

    const storedDecision = {
        ...decision,
        status,
        timestamp: new Date(),
    };

    decisions.set(decision.intent_id, storedDecision);
    logger.info(`Decision stored: ${decision.intent_id} | status: ${status}`);

    return storedDecision;
}

async function approveDecision(intent_id, userApproval) {
    const decision = decisions.get(intent_id);
    if (!decision) throw new Error('Decision not found');
    if (decision.status !== 'PENDING_APPROVAL') throw new Error('Decision already processed');

    decision.status = userApproval ? 'APPROVED' : 'REJECTED';
    decision.approval_timestamp = new Date();
    decisions.set(intent_id, decision);

    logger.info(`Decision ${intent_id} | new status: ${decision.status}`);
    return decision;
}

async function getDecisionById(intent_id) {
    return decisions.get(intent_id);
}

module.exports = { processDecision, approveDecision, getDecisionById };
