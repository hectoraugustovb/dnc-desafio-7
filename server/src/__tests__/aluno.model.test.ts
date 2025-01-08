import alunoModel from "../module/aluno/aluno.model";

describe('Aluno model test', () => {
    it('Should return all "alunos"', async () => {
        const aluno = await alunoModel.getAll();

        expect(Array.isArray(aluno)).toBeTruthy();
    });

    it('Should create a new "aluno"', async () => {
        const mockStore = jest.spyOn(alunoModel, 'store')
            .mockResolvedValue({ nome: 'test', cpf: 12345678900 });

        (alunoModel.store as jest.Mock).mockResolvedValue({ nome: 'test', cpf: 12345678900 });

        const result = await alunoModel.store({ nome: 'test', cpf: 12345678900 });

        expect(mockStore).toHaveBeenCalledWith({ nome: 'test', cpf: 12345678900 });
        expect(result).toEqual({ nome: 'test', cpf: 12345678900 });

        mockStore.mockRestore();
    });
});