import express from 'express';

const app = express();
app.use(express.json());

const port = process.env.PORT || 3333;

const users = [
  {name: 'Lucas', age: 27},
  {name: 'Diego', age: 25}
]

app.post('/', (request, response) => {
  return response.json({message: "Hello World"});
});

app.listen(port, () => {
  console.log('Listening in port ' + port);
})