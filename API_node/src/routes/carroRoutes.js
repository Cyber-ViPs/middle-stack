import { Router } from 'express';
import { criarCarro, deletarCarro } from '../controllers/carroController.js'; 

const router = Router();

router.post('/carros', criarCarro);
router.delete('/carros/:id', deletarCarro);

export default router;
