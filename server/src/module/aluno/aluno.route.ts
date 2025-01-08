import { Router, Request, Response, NextFunction } from 'express';
import alunoModel from './aluno.model';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  alunoModel.getAll()
    .then(data => res.status(200).json({ data }))
    .catch(next);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.nome || !req.body.cpf)
    res.status(400).json({ error: 'Nome e CPF são obrigatórios' });

  else {
    alunoModel.store({ nome: req.body.nome, cpf: Number(req.body.cpf) })
      .then(data => res.status(201).json({ data }))
      .catch(error => {
        if (error.code === 'ER_DUP_ENTRY')
          return res.status(409).json({ error: 'Aluno já cadastrado com esse CPF' });
  
        next(error);
      });
  }
});

export default router;