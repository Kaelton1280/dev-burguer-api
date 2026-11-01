// usaremos essa biblioteca para fazer  as configuração do sequelize

module.exports = { // usamos o module.exports por que o sequelize não suporta a sintaxe de import/export do ES6
    dialect: 'postgres', // define o banco de dados que estamos usando
    host: 'localhost', // define o host do banco de dados
    port: 5432, // define a porta do banco de dados
    username: 'admin', // define o usuário do banco de dados
    password: 'oxx1280', // define a senha do banco de dados
    database: 'dev-burguer-db', // define o nome do banco de dados
    define: {
        timestamps: true,// define que o sequelize vai criar automaticamente data de criação e data de atualização
        underscored: true,
        underscoredAll: true
    }
}
// exemplo: se eu inserir um usuario novo: nome, email, senha => data de criação e data de atualização serao criadas automaticamente