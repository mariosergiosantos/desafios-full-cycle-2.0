let app = require('express')();

app.get('/', (req, res) => {
  res.send('Maratona Full Cycle 2.0');
});

app.listen(3000, () => {
  console.log('Aplicação - Desafio Maratona Full Cycle 2.0');
});
