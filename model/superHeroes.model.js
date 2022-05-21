const conection = require("./intacia.BD/baseDeDatos");

function superHeroes() {
    const insert = "CREATE TABLE heroes (id int, name varchar, locaized_name varchar);"
        conection.query(insert, (err,res) => {
            if (err) {
                console.log("Ya existe la base de datos");
            } else {
                console.log("Se creo la tabla satifactoriamente");
            }
        })  
}

function getHeroes() {
    const query = "SELECT * FROM heroes"
    conection.query(query,(err,res) => {
        if (err) {
            console.log("Error al hacer la consulta");
        } else {
            return res
        }
    })
}

module.exports = {superHeroes, getHeroes}