import { Router } from 'express';
import { listarUsuarios, criarUsuario, atualizarUsuario, deletarUsuario, restaurarUsuario, listarUsuariosComDeletados, buscarUsuarioComDeDeletadoPorId } from '../controllers/seuControlador.js';

const router = Router();
router.get('/usuarios/all', listarUsuariosComDeletados);
router.put('/usuarios/:id/restore', restaurarUsuario);
router.get('/usuarios', listarUsuarios);
router.post('/usuarios', criarUsuario);
router.put('/usuarios/:id/update', atualizarUsuario);
router.delete('/usuarios/:id/delete', deletarUsuario);
router.get('/usuarios/:id', buscarUsuarioComDeDeletadoPorId);
export default router;














