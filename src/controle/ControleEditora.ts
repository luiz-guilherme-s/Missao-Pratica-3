import { Editora } from "../modelo/Editora";

export class ControleEditora {
    private editoras: Array<Editora> = [
        { codEditora: 1, nome: "Editora A" },
        { codEditora: 2, nome: "Editora B" },
        { codEditora: 3, nome: "Editora C" },
    ];

    // Método para obter todas as editoras
    getEditoras(): Array<Editora> {
        return this.editoras;
    }

    // Método para obter o nome da editora pelo código
    getNomeEditora(codEditora: number): string {
        const editora = this.editoras.find(e => e.codEditora === codEditora);
        return editora ? editora.nome : "Editora não encontrada";
    }
}
