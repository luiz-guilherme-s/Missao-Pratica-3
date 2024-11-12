import React, { useState } from 'react';

const LivroDados: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [editora, setEditora] = useState('');
    const [autores, setAutores] = useState('');

    // Função para incluir um novo livro
    const incluirLivro = async (event: React.FormEvent) => {
        event.preventDefault();
        const novoLivro = {
            codigo: Math.floor(Math.random() * 1000), // gera um código aleatório
            titulo,
            resumo,
            editora,
            autores: autores.split('\n').map(autor => autor.trim()) // Divide por linhas para cada autor
        };
        try {
            await fetch('http://localhost:3001/livros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoLivro)
            });
            alert("Livro cadastrado com sucesso!");
            setTitulo('');
            setResumo('');
            setEditora('');
            setAutores('');
        } catch (error) {
            console.error("Erro ao cadastrar livro:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Dados do Livro</h2>
            <form onSubmit={incluirLivro}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input
                        type="text"
                        className="form-control"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Resumo</label>
                    <textarea
                        className="form-control"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Editora</label>
                    <input
                        type="text"
                        className="form-control"
                        value={editora}
                        onChange={(e) => setEditora(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Autores (1 por linha)</label>
                    <textarea
                        className="form-control"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                        rows={3}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
            </form>
        </div>
    );
};

export default LivroDados;
