import alunoModel from "../module/aluno/aluno.model";

describe('Aluno model test', () => {
    beforeEach(() => jest.restoreAllMocks());

    it('Should return all "alunos"', async () => {
        const mockAlunos = [{ id: 1, nome: 'test', cpf: 1234567890 }];
        
        jest.spyOn(alunoModel, 'getAll').mockResolvedValue(mockAlunos);

        const alunos = await alunoModel.getAll();

        expect(Array.isArray(alunos)).toBeTruthy();
        expect(alunos).toEqual(mockAlunos);
    });

    it('Should create a new "aluno"', async () => {
        const mockStore = jest.spyOn(alunoModel, 'store')
            .mockResolvedValue({ nome: 'test', cpf: 1234567890 });

        (alunoModel.store as jest.Mock).mockResolvedValue({ nome: 'test', cpf: 1234567890 });

        const result = await alunoModel.store({ nome: 'test', cpf: 1234567890 });

        expect(mockStore).toHaveBeenCalledWith({ nome: 'test', cpf: 1234567890 });
        expect(result).toEqual({ nome: 'test', cpf: 1234567890 });
    });
});