import express from 'express'; // Importa o módulo Express
import routes from './routes.js'; // Importa as rotas do arquivo routes.js

const app = express(); // Cria uma instância do Express


app.use(express.json()); // Adiciona o middleware para analisar o corpo das requisições como JSON
app.use(routes); // Adiciona as rotas ao aplicativo Express



export default app; // Exporta a instância do Express para ser usada em outros arquivos
