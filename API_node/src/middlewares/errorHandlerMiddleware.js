import { handleSequelizeError } from '../utils/errorHandler.js';

function errorHandlerMiddleware(err, req, res, next) {

  const handled = handleSequelizeError(err, res);
  if (handled) {

    return;
  }
  console.error('Erro geral não capturado:', err);
  res.status(500).json({ erro: 'Erro interno do servidor.' });
}

export { errorHandlerMiddleware };
