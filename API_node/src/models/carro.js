import { DataTypes }  from 'sequelize';
import sequelize from '../config/database.js'; /
const Carro = sequelize.define('Carro', {
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cor: {
    type: DataTypes.STRING,
    allowNull: false,
  },


  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
    is: /^[A-Z]{3}\d[A-Z]\d{2}$/
  }
},

  chassi: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
    is: /^[A-HJ-NPR-Z0-9]{17}$/i
  }
}

});

export default Carro;
