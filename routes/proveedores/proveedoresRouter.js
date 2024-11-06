const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("allproveedores OK GET");
  return;
});

router.get('/:id', (req, res, next) => {
  res.send("proveedores por ID OK GET");
  return;
});

router.get('/ByName', (req, res, next) => {
  res.send("proveedores por nombre OK GET");
  return;
});

router.get('/ByLastName', (req, res, next) => {
  res.send("proveedores por apellido OK GET");
  return;
});

router.post('/newProveedor', (req, res, next) => {
  res.send('New User (body method) NOT USE');
  return;
});

router.put('/:id', (req, res, next) => {
  res.send("proveedores OK PUT");
  return;
});

router.patch('/:id', (req, res, next) => {
  res.send("proveedores OK PATCH");
  return;
});

router.delete('/:id', (req, res, next) => {
  res.send("proveedores OK DELETE");
  return;
});

module.exports = router;