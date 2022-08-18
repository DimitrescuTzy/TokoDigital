// var conn = require('../config/db')

const { data } = require("jquery");
const oradb = require("oracledb");



exports.viewPage=(req,res,next)=>{
    
let conn = oradb.getConnection(
    {
        username:"C##TOKODIGITAL",
        password:"tokodigital",
        connectString:"localhost/xe"
        //"(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = Instinct)(PORT = 1521))(CONNECT_DATA =(SERVER = DEDICATED)(SERVICE_NAME = XE)))"
    }, function(err,sucConn){
        if (err){   
            console.error(err.message); return;
        }else{
            console.log('Module Karyawan');
            
        sucConn.execute(`SELECT * FROM KARYAWAN`, (err, rows)=>{
        if(err){
            req.flash('Database Error : ', err)
            req.render('karyawanVw',{rows
        })
        } else {
            //console.table(rows)
            //console.log({data: rows})
        
            res.render('karyawanVw', rows)

            // res.render('karyawanVw',{
            //     rows
            // })
        }
    })
        }   
    }
)
}

