import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Auth({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isCadastro, setIsCadastro] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    try {
      if (isCadastro) {
        await createUserWithEmailAndPassword(auth, email, senha);
        alert('Cadastro realizado com sucesso!');
      } else {
        await signInWithEmailAndPassword(auth, email, senha);
      }
      onLogin();
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isCadastro ? '📝 Cadastro' : '🔐 Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">{isCadastro ? 'Cadastrar' : 'Entrar'}</button>
      </form>
      <button onClick={() => setIsCadastro(!isCadastro)}>
        {isCadastro ? 'Já tem conta? Faça login' : 'Criar nova conta'}
      </button>
      {erro && <p className="erro">{erro}</p>}
    </div>
  );
}

export default Auth;