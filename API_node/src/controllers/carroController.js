
import Carro from '../models/carro.js';
import { findByIdOr404 } from '../utils/helpers.js';

async function atualizarCarro(req, res) {
  const { id } = req.params;
  const { marca, cor, placa, chassi } = req.body;

  try {
    const carro = await findByIdOr404(Carro, id, res, 'Carro');
    if (!carro) {
      return;
    }

    if (marca) carro.marca = marca;
    if (cor) carro.cor = cor;
    if (placa) carro.placa = placa;
    if (chassi) carro.chassi = chassi;

    await carro.save();

    res.json({ mensagem: 'Carro atualizado com sucesso!', carro });

  } catch (err) {
    throw err;
  }
}

async function deletarCarro(req, res) {
  const { id } = req.params;

  try {
    const carro = await findByIdOr404(Carro, id, res, 'Carro');
    if (!carro) {
      return;
    }

    await carro.destroy();

    res.status(204).send();

  } catch (err) {
    throw err;
  }
}

export {

  atualizarCarro,
  deletarCarro
};
