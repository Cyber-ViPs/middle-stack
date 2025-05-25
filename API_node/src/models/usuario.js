import { DataTypes }  from 'sequelize';
import sequelize from '../config/database.js';
const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
    telefone: {
    type: DataTypes.STRING,
    allowNull: true,
    
},
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  

  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },

}, {

  paranoid: true,
   deletedAt: 'deletedAt',
  tableName: 'usuarios',
  timestamps: true,
});

Usuario.beforeSave(async (usuario, options) => {
  if (usuario.telefone) {
    let numeroPuro = usuario.telefone.replace(/\D/g, '');


    if (numeroPuro.length !== 10 && numeroPuro.length !== 11) {

      throw new Error('O telefone deve conter 10 ou 11 dígitos numéricos.');
    }


    if (numeroPuro.length === 10) {
      usuario.telefone = `(${numeroPuro.substring(0, 2)}) ${numeroPuro.substring(2, 6)}-${numeroPuro.substring(6, 10)}`;
    } else if (numeroPuro.length === 11) {
      usuario.telefone = `(${numeroPuro.substring(0, 2)}) ${numeroPuro.substring(2, 7)}-${numeroPuro.substring(7, 11)}`;
    }
  }
});

export default Usuario;
