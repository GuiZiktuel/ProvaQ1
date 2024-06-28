const fastify = require ('fastify')();
const routes = require ('./routes');

fastify.register(routes);

const start = async () => {
    try {
        await fastify.listen('3000');
        console.log9('Servidor iniciando na porta 3000');
    }catch(err){
        console.log(err);
        process.exit(1);
    }

};

start();
