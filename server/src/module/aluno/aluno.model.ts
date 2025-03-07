import knex from '../../database/knex';

const getAll = async () => {
  return knex('aluno').select();
};

const store = async (params: { nome: string, cpf: number }) => {
  return knex('aluno').insert(params);
};

export default {
  getAll,
  store
}