

import { Sequelize } from 'sequelize';// Importa o Sequelize
import User from '../app/models/User.js'; // Importa o modelo de usuário
import databaseConfig from '../config/database.cjs';// Importa a configuração do banco de dados


const models = [User]; // Cria um array com os modelos de usuário
class Database {
    constructor() {
        this.init();
    }
    init(){
        this.connection = new Sequelize(databaseConfig); // Cria uma nova instância do Sequelize com a configuração do banco de dados
        models.map((model) => model.init(this.connection)); // Inicializa cada modelo com a conexão do banco de dados
    }
}

export default new Database(); // Exporta uma nova instância da classe Database para ser usada em outros arquivos