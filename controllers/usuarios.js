import { response } from 'express';

const usuariosGet = (req, res = response) => {
  const { q, nombre = 'Sin nombre', apikey } = req.query;

  res.json({
    msg: 'API get controlador',
    q,
    nombre,
    apikey,
  });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;

  res.json({
    msg: 'API put controlador',
    id,
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: 'API post controlador',
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: 'API delete controlador',
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    msg: 'API patch',
  });
};

export {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
