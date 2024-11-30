import React, { useState } from 'react';
import axios from './axiosConfig';

const App = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
        try {
            const response = await axios.post(endpoint, { email, senha });
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.message || 'Erro de conexão');
        }
    };

    return ( //temos que criar os formulários 
      <div>
        <h1>{isLogin ? 'Login' : 'Cadastro'}</h1>
        <form onSubmit={handleSubmit}>
          <input

          />

          <input

          />
          <button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Cadastro' : 'Login'}
        </button>
      </div>
    );

};
export default App;