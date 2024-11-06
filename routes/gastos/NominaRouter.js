const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("all nomina OK GET");
  return;
});

router.get('/:id', (req, res, next) => {
  res.send(" nomina por ID OK GET");
  return;
});

router.post('/newGNomina', (req, res, next) => {
  res.send('New Pay Salary (body method)');
  return;
});

router.put('/:id', (req, res, next) => {
  res.send(" nomina OK PUT");
  return;
});

router.patch('/:id', (req, res, next) => {
  res.send(" nomina OK PATCH");
  return;
});

router.delete('/:id', (req, res, next) => {
  res.send(" nomina OK DELETE");
  return;
});

module.exports = router;