const sqlite3 = require('sqlite3').verbose();  
const readlineSync = require('readline-sync');  

const nome = readlineSync.question('Qual o seu nome? ');
console.log(`Olá, ${nome}!`); 



const db = new sqlite3.Database('./meubanco.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error('Opa! Erro ao conectar ao banco de dados: :(', err.message);
    } else {
        console.log('Eba! Conectado ao banco de dados SQLite com sucesso :)');
    }
});


db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS livros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            autor TEXT NOT NULL,
            ano INTEGER NOT NULL
        );
    `, (err) => {
        if (err) {
            console.error('Erro ao criar a tabela:', err.message);
        } else {
            console.log('Tabela "livros" criada ou já existe.');
        }
    });
});


function listarRecursos() {
    db.all("SELECT * FROM livros", [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(`${row.id} - ${row.titulo} | ${row.autor} | ${row.ano}`);
        });
    });
}


function buscarPorId() {
    const id = readlineSync.questionInt("Informe o ID do livro: ");
    
    db.get("SELECT * FROM livros WHERE id = ?", [id], (err, row) => {
        if (err) {
            throw err;
        }
        if (row) {
            console.log(`ID: ${row.id}\nTítulo: ${row.titulo}\nAutor: ${row.autor}\nAno: ${row.ano}`);
        } else {
            console.log("Livro não encontrado.");
        }
    });
}


function cadastrarRecurso() {
    const titulo = readlineSync.question("Informe o título do livro: ");
    let autor = readlineSync.question("Informe o autor do livro: ");
    const autorLivro = readlineSync.question("Informe o autor do livro: ");
    const ano = readlineSync.questionInt("Informe o ano de publicação: ");
    
    const stmt = db.prepare("INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)");
    stmt.run(titulo, autor, ano, function(err) {
        if (err) {
            console.error("Erro ao cadastrar:", err.message);
        } else {
            console.log(`Novo livro cadastrado com ID: ${this.lastID}`);
        }
    });
    stmt.finalize();
}


function atualizarRecurso() {
    const id = readlineSync.questionInt("Informe o ID do livro a ser atualizado: ");
    const novoTitulo = readlineSync.question("Informe o novo título do livro: ");
    const novoAutor = readlineSync.question("Informe o novo autor do livro: ");
    const novoAno = readlineSync.questionInt("Informe o novo ano de publicação: ");
    
    const stmt = db.prepare("UPDATE livros SET titulo = ?, autor = ?, ano = ? WHERE id = ?");
    stmt.run(novoTitulo, novoAutor, novoAno, id, (err) => {
        if (err) {
            console.error("Erro ao atualizar:", err.message);
        } else {
            console.log("Livro atualizado com sucesso!");
        }
    });
    stmt.finalize();
}

function deletarRecurso() {
    const id = readlineSync.questionInt("Informe o ID do livro a ser deletado: ");
    
    const stmt = db.prepare("DELETE FROM livros WHERE id = ?");
    stmt.run(id, (err) => {
        if (err) {
            console.error("Erro ao deletar:", err.message);
        } else {
            console.log("Livro deletado com sucesso!");
        }
    });
    stmt.finalize();
}


function menu() {
    console.log("Escolha uma opção:");
    console.log("1 - Listar Livros");
    console.log("2 - Buscar Livro por ID");
    console.log("3 - Cadastrar Novo Livro");
    console.log("4 - Atualizar Livro");
    console.log("5 - Deletar Livro");
    console.log("6 - Sair");
    
    const opcao = readlineSync.questionInt("Opção: ");
    
    switch(opcao) {
        case 1:
            listarRecursos();
            break;
        case 2:
            buscarPorId();
            break;
        case 3:
            cadastrarRecurso();
            break;
        case 4:
            atualizarRecurso();
            break;
        case 5:
            deletarRecurso();
            break;
        case 6:
            console.log("Saindo...");
            db.close();  
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}


menu();