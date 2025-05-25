
import app from './src/app.js';
import sequelize from './src/config/database.js';
const PORT = process.env.PORT || 3000;
async function startServer() {
  try {

    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados ou iniciar o servidor:', error);
    process.exit(1);
  }
}

startServer();
