import React, { useState } from 'react';

function FormFilme({ onAdd }) {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() === '' || genero.trim() === '') {
      alert('⚠️ Preencha todos os campos');
      return;
    }
    onAdd({ nome, genero });
    setNome('');
    setGenero('');
  };

  return (
    <div className="form-container">
      <h2>➕ Adicionar Filme/Série</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Filme/Série"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Gênero"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
        />
        <button type="submit">💾 Salvar no Firestore</button>
      </form>
    </div>
  );
}

export default FormFilme;