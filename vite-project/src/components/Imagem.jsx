import React from 'react';
// Coloque uma imagem sua na pasta public ou importe
import logo from '../assets/movie-icon.png'; // crie uma imagem qualquer

function Imagem() {
  return (
    <div className="imagem-container">
      <img src={logo} alt="Catálogo de Filmes" className="imagem-catalogo" />
    </div>
  );
}

export default Imagem;