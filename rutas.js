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

//agregar persona con solo 3 parametros
rutas.post('/persona', (req, res)=>{
    const {nombre, nacimiento, identificacion} = req.body

    let sql = `insert into tb_persona (nombre, nacimiento, identificacion) values('${nombre}', '${nacimiento}', '${identificacion}')`
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

// modificar pariente 1 y pariente 2 de persona utilizando la identificacion
rutas.put('/parientes/:identidad', (req, res)=>{
    const {identidad} = req.params
    const {pariente1, pariente2} = req.body
    let sql = `update tb_persona set 
                pariente1 = '${pariente1}', 
                pariente2 = '${pariente2}'                   
                where identificacion = '${identidad}'` 
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'Se ha actualizado la persona'})
        }
    })
})

//--------------------------------------------------------


module.exports = rutas;