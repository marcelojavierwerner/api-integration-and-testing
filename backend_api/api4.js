const express = require('express')
const app = express()
const port = 3000

const usuarios = [
    {
        Nombre: 'Daniela Gomez',
        Documento: 17546285,
        Correo: 'dgomez@gmail.com',
        Telefono: 2235485758,
        Direccion: 'Gaona 248',
        Valor: 20000,
        Concepto: 'Pago de haberes'
    }
]

app.get('/usuarios',(req, resp) =>{
    resp.send(usuarios)
})

app.listen(port, ()=>{
    console.log('Se esta ejectuando bien')
})