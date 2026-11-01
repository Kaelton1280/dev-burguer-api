// Vamos definir o modelo de usuário, que será usado para interagir com a tabela de usuários no banco de dados. O modelo define os campos e suas propriedades, como tipo de dado, se é obrigatório, se é único, entre outros.

import Sequelize, { Model } from 'sequelize'; // Importa o Sequelize e o Model, que é a classe base para todos os modelos do Sequelize. O Model fornece métodos para interagir com o banco de dados, como criar, atualizar, deletar e buscar registros.

class User extends Model {
  // Define a classe User que estende a classe Model do Sequelize

  static init(sequelize) { // Define o método init, que é chamado para inicializar o modelo. Ele recebe como parâmetro a instância do Sequelize, que é usada para conectar o modelo ao banco de dados.
    Model.init(
      {
        // Define os campos do modelo User
        name: Sequelize.STRING, // Define o campo name como string
        email: Sequelize.STRING, // Define o campo email como string
        password_hash: Sequelize.STRING, // Define o campo password_hash como string
        admin: Sequelize.BOOLEAN, // Define o campo admin como booleano
      },
      {
        sequelize, // Define o sequelize como o banco de dados usado pelo modelo User
        tableName: 'users', // Define o nome da tabela no banco de dados
      },
    );
  }
}

export default User; // Exporta o modelo User para ser usado em outros arquivos
