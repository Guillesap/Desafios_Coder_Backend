
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'))


const routerProductos = require('./routes/productosRouter')
app.use('/api', routerProductos)


const puerto = process.env.PORT || 8080;

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('Error en el servidor:', error);
});