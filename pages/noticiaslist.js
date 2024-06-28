import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
  const [noticias, setNoticias] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      setCarregando(true);
      setErro(null);

      try {
        const response = await axios.get('/api/noticias'); // Ajuste o endpoint da API
        setNoticias(response.data);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    };

    buscarDados();
  }, []);

  return (
    <div>
      {carregando && <p>Carregando notícias...</p>}
      {erro && <p>Erro: {erro}</p>}
      {noticias.length > 0 && (
        <ul>
          {noticias.map((artigo) => (
            <li key={artigo.titulo}>
              <h2>{artigo.titulo}</h2>
              <p>{artigo.descricao}</p>
              {artigo.imagem && <img src={artigo.imagem} alt={artigo.titulo} />}
            </li>
          ))}
        </ul>
      )}
      {noticias.length === 0 && !carregando && <p>Nenhum artigo de notícia encontrado.</p>}
    </div>
  );
};

export default NewsList;