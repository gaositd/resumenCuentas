const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', (req, res, next) => {
  res.send("Users by ID OK GET");
  return;
});

router.get('/ByName', (req, res, next) => {
  res.send("Users by OK GET");
  return;
});

router.get('/ByLastName', (req, res, next) => {
  res.send("proveedores por apellido OK GET");
  return;
});

router.post('/newUser', (req, res, next) => {
  res.send('New User (body method)');
  return;
});

router.put('/:id', (req, res, next) => {
  res.send("Users OK PUT");
  return;
});

router.patch('/:id', (req, res, next) => {
  res.send("Users OK PATCH");
  return;
});

router.delete('/:id', (req, res, next) => {
  res.send("users OK DELETE");
  return;
});

module.exports = router;
