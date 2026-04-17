import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { signOut } from 'firebase/auth';
import { collection, addDoc, onSnapshot, deleteDoc, doc, query, where } from 'firebase/firestore';
import StatusBar from './components/StatusBar';
import Footer from './components/Footer';
import Imagem from './components/Imagem';
import Auth from './components/Auth';
import FormFilme from './components/FormFilme';
import ListaFilmes from './components/ListaFilmes';
import './styles.css';

function App() {
  const [user, setUser] = useState(null);
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;
    
    const filmesRef = collection(db, 'filmes');
    const q = query(filmesRef, where('userId', '==', user.uid));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFilmes(lista);
    });
    
    return unsubscribe;
  }, [user]);

  const handleAddFilme = async (filme) => {
    if (!user) return;
    try {
      await addDoc(collection(db, 'filmes'), {
        nome: filme.nome,
        genero: filme.genero,
        userId: user.uid,
        userEmail: user.email,
        createdAt: new Date()
      });
      alert('Filme adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar: ', error);
      alert('❌ Erro ao salvar filme');
    }
  };

  const handleRemoveFilme = async (id) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, 'filmes', id));
      alert('Filme removido com sucesso!');
    } catch (error) {
      console.error('Erro ao remover: ', error);
      alert('❌ Erro ao remover filme');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setFilmes([]);
      alert('Logout realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  if (!user) {
    return (
      <div className="app">
        <StatusBar titulo="🎬 Catálogo de Filmes ou Séries" />
        <Imagem />
        <Auth onLogin={() => {}} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <StatusBar titulo={`👋 Bem-vindo(a), ${user.email}`} />
      <Imagem />
      <button onClick={handleLogout} className="btn-logout">🚪 Sair</button>
      
      <div className="main-content">
        <FormFilme onAdd={handleAddFilme} />
        
        <div className="info-usuario">
          <p>Você tem {filmes.length} filme(s) cadastrado(s)</p>
        </div>
        
        <ListaFilmes filmes={filmes} onRemove={handleRemoveFilme} />
      </div>
      <Footer />
    </div>
  );
}

export default App;