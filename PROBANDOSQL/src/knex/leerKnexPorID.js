const { options } = require ('../options/mariaDB.js')
const knex = require('knex')(options)


const leerKnexPorID = (id) => {
    let idNumero = Number(id.id)

    knex.from('productos').select("*").where('id', idNumero)
    .then((productos) => {
        for (producto of productos) {
            console.log (`Producto ${producto.nombre} Precio: ${producto.precio}`)
        }
    })
    .catch((err) => { console.log('Error: '+ err); throw err })
    // .finally(() => {
    // knex.destroy();
    // })

} 

module.exports = { leerKnexPorID }
