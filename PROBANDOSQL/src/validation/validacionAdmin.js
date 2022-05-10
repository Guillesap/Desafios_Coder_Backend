//middleware para admin
let admin = true

const validacionAdmin = (req, res, next) => {
  if (admin) {
    next()
  }else {
    res.send({ error : -2, descripcion: "ruta 'x' método 'y' no implementada"} )
  }
}

module.exports = validacionAdmin