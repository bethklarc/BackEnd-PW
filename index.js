
const express = require ('express');
const mysql = require ('mysql2');
const cors = require ('cors');
const app = express ();
app.use (cors());
app.use (express.json());


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'liz27',
    database:'bdd_prueba'
});

db.connect(err=>{
    if (err){
        console.error('Error de conexión a la base de datos', err.stack);
        return;
    }
    console.log('Conectado a la base de datos'+db.threadId);
});

app.get('/dataWorks',(req, res)=>{
    console.log('Ruta /dataWorks accedida correctamente');
    db.query('select * from works', (err, result)=>{
        if(err){
            console.error(err);
            console.error('Error de base de datos',err);
            return res.status(500).json({
                error:'Error al consultar la base de datos inténtelo más tarde'
            });
            
        }
        res.status(200).json(result);
    })
});

app.listen(3000,'0.0.0.0', ()=>{
    console.log("server is running on port 3000")
});


