
import { Router} from 'express'; // Importa o Router do Express
import UserController from './app/controllers/UserController.js'; // Importa o controlador de usuário

const routes = new Router();// Cria uma nova instância do Router

/*
POST -> cria um novo usuário
GET -> lista todos os usuários
PUT/PATCH -> atualiza um usuário
DELETE -> deleta um usuário
*/

routes.post('/users', UserController.store); // Define a rota /users para o método store do controlador de usuário

export default routes; // Exporta as rotas para serem usadas em outros arquivosS

