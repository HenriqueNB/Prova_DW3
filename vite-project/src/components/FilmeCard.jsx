// components/FilmeCard.jsx
import React from 'react';

function FilmeCard({ filme, onRemover }) {
  return (
    <div className="filme-card">
      <div className="filme-info">
        <h3>{filme.nome}</h3>
        <p><span className="genero-tag">{filme.genero}</span></p>
      </div>
      <button 
        className="btn-remover"
        onClick={() => onRemover(filme.id)}
        title="Remover filme"
      >
        ❌
      </button>
    </div>
  );
}

export default FilmeCard;