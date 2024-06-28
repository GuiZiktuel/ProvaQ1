const fastify = require('fastify')();

const noticias = [
    { titulo: 'Notícia 1', descricao: 'Descrição da Notícia 1', imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.editoradplacido.com.br%2Fo-direito-produto-da-noticia-a-morte-estampada-nos-jornais&psig=AOvVaw3kN9mRGBTU6WAmyj1JMDUY&ust=1719672155984000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC0w5HE_oYDFQAAAAAdAAAAABAE'},
    { titulo: 'Notícia 2', descricao: 'Descrição da Notícia 2', imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.editoradplacido.com.br%2Fo-direito-produto-da-noticia-a-morte-estampada-nos-jornais&psig=AOvVaw3kN9mRGBTU6WAmyj1JMDUY&ust=1719672155984000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC0w5HE_oYDFQAAAAAdAAAAABAE' },
    { titulo: 'Notícia 3', descricao: 'Descrição da Notícia 3', imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.editoradplacido.com.br%2Fo-direito-produto-da-noticia-a-morte-estampada-nos-jornais&psig=AOvVaw3kN9mRGBTU6WAmyj1JMDUY&ust=1719672155984000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC0w5HE_oYDFQAAAAAdAAAAABAE' },
    { titulo: 'Notícia 4', descricao: 'Descrição da Notícia 4', imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.editoradplacido.com.br%2Fo-direito-produto-da-noticia-a-morte-estampada-nos-jornais&psig=AOvVaw3kN9mRGBTU6WAmyj1JMDUY&ust=1719672155984000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC0w5HE_oYDFQAAAAAdAAAAABAE'},
    { titulo: 'Notícia 5', descricao: 'Descrição da Notícia 5', imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.editoradplacido.com.br%2Fo-direito-produto-da-noticia-a-morte-estampada-nos-jornais&psig=AOvVaw3kN9mRGBTU6WAmyj1JMDUY&ust=1719672155984000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC0w5HE_oYDFQAAAAAdAAAAABAE' },
    { titulo: 'Notícia 6', descricao: 'Descrição da Notícia 6', imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.editoradplacido.com.br%2Fo-direito-produto-da-noticia-a-morte-estampada-nos-jornais&psig=AOvVaw3kN9mRGBTU6WAmyj1JMDUY&ust=1719672155984000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC0w5HE_oYDFQAAAAAdAAAAABAE' },
   
];
fastify.post('/noticias', async (request, reply) => {
    try {
        const noticias = request.body; 
        console.log('Notícias recebidas:', noticias);
        reply.code(200).send({ message: 'Notícias recebidas com sucesso!' });
    } catch (error) {
        console.error('Erro ao processar notícias:', error);
        reply.code(500).send({ error: 'Erro ao processar notícias' });
    }
});


fastify.post('/noticias', async (request, reply) => {
    try {
        const noticias = request.body; 
        console.log('Notícias recebidas:', noticias);
        reply.code(200).send({ message: 'Notícias recebidas com sucesso!' });
    } catch (error) {
        console.error('Erro ao processar notícias:', error);
        reply.code(500).send({ error: 'Erro ao processar notícias' });
    }
});

