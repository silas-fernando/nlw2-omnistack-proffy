import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  const users = [
    { name: 'Diego', age: 25 },
    { name: 'Vini', age: 21 },
  ];
  
  return response.json(users);
});

// localhost:3333
app.listen(3333);