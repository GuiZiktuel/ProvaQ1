const fastify = require('fastify')({ logger: true });
const jwt = require('fastify-jwt');
const noticiasController = require('../controllers/noticias');
const authController = require('../controllers/auth');


const JWT_SECRET = 'secreto123';

fastify.register(jwt, { secret: JWT_SECRET });

fastify.post('/login', async (request, reply) => {
  const { username, password } = request.body;

  try {
    const user = await authController.authenticate(username, password);
    if (!user) {
      reply.code(401).send({ message: 'Credenciais inválidas.' });
      return;
    }

    const token = await authController.signToken(username);
    reply.send({ token });
  } catch (error) {
    reply.code(500).send({ message: 'Erro ao processar a solicitação.' });
  }
});
fastify.get('/noticias', async (request, reply) => {
  const listaNoticias = noticiasController.getNoticias();
  reply.send(listaNoticias);
});

module.exports = fastify;