import app from './app.js'; // Importa a instância do Express do arquivo app.js
import './database/index.js'; // Importa o arquivo de configuração do banco de dados, que inicializa a conexão com o banco de dados e os modelos

app.listen(3001, () => console.log('Aplication is running on port 3001')); // Inicia o servidor na porta 3001 e exibe uma mensagem no console
