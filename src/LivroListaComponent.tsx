import React, { useEffect, useState } from 'react';

interface Livro {
    codigo: number;
    titulo: string;
    resumo: string;
    editora: string;
    autores: string[];
}

const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<Livro[]>([]);

    // Função para buscar os livros da API
    const fetchLivros = async () => {
        try {
            const response = await fetch('http://localhost:3001/livros');
            const data = await response.json();
            setLivros(data);
        } catch (error) {
            console.error("Erro ao buscar livros:", error);
        }
    };

    // Função para excluir um livro
    const excluirLivro = async (codigo: number) => {
        try {
            await fetch(`http://localhost:3001/livros/${codigo}`, { method: 'DELETE' });
            // Atualiza o estado local para remover o livro excluído da lista
            setLivros(livros.filter(livro => livro.codigo !== codigo));
        } catch (error) {
            console.error("Erro ao excluir livro:", error);
        }
    };

    useEffect(() => {
        fetchLivros();
    }, []);

    return (
        <div className="container mt-4">
            <h2>Catálogo de Livros</h2>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro => (
                        <tr key={livro.codigo}>
                            <td>
                                {livro.titulo}
                                <button 
                                    className="btn btn-danger btn-sm ms-2"
                                    onClick={() => excluirLivro(livro.codigo)}
                                >
                                    Excluir
                                </button>
                            </td>
                            <td>{livro.resumo}</td>
                            <td>{livro.editora}</td>
                            <td>
                                <ul className="list-unstyled">
                                    {livro.autores.map((autor, index) => (
                                        <li key={index}>{autor}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LivroLista;
