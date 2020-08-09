import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP:
// GET: Buscar ou listar uma informação.
// POST: Criar alguma nova informação.
// PUT: Atualizar uma informação existente.
// DELETE: Deletar uma informação existente.

// Corpo (Request Body) Dados para criação ou atualização de um registro.
// Route Params: Identifica qual recurso deverá ser atualizado ou deletado.
// Query Params: Paginação, filtros, ordenação, etc.

// localhost:3333
app.listen(3333);