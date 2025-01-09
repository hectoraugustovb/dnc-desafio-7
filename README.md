# DNC Desafio 7

## **Endpoints**

### **Alunos**

- **GET /alunos**
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

- **POST /alunos**
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
   
5. Teste a aplicação:

   ```
   npm test
   ```
6. Inicie a aplicação:

   ```
   npm start
   ```

A aplicação pode ser testada a partir de alguma aplicação para efetuar as requisições, como Insomnia ou Postman.


RID: 166289
