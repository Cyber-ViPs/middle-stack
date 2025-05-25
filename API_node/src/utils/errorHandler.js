function handleSequelizeError(err, res) {
  if (err.name === 'SequelizeUniqueConstraintError') {

    const field = err.errors[0]?.path;
    let errorMessage = 'Dados duplicados.';
    if (field === 'email') {
      errorMessage = 'Este e-mail já está cadastrado.';
    } else if (field === 'telefone') {
      errorMessage = 'Este telefone já está cadastrado.';
    }

      else if (field === 'placa') {
      errorMessage = 'Esta placa já está cadastrada para outro veículo.';
    } else if (field === 'chassi') {
      errorMessage = 'Este chassi já está cadastrado para outro veículo.';
    }

    return res.status(409).json({ erro: errorMessage });
  }
  
  if (err.name === 'SequelizeValidationError') {

    const errorMessages = err.errors.map(error => {
        let message = `O campo '${error.path}' possui um valor inválido.`;


     if (error.path === 'email' && error.validatorKey === 'isEmail') {
            message = 'O e-mail fornecido não é válido.';
        } else if (error.path === 'telefone') {
            message = 'O formato do telefone fornecido não é válido.';
            
        } else if (error.path === 'placa') {
            message = 'O formato da placa não é válido. Use o padrão (Ex: ABC1B34).';
        } else if (error.path === 'chassi') {
            message = 'O formato do chassi não é válido. (Ex: 17 caracteres alfanuméricos).';
        }

        return message;
      });


    return res.status(400).json({ erro: errorMessage });
  }

  console.error('Erro interno inesperado:', err);
  return res.status(500).json({ erro: 'Erro interno do servidor.' });
}

export { handleSequelizeError };
