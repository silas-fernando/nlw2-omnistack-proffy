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

app.get('/users', (request, response) => {
  console.log(request.query);

  const users = [
    { name: 'Diego', age: 25 },
    { name: 'Vini', age: 21 },
    { name: 'Berranteiro', age: 300 },
  ];
  
  return response.json(users);
});

// localhost:3333
app.listen(3333);