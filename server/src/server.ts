import express from 'express';

const app = express();
app.use(express.json());

const port = process.env.PORT || 3333;

const users = [
  {name: 'Lucas', age: 27},
  {name: 'Diego', age: 25}
]

app.get('/users', (request, response) => {
  return response.json(users);
});

app.listen(port, () => {
  console.log('Listening in port ' + port);
})