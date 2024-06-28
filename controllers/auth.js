const jwt = require('fastify-jwt');
const bcrypt = require('bcryptjs');

const JWT_SECRET = 'senha123';
const users = [
  { username: 'usuario', passwordHash: '$2a$10$V4k1hOxw29T5SoYhK2fqju1Sk0JiSz70a.1lX4Km7bHmbDQmXdFw2' } 
];

async function authenticate(username, password) {
  const user = users.find(u => u.username === username);
  if (!user) {
    return null; 
  }

  const passwordMatch = await bcrypt.compare(password, user.passwordHash);
  if (!passwordMatch) {
    return null; 
  }

  return { username: user.username };
}

async function signToken(username) {
  const token = await jwt.sign({ username }, { secret: JWT_SECRET, expiresIn: '1h' });
  return token;
}

module.exports = {
  authenticate,
  signToken
};