// components/ListaFilmes.jsx
import React from 'react';
import FilmeCard from './FilmeCard';

function ListaFilmes({ filmes, onRemoverFilme }) {
  return (
    <div className="lista-container">
      <h2>📋 Lista de Filmes/Séries</h2>
      {filmes.length === 0 ? (
        <p className="empty-message">Nenhum filme cadastrado ainda.</p>
      ) : (
        <div className="filmes-grid">
          {filmes.map((filme) => (
            <FilmeCard 
              key={filme.id}
              filme={filme}
              onRemover={onRemoverFilme}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaFilmes;