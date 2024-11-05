const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
  res.send("Login OK GET");
  return;
});

router.put('/login', (req, res, next) => {
  res.send("Login OK PUT");
  return;
});

router.patch('/login', (req, res, next) => {
  res.send("Login OK PATCH");
  return;
});

router.delete('/login', (req, res, next) => {
  res.send("Login OK DELETE");
  return;
});

module.exports = router;