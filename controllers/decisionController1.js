module.exports = async function (fastify) {

  fastify.post('/execute', async (request, reply) => {
    const { command } = request.body || {};

    if (!command) {
      reply.code(400);
      return {
        ok: false,
        error: 'command field is required'
      };
    }

    try {
      const res = await fetch('http://host.docker.internal:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama2',
          prompt: command,
          stream: false
        })
      });

      const json = await res.json();

      return {
        ok: true,
        data: {
          received: json.response?.trim() || 'AI boş cevap döndü',
          executedAt: new Date().toISOString(),
          status: 'executed'
        }
      };

    } catch (err) {
      fastify.log.error(err);
      reply.code(500);
      return {
        ok: false,
        error: 'AI backend (Ollama) bağlantı hatası'
      };
    }
  });

};
