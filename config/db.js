const oradb = require("oracledb");

let conn = oradb.getConnection(
    {
        username:"C##TOKODIGITAL",
        password:"tokodigital",
        connectString:"localhost/xe"
        //"(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = Instinct)(PORT = 1521))(CONNECT_DATA =(SERVER = DEDICATED)(SERVICE_NAME = XE)))"
    }, function(err,conn){
        if (err){   
            console.error(err.message); return;
        }else{
            console.log('Berhasil terhubung ke Database dgn service XE');
        }
    }
)
module.exports=conn;