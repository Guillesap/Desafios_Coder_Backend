const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'willy',
        password: '',
        database: 'peliculas'
    },
}

module.exports = { options }



// /* SQL creación de tabla de productos en este caso películas */
// CREATE TABLE productos (
//     nombre varchar(255) NOT NULL,
//     descripcion varchar(255),
//     codigo int unsigned,
//     foto varchar(255),
//     precio int ,
//     stock int unsigned ,
//     id int NOT NULL AUTO_INCREMENT,
//     timestamp varchar(255),
//     PRIMARY KEY (id)
// );



