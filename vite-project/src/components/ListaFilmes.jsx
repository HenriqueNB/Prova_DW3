import React from 'react';

function ListaFilmes({ filmes, onRemove }) {
  return (
    <div className="lista-container">
      <h2>🎬 Meus Filmes/Séries</h2>
      {filmes.length === 0 ? (
        <div className="empty-state">
          <p>📭 Nenhum filme cadastrado ainda.</p>
          <p>✨ Adicione seu primeiro filme no formulário acima!</p>
        </div>
      ) : (
        <div className="filmes-grid">
          {filmes.map((filme) => (
            <div key={filme.id} className="filme-card">
              <div className="filme-info">
                <h3>🎥 {filme.nome}</h3>
                <p><span className="genero-tag">{filme.genero}</span></p>
                {filme.userEmail && <small>👤 Adicionado por: {filme.userEmail}</small>}
              </div>
              <button onClick={() => onRemove(filme.id)} className="btn-delete">
                🗑️ Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaFilmes;