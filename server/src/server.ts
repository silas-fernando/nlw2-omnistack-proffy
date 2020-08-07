import express from 'express';

const app = express();

app.use(express.json());

// Métodos HTTP:
// GET: Buscar ou listar uma informação.
// POST: Criar alguma nova informação.
// PUT: Atualizar uma informação existente.
// DELETE: Deletar uma informação existente.

// Corpo (Request Body) Dados para criação ou atualização de um registro.
// Route Params: Identifica qual recurso deverá ser atualizado ou deletado.
// Query Params: Paginação, filtros, ordenação, etc.

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

// localhost:3333
app.listen(3333);