import { Router, Request, Response, NextFunction } from 'express';
import alunoModel from './aluno.model';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  alunoModel.getAll()
    .then(data => res.status(200).json({ data }))
    .catch(error => {
      console.log(error);
      next();
    });
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  alunoModel.store(req.body)
    .then(data => res.status(201).json({ data }))
    .catch(next);
});

export default router;