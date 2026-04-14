// components/FormFilme.jsx
import React, { useState } from 'react';

function FormFilme({ onAdicionarFilme }) {
  const [novoFilme, setNovoFilme] = useState({ nome: '', genero: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoFilme({ ...novoFilme, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novoFilme.nome.trim() && novoFilme.genero.trim()) {
      onAdicionarFilme({
        id: Date.now(),
        nome: novoFilme.nome,
        genero: novoFilme.genero
      });
      setNovoFilme({ nome: '', genero: '' });
    }
  };

  return (
    <div className="form-container">
      <h2>📝 Cadastrar Novo Filme/Série</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Filme/Série"
          value={novoFilme.nome}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="genero"
          placeholder="Gênero"
          value={novoFilme.genero}
          onChange={handleInputChange}
          required
        />
        <button type="submit">➕ Adicionar</button>
      </form>
    </div>
  );
}

export default FormFilme;