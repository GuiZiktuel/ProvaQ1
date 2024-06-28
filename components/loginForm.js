import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from './context';

const LoginForm = () => {
  const { setUser } = useContext(context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);

      setUser({ username });

      
      router.push('/news');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome de usuário:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label>Senha:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Entrar</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default LoginForm;
