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
            console.log(res);
            return res
            
        }
    })
}
function postHeroes(result) {
    const insert = `INSERT INTO heroes (id,name,localized_name)VALUES ${result.id},${result.name},${result.localized_name}`
    conection.query(query,(err,res) => {
        if (err) {
            console.log("Error al hacer la isercion de datos");
        } else {
            console.log(res);
            return res
            
        }
    })
}
function putHeroes() {
    const query = "SELECT * FROM heroes"
    conection.query(query,(err,res) => {
        if (err) {
            console.log("Error al hacer la consulta");
        } else {
            console.log(res);
            return res
            
        }
    })
}

function deleteHeroes() {
    const query = "SELECT * FROM heroes"
    conection.query(query,(err,res) => {
        if (err) {
            console.log("Error al hacer la consulta");
        } else {
            console.log(res);
            return res
            
        }
    })
}



module.exports = {superHeroes, getHeroes, postHeroes,putHeroes, deleteHeroes}
