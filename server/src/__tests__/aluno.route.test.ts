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
        const mockAlunos = [{ id: 1, nome: 'test', cpf: 1234567890 }];
        
        jest.spyOn(alunoModel, 'getAll').mockResolvedValue(mockAlunos);

        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body.data).toEqual(mockAlunos);
    });

    it('Should create a new "aluno"', async () => {
        jest.spyOn(alunoModel, 'store').mockResolvedValue([1]);

        let response = await request(app)
            .post('/')
            .send({ nome: 'test', cpf: 1234567890 });

        expect(response.status).toBe(201);
    });

    it('Should reject duplicated data', async () => {
        jest.spyOn(alunoModel, 'store').mockRejectedValue({ code: 'ER_DUP_ENTRY' });

        const response = await request(app)
            .post('/')
            .send({ nome: 'test', cpf: 1234567890 });

        expect(response.status).toBe(409);
    });
});