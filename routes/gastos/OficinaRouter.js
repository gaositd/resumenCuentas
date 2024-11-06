const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("all oficina OK GET");
  return;
});

router.get('/:id', (req, res, next) => {
  res.send(" oficina por ID OK GET");
  return;
});

router.post('/newGOficina', (req, res, next) => {
  res.send('New Office (body method)');
  return;
});

router.put('/:id', (req, res, next) => {
  res.send(" oficina OK PUT");
  return;
});

router.patch('/:id', (req, res, next) => {
  res.send(" oficina OK PATCH");
  return;
});

router.delete('/:id', (req, res, next) => {
  res.send(" oficina OK DELETE");
  return;
});

module.exports = router;