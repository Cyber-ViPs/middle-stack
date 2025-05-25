import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
} catch (error) {
  console.error('Não foi possível conectar ao banco de dados:', error);
}

export default sequelize;
