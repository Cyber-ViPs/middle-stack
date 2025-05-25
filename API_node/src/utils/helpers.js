async function findByIdOr404(Model, id, res, resourceName = 'Recurso') {
  const resource = await Model.findByPk(id);

  if (!resource) {
    res.status(404).json({ mensagem: `${resourceName} não encontrado.` });
    return null;
  }

  return resource;
}

export { findByIdOr404 };
