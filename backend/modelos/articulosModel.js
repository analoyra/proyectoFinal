var pool = require("./bd");

async function getArticulos() {
  var query = " SELECT * FROM impresiones order by id desc";
  var rows = await pool.query(query);
  return rows;
}
async function insertArticulo(obj) {
  try {
    var query = "insert into impresiones set ? ";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteArticulo(id){
    var query="delete from impresiones where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getArticuloById(id){
    var query = "select * from impresiones where id=?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarArticulo(obj,id){
    try{
        var query="update impresiones set ? where id=?";
        var rows = await pool.query(query, [obj,id]);
        return rows;
    }catch (error) {
        console.log(error);
        throw error;
      }
    
}
module.exports = { getArticulos, insertArticulo,deleteArticulo,getArticuloById,modificarArticulo };
