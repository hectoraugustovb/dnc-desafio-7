# DNC Desafio 7

## **Técnologias**

### **Linguagens**
- [JavaScript(NodeJS)](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org)
### **Bibliotecas**
- [Express.js](https://expressjs.com/)
- [Knex.js](https://knexjs.org)
- [Jest](https://jestjs.io/)


## **Endpoints**

### **Alunos**

- **GET /aluno**
  - Retorna todos os alunos cadastrados.
  - **Exemplo de resposta:**
    ```json
    {
    	"data": [
    		{
    			"id": 1,
    			"nome": "test1",
    			"cpf": 12345678901
    		},
    		{
    			"id": 2,
    			"nome": "test2",
    			"cpf": 12345678902
    		},
    		{
    			"id": 3,
    			"nome": "test3",
    			"cpf": 12345678903
    		}
    	]
    }
    ```

- **POST /aluno**
  - Cria um novo aluno.
  - **Parâmetros**:
    - `nome`, `cpf`:
  - **Exemplo de resposta:**
    - Código de Status: `201 Created`
      - Descrição: Aluno criado com sucesso.


## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/hectoraugustovb/dnc-desafio-7.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd ./dnc-desafio-7
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure o banco de dados:

   ```bash
   npm knex migrate:latest
   ```
   
5. Teste a aplicação (Opcional):

   ```
   npm test
   ```
6. Inicie a aplicação:

   ```
   npm start
   ```

A aplicação pode ser testada a partir de alguma aplicação para efetuar as requisições, como Insomnia ou Postman.


RID: 166289
