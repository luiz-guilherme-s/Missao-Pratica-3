import { Livro } from "../modelo/Livro";

export class ControleLivros {
    private livros: Array<Livro> = [
        { codigo: 1, codEditora: 1, titulo: "Livro 1", resumo: "Resumo do livro 1", autores: ["Autor 1"] },
        { codigo: 2, codEditora: 2, titulo: "Livro 2", resumo: "Resumo do livro 2", autores: ["Autor 2"] },
        { codigo: 3, codEditora: 3, titulo: "Livro 3", resumo: "Resumo do livro 3", autores: ["Autor 3"] },
    ];

    // Método para obter todos os livros
    obterLivros(): Array<Livro> {
        return this.livros;
    }

    // Método para incluir um novo livro
    incluir(livro: Livro): void {
        const maxCodigo = Math.max(...this.livros.map(l => l.codigo));
        livro.codigo = maxCodigo + 1;
        this.livros.push(livro);
    }

    // Método para excluir um livro pelo código
    excluir(codigo: number): void {
        const index = this.livros.findIndex(l => l.codigo === codigo);
        if (index > -1) this.livros.splice(index, 1);
    }
}
