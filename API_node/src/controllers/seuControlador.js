import Usuario from '../models/usuario.js';
import { findByIdOr404 } from '../utils/helpers.js';

async function listarUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    console.error('Erro ao listar usuários', err);
    res.status(500).json({ erro: 'Erro ao listar usuários' });
  }
};

async function criarUsuario(req, res) {
  const { nome, email, telefone, senha } = req.body;
  try {
    // Validação básica (opcional, mas recomendado)
    if (!nome || !email || !telefone || !senha) {
      return res.status(400).json({ erro: 'Nome, email, telefone e senha são obrigatórios.' });
    }


    const novoUsuario = await Usuario.create({
      nome,
      email,
      telefone,
      senha,
    });

    res.status(201).json({ mensagem: 'Usuário criado com sucesso!', usuario: novoUsuario });
  } catch (err) {

    throw err;
    }
}

async function atualizarUsuario(req, res) {
  const { id } = req.params;
  const { nome, email, telefone, senha } = req.body;

  try {

    const usuario = await findByIdOr404(Usuario, id, res, 'Usuário');
    if (!usuario) {
      return;
    }

    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;
    if (telefone) usuario.telefone = telefone;
    if (senha) usuario.senha = senha;

    await usuario.save();

    res.json({ mensagem: 'Usuário atualizado com sucesso!', usuario });

  } catch (err) {

   throw err;
  }
}

async function deletarUsuario(req, res) {
  const { id } = req.params;

  try {

    const usuario = await findByIdOr404(Usuario, id, res, 'Usuário');
    if (!usuario) {
      return;
    }

    await usuario.destroy();
    res.status(204).json({ mensagem: 'Usuário "deletado" com sucesso (soft delete)!', usuario });

  } catch (err) {
    throw err;

     
  }
}

async function restaurarUsuario(req, res) {
  const { id } = req.params;

  try {

    const usuario = await Usuario.findByPk(id, { paranoid: false });

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado para restauração.' });
    }
    if (usuario.deletedAt === null) {
      return res.status(400).json({ mensagem: 'Usuário já está ativo.' });
    }

    await usuario.restore();

    res.status(200).json({ mensagem: 'Usuário restaurado com sucesso!', usuario });

  } catch (err) {
    throw err;
  }
}

async function listarUsuariosComDeletados(req, res) {
  try {
    const usuarios = await Usuario.findAll({
      paranoid: false
    });
    res.json(usuarios);
  } catch (err) {
    throw err;
  }
}

async function buscarUsuarioComDeDeletadoPorId(req, res) {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id, {
      paranoid: false
    });

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário (incluindo deletados) não encontrado.' });
    }
    res.json(usuario);
  } catch (err) {
    throw err;
  }
}


export {
  listarUsuarios,
  criarUsuario,
  listarUsuariosComDeletados,
  atualizarUsuario,
  deletarUsuario,
  restaurarUsuario,
  buscarUsuarioComDeDeletadoPorId,
};
