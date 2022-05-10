const express = require('express');
// importar modulos
const Productos = require('../api/productos');
const validacionAdmin = require ('../validation/validacionAdmin')

//operaciones con Knex
const { crearTablaKnex } = require('../knex/crearTabla')
const { leerKnex } = require('../knex/leerKnex')
const { leerKnexPorID } = require('../knex/leerKnexPorID')
const { guardarKnex } = require('../knex/guardarKnex')
const { borrarKnex } = require('../knex/borrarKnex')

//seteo el router
const routerProductos = express.Router();

//Creo tabla en base de datos 'productos' solo la primera vez
// crearTablaKnex()


//GET listado 
routerProductos.get('/productos/listar',(req, res) => {

    leerKnex()
    
    res.json(Productos.listar())
})
//GET producto por ID 
routerProductos.get('/productos/listar/:id',(req, res) => {

    leerKnexPorID(req.params)

    let { id } = req.params;
    res.json(Productos.buscarPorId(id));
})
//POST de un producto nuevo sin ID
routerProductos.post('/productos/agregar', validacionAdmin ,(req,res) => {

  guardarKnex(req.body)

  let prodGuardado = Productos.guardar(req.body)

  res.send("Producto guardado")
  res.send(prodGuardado)
})
//PUT de un producto nuevo con ID
routerProductos.put('/productos/actualizar/:id', validacionAdmin ,(req,res) => {
  let { id } = req.params
  let producto = req.body
  res.send("Producto actualizado")
  res.json(Productos.actualizar(id, producto));
})
//DELETE de un producto con ID
routerProductos.delete('/productos/borrar/:id', validacionAdmin ,(req,res) => {

  borrarKnex(req.params)

  let { id } = req.params;
  res.json(Productos.borrar(id));
})

module.exports = routerProductos;