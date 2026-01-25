const logger = require('../utils/logger');

// Mock database (later replace with real DB)
const decisions = new Map();

async function processDecision(decision) {
    // 1. Validate decision object
    if (!decision.intent_id || !decision.plugin_id) {
        throw new Error('Invalid Decision Object');
    }

    // 2. Apply Human-in-the-Loop rules (simplified)
    let status = 'PENDING_APPROVAL';
    if (decision.required_approval === false) {
        status = 'APPROVED';
    }

    // 3. Store decision
    const storedDecision = {
        ...decision,
        status,
        timestamp: new Date(),
    };
    decisions.set(decision.intent_id, storedDecision);

    // 4. Logging
    logger.info(`Decision stored: ${decision.intent_id} | status: ${status}`);

    // 5. Return result
    return storedDecision;
}

async function getDecisionById(intent_id) {
    return decisions.get(intent_id);
}

module.exports = {
    processDecision,
    getDecisionById,
};
