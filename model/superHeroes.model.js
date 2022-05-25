const conection = require("./intacia.BD/baseDeDatos");

function superHeroes() {
    const insert = "CREATE TABLE heroes (id int, name varchar, locaized_name varchar);"
        conection.query(insert, (err,res) => {
            if (err) {
                console.log("Ya existe la tabla de datos");
            } else {
                console.log("Se creo la tabla satifactoriamente");
            }
        })  
}

function getHeroes(callback) {
    const query = "SELECT * FROM heroes"
    conection.query(query,(err,res) => {
        if (err) {
            console.log("Error al hacer la consulta");
        } else {
            console.log(res.rows);
            callback(res.rows)
            
        }
    })
}
function postHeroes(result) {
    const insert = `INSERT INTO heroes (id,name,localized_name) VALUES (${result.id},'${result.name}','${result.localized_name}')`
    conection.query(insert,(err,res) => {
        if (err) {
            console.log("Error al hacer la isercion de datos");
            console.log(err)
        } else {
            console.log(res);
            return res
            
        }
    })
}
function putHeroes(result) {
    const query = `UPDATE heroes SET name = '${result.name}', localized_name = '${result.localized_name}' WHERE id = ${result.id}`
    conection.query(query,(err,res) => {
        if (err) {
            console.log("Error al hacer la actualizacion");
            console.log(err);
        } else {
            console.log(res);
            return res
            
        }
    })
}

function deleteHeroes(result) {
    const query = `DELETE FROM heroes WHERE id = ${result} `
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
