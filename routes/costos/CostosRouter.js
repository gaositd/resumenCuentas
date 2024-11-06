const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("all costos OK GET");
  return;
});

router.get('/:id', (req, res, next) => {
  res.send(" costos por ID OK GET");
  return;
});

router.post('/newGCosto', (req, res, next) => {
  res.send('New expend Cost (body method)');
  return;
});

router.put('/:id', (req, res, next) => {
  res.send(" costos OK PUT");
  return;
});

router.patch('/:id', (req, res, next) => {
  res.send(" costos OK PATCH");
  return;
});

router.delete('/:id', (req, res, next) => {
  res.send(" costos OK DELETE");
  return;
});

module.exports = router;