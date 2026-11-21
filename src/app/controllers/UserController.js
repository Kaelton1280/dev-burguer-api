/*
 store -> Cria um novo usuário
 index -> Lista todos os usuários
 show -> Mostra um usuário específico
 update -> Atualiza um usuário
 delete -> Deleta um usuário


*/

import { v4 } from 'uuid'; // Importa a função v4 do pacote uuid para gerar IDs únicos
import * as Yup from 'yup'; // Importa o pacote Yup para validação de dados
import User from '../models/User.js';

class UserController {
  async store(request, response) {
    const schema = Yup.object().shape({
      // Define o schema de validação usando o Yup. O schema define os campos esperados no corpo da requisição e suas regras de validação.
      name: Yup.string().required(), // Define o campo name como string obrigatória
      email: Yup.string().email().required(), // Define o campo email como string obrigatória e valida se é um email válido
      password_hash: Yup.string().min(6).required(), // Define o campo password_hash como string obrigatória com no mínimo 6 caracteres
      admin: Yup.boolean(), // Define o campo admin como booleano, e nao é obrigatório
    });

    try {
      await schema.validate(request.body, { abortEarly: false, strict: true }); // Valida o corpo da requisição usando o schema definido acima. O parâmetro abortEarly: false faz com que todas as validações sejam executadas, mesmo que uma falhe.
    } catch (err) {
      return response.status(400).json({ error: err.errors }); // Retorna uma resposta com status 400 (Bad Request) e a mensagem de erro em formato JSON
    }
    // Define o método store, que é chamado quando uma requisição POST é feita para a rota de criação de usuário. Ele recebe como parâmetros o objeto request, que contém os dados da requisição, e o objeto response, que é usado para enviar a resposta ao cliente.
    const { name, email, password_hash, admin } = request.body; // Desestrutura os campos name, email, password_hash e admin do corpo da requisição. Esses campos são esperados no corpo da requisição para criar um novo usuário.

    const existingUser = await User.findOne({
      // Usa o método findOne do modelo User para verificar se já existe um usuário com o mesmo email no banco de dados. O método findOne retorna o primeiro registro que corresponde à condição especificada.
      where: {
        email: email,
      },
    });

    if (existingUser) {
      // Se já existir um usuário com o mesmo email, retorna uma resposta com status 400 (Bad Request) e uma mensagem de erro em formato JSON.
      return response
        .status(400)
        .json({ error: 'This email is already registered' });
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
