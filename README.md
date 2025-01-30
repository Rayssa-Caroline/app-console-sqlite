# App Console SQLite

Este projeto é uma aplicação de console desenvolvida em Node.js utilizando SQLite para a gestão de livros. A aplicação permite realizar operações básicas, como listar livros, buscar por ID, cadastrar novos livros, 
atualizar e deletar registros no banco de dados SQLite.

## Recursos Escolhidos

O recurso principal deste projeto é a integração com o banco de dados SQLite. O SQLite foi escolhido devido à sua simplicidade e leveza, sendo uma excelente opção para aplicações que não necessitam de um sistema de gerenciamento de
 banco de dados complexo. A aplicação permite interagir com esse banco de forma simples através de comandos no terminal.

## Passo a Passo de Instalação e Execução

1. **Clonar o repositório**

   Primeiro, clone o repositório para a sua máquina local:

   ```bash
   git clone https://github.com/Rayssa-Caroline/app-console-sqlite.git


Instalar as dependências

2. **Após clonar o repositório, navegue até o diretório do projeto e instale as dependências utilizando o npm:**

cd app-console-sqlite
npm install

3. **Executar a aplicação**

Para rodar a aplicação, basta usar o seguinte comando:

node index.js

A aplicação irá solicitar algumas informações no terminal, como o seu nome, e exibirá o menu de opções para interagir com o banco de dados SQLite.



*EXEMPLO DE USO*

Listar Livros
Após executar a aplicação, selecione a opção 1 para listar os livros cadastrados no banco de dados. A aplicação exibirá todos os livros cadastrados com informações como título, autor e ano de publicação.

Buscar Livro por ID
Selecione a opção 2 e informe o ID do livro que deseja buscar. A aplicação retornará as informações do livro correspondente.

Cadastrar Novo Livro
Para cadastrar um novo livro, selecione a opção 3. Você será solicitado a fornecer o título, autor e ano de publicação do livro. Após inserir as informações, o livro será adicionado ao banco de dados e o ID gerado será exibido.

Atualizar Livro
Se desejar atualizar as informações de um livro, selecione a opção 4. Você precisará fornecer o ID do livro a ser atualizado e os novos dados (título, autor, ano de publicação).

Deletar Livro
Para deletar um livro, selecione a opção 5. Informe o ID do livro a ser excluído e o livro será removido do banco de dados.

Sair
Para sair da aplicação, basta selecionar a opção 6.




