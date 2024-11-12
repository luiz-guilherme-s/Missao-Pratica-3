Catálogo de Livros 📚

Este é um projeto de catálogo de livros desenvolvido com React, que permite o cadastro, visualização e exclusão de livros. A aplicação utiliza json-server para simular uma API REST para gerenciar os dados dos livros.


Funcionalidades 🚀
Listagem de Livros: Exibe todos os livros cadastrados em um formato de tabela, incluindo título, resumo, editora e autores.
Cadastro de Novo Livro: Formulário para adicionar um novo livro, preenchendo informações como título, resumo, editora e autores.
Exclusão de Livros: Permite excluir um livro do catálogo diretamente pela interface.
Simulação de API: Utiliza json-server para servir o db.json como um banco de dados fake, facilitando o desenvolvimento local.
Tecnologias Utilizadas 🛠️

React: Biblioteca principal para criação da interface.
Bootstrap: Framework de CSS para estilização rápida e responsiva.
json-server: Simulação de uma API REST para o CRUD dos livros.

Como Executar o Projeto ⚙️
Instalar Dependências:

bash
Copiar código
npm install
Iniciar o json-server: Em um terminal separado, rode o comando abaixo para iniciar o servidor JSON, que estará escutando na porta 3001.

bash
Copiar código
npx json-server --watch db.json --port 3001
Iniciar a Aplicação React: Em outro terminal, inicie a aplicação React.

bash
Copiar código
npm start
Acessar a Aplicação: Abra o navegador e vá até [http://localhost:3000](

) para visualizar a aplicação.


Estrutura do Projeto 📁
src/ - Contém os arquivos principais do projeto em React.
App.tsx - Componente principal com as rotas para a listagem e o cadastro de livros.
components/ - Componentes reutilizáveis, incluindo o cabeçalho (navbar), tabela de livros e formulário de cadastro.
styles/ - Arquivos de estilos CSS para customização do visual.
Pré-requisitos 🔧

Node.js e npm instalados para rodar a aplicação e gerenciar pacotes.
json-server instalado (pode ser executado com o comando npx conforme explicado).
Próximos Passos ✨
Este é um projeto básico, e alguns aprimoramentos futuros podem incluir:

Implementação de uma API real para persistência dos dados.
Adição de funcionalidade de busca e filtros para o catálogo de livros.
Melhoria no layout e na responsividade com customizações adicionais no CSS.
