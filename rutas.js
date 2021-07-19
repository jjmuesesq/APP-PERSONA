const rutas = require('express').Router()
const { Router } = require('express')
const conexion = require('./config/conexion')

// rutas.get('/', function(req, res){
//     res.send('hola desde rutas');
// });

//------------------------RUTAS---------------------------

//listar personas
rutas.get('/', (req, res)=>{
    let sql = 'select * from tb_persona'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//listar una persona
rutas.get('/:ident', (req, res)=>{
    const {ident} = req.params
    let sql = 'select nombre, nacimiento from tb_persona where identificacion = ?'
    conexion.query(sql, [ident], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar persona
rutas.post('/', (req, res)=>{
    const {nombre, nacimiento, identificacion, pariente1, pariente2, adoptado} = req.body

    let sql = `insert into tb_persona (nombre, nacimiento, identificacion, pariente1, pariente2, adoptado) values('${nombre}', '${nacimiento}', '${identificacion}', '${pariente1}', '${pariente2}', '${adoptado}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'persona agregada'})
        }
    })
})

//eliminar persona
rutas.delete('/:id', (req, res)=>{
    const {id} = req.params

    let sql = `delete from tb_persona where id = ${id}` 
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'persona eliminado'})
        }
    })
})

// modificar persona
rutas.put('/:id', (req, res)=>{
    const {id} = req.params
    const {nombre, nacimiento, identificacion, pariente1, pariente2, adoptado} = req.body
    let sql = `update tb_persona set
                    nombre = '${nombre}', 
                    nacimiento = '${nacimiento}', 
                    identificacion = '${identificacion}', 
                    pariente1 = '${pariente1}', 
                    pariente2 = '${pariente2}', 
                    adoptado =  '${adoptado}'
                where id = '${id}'` 
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'persona modificada'})
        }
    })
})


//--------------------------------------------------------


module.exports = rutas;