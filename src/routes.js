
import { Router} from 'express'; // Importa o Router do Express
import { v4 } from 'uuid'; // Importa a função v4 do pacote uuid para gerar IDs únicos
import User from './app/models/User.js'; // Importa o modelo de usuário

const routes = new Router();// Cria uma nova instância do Router

routes.get('/', async (req, res) => {// Define uma rota GET para a raiz do servidor

        const user = {// Cria um usuario com os seguintes dados
            id: v4(), // Gera um ID único usando a função v4 do pacote uuid
            name: 'Odilon',
            email: 'odilon@example.com',
            password_hash: '123456',
            admin: false,
        }

    await User.create(user); // cria um novo registro de usuário no banco de dados usando o modelo User

    res.status(201).json(user); // Retorna uma resposta com status 201 (Created) e o objeto User em formato JSON

});

export default routes; // Exporta as rotas para serem usadas em outros arquivosS

