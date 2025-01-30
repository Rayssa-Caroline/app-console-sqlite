const sqlite =require('sqlite3').verbose();

const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.error('Opa! Não foi possivel conectar ao banco de dados :(', err.message);
    } else {
        console.log('Eba!Conectado ao banco de dados SQLite.');
    }
    
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS livros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            autor TEXT NOT NULL,
            ano_publicacao INTEGER,
            genero TEXT,
            data_cadastro TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('Erro ao criar a tabela:', err.message);
        } else {
            console.log('Tabela criada ou já existente.');
        }
    });
});

module.exports = db;