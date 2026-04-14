// App.jsx
import React, { useState } from 'react';
import StatusBar from './components/StatusBar';
import FilmeCard from './components/FilmeCard';
import Footer from './components/Footer';
import FormFilme from './components/FormFilme';
import ListaFilmes from './components/ListaFilmes';

function App() {
  // useState para gerenciar a lista de filmes (2.0 pts)
  const [filmes, setFilmes] = useState([
    { id: 1, nome: 'Interestelar', genero: 'Ficção Científica' },
    { id: 2, nome: 'O Poderoso Chefão', genero: 'Drama' },
    { id: 3, nome: 'Toy Story', genero: 'Animação' }
  ]);

  const adicionarFilme = (novoFilme) => {
    setFilmes([...filmes, novoFilme]);
  };

  const removerFilme = (id) => {
    setFilmes(filmes.filter(filme => filme.id !== id));
  };

  return (
    <div className="app">
      <StatusBar />
      
      <div className="main-content">
        <FormFilme onAdicionarFilme={adicionarFilme} />
        <ListaFilmes 
          filmes={filmes}
          onRemoverFilme={removerFilme}
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;