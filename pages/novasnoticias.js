import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './context';

const NewsPage = () => {
  const { user } = useContext(UserContext);
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return; 

      setIsLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/noticias', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNoticias(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div>
      {user && <h1>Notícias</h1>}
      {isLoading && <p>Carregando notícias...</p>}
      {error && <p className="error">Erro: {error}</p>}
      {user && noticias.length > 0 && (
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
      {user && noticias.length === 0 && <p>Nenhuma notícia encontrada.</p>}
    </div>
  );
};

export default NewsPage;
