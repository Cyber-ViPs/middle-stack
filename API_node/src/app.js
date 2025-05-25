import express from 'express';
import suaRota from './routes/suaRota.js';
import sequelize from './config/database.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';


const app = express();
app.use(express.json());
app.use('/api', suaRota);
app.use(errorHandlerMiddleware);

app.get('/', (req, res) => {
  res.send('Bem-vindo à sua API!');
});


async function testDbConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
}

testDbConnection();

export default app;
