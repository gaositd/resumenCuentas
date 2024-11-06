const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("allgastos OK GET");
  return;
});

router.get('/:id', (req, res, next) => {
  res.send("gastos por ID OK GET");
  return;
});

router.post('/newGOperativo', (req, res, next) => {
  res.send('New Opertive (body method)');
  return;
});

router.put('/:id', (req, res, next) => {
  res.send("gastos OK PUT");
  return;
});

router.patch('/:id', (req, res, next) => {
  res.send("gastos OK PATCH");
  return;
});

router.delete('/:id', (req, res, next) => {
  res.send("gasto OK DELETE");
  return;
});

module.exports = router;