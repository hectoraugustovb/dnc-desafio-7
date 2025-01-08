import alunoModel from "../module/aluno/aluno.model";

describe('Aluno model test', () => {
    it('Should return all "alunos"', async () => {
        const aluno = await alunoModel.getAll();

        expect(Array.isArray(aluno)).toBeTruthy();
    });

    it('Should create a new "aluno"', async () => {
        const mockStore = jest.spyOn(alunoModel, 'store')
            .mockResolvedValue({ nome: 'test', cpf: 1234567890 });

        (alunoModel.store as jest.Mock).mockResolvedValue({ nome: 'test', cpf: 1234567890 });

        const result = await alunoModel.store({ nome: 'test', cpf: 1234567890 });

        expect(mockStore).toHaveBeenCalledWith({ nome: 'test', cpf: 1234567890 });
        expect(result).toEqual({ nome: 'test', cpf: 1234567890 });

        mockStore.mockRestore();
    });
});