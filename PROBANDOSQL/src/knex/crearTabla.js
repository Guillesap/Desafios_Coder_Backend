const { options } = require ('../options/mariaDB.js')
const knex = require('knex')(options)

/*Crear tabla productos */

const crearTablaKnex = () => {
    knex.schema.createTable('productos', function (table) {
        table.increments('id').primary();;
        table.integer('codigo');
        table.string('nombre');
        table.string('descripcion');
        table.integer('stock');
        table.string('timestamp');
        table.integer('precio');
        table.string('foto');
      }).then(function () {
        return console.log('Tabla creada');
      }).catch(function (err) {
        return console.log(err);
      });
      // .finally(()=> knex.destroy());
}

module.exports = { crearTablaKnex }