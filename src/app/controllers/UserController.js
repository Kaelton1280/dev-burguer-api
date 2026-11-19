/*
 store -> Cria um novo usuário
 index -> Lista todos os usuários
 show -> Mostra um usuário específico
 update -> Atualiza um usuário
 delete -> Deleta um usuário


*/

import { v4 } from 'uuid'; // Importa a função v4 do pacote uuid para gerar IDs únicos
import User from '../models/User.js';

class UserController {
  async store(request, response) {
    // Define o método store, que é chamado quando uma requisição POST é feita para a rota de criação de usuário. Ele recebe como parâmetros o objeto request, que contém os dados da requisição, e o objeto response, que é usado para enviar a resposta ao cliente.
    const { name, email, password_hash, admin } = request.body; // Desestrutura os campos name, email, password_hash e admin do corpo da requisição. Esses campos são esperados no corpo da requisição para criar um novo usuário.

    const existingUser = await User.findOne({ // Usa o método findOne do modelo User para verificar se já existe um usuário com o mesmo email no banco de dados. O método findOne retorna o primeiro registro que corresponde à condição especificada.
      where: {
        email: email,
      },
    });

    if (existingUser) { // Se já existir um usuário com o mesmo email, retorna uma resposta com status 400 (Bad Request) e uma mensagem de erro em formato JSON.
      return response
        .status(400).json({ error: 'Este email ja foi cadastrado' });
    }

    const user = await User.create({
      // Cria um novo registro na tabela de usuários usando o modelo User. O método create é fornecido pelo Sequelize e insere um novo registro no banco de dados com os campos especificados.
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    });

    return response.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
    }); // Retorna uma resposta com status 201 (Created) e o objeto User em formato JSON
  }
}

export default new UserController();
