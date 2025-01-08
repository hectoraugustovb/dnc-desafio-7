import request from 'supertest';
import express from 'express';

import alunoRoutes from '../module/aluno/aluno.route';
import alunoModel from '../module/aluno/aluno.model';

const app = express();
app.use(express.json());
app.use(alunoRoutes);

describe('Aluno routes integration test', () => {
    beforeEach(() => jest.restoreAllMocks());

    it('Should return all "alunos"', async () => {
        const mockAlunos = [{ id: 1, name: 'test', cpf: 1234567890 }];
        
        jest.spyOn(alunoModel, 'getAll').mockResolvedValue(mockAlunos);

        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body.data).toEqual(mockAlunos);
    });

    it('Should create a new "aluno"', async () => {
        jest.spyOn(alunoModel, 'store').mockResolvedValue([1]);

        const response = await request(app)
            .post('/')
            .send({ name: 'test', cpf: 1234567890 });

        expect(response.status).toBe(201);
        expect(response.body.data).toEqual([1]);
    });
});