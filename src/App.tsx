import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import './Home.css'; 
import LivroLista from './LivroListaComponent';
import LivroDados from './LivroNovo';

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Início</Link>
                    <Link to="/catalogo" className="navbar-brand">Catálogo</Link>
                    <Link to="/cadastrar" className="navbar-brand">Novo</Link>
                </div>
            </nav>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogo" element={<LivroLista />} />
                    <Route path="/cadastrar" element={<LivroDados />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
