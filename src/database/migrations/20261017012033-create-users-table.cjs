
// aqui são 2 metodos, um para criar a tabela e outro para deletar a tabela, caso seja necessario




'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { // metodo up é usado para criar a tabela no banco de dados
    
    await queryInterface.createTable('users', { 
      id: {
        primaryKey: true, // identificador unico da tabela
        allowNull: false, // não permite que o campo seja nulo
        type: Sequelize.UUID, // define o tipo do campo como UUID ( unico universalmente identificador)
        defaultValue: Sequelize.UUIDV4 // define o valor padrão do campo como UUIDV4 ( unico universalmente identificador)
      },
      name: {
        type: Sequelize.STRING, // define o tipo do campo como STRING
        allowNull: false // nao permite que o campo seja nulo, esteja vazio
      },
      email: {
        type: Sequelize.STRING, // define o tipo do campo como STRING
        allowNull: false, // nao permite que crie conta sem email, ou seja, o campo não pode ser nulo
        unique: true // define que o campo deve ser unico, ou seja, não pode haver dois usuarios com o mesmo email
      },
      password_hash: {
        type: Sequelize.STRING, // define o tipo do campo como STRING
        allowNull: false // nao permite que o usuario seja criado sem senha, ou seja, o campo não pode ser nulo
      },
      admin: {
        type: Sequelize.BOOLEAN, // define o tipo do campo como BOOLEAN ( verdadeiro ou falso)
        defaultValue: false // define o valor padrão do campo como falso, ou seja, o usuario não é admin por padrão
      },
      created_at: {
        type: Sequelize.DATE, // define o tipo do campo como DATE ( data e hora do momento da criação do usuario)
        allowNull: false // nao permite que o campo seja nulo
      },
      updated_at: {
        type: Sequelize.DATE, // define o tipo do campo como DATE ( data e hora do momento da atualização do usuario)
        allowNull: false // nao permite que o campo seja nulo
      }
    });

    
     
  },

  async down (queryInterface) { // metodo down é usado para deletar a tabela no banco de dados, ou descer como o proprio nome diz, caso seja necessario desfazer a criação da tabela
    
    await queryInterface.dropTable('users');
     
  }
};
