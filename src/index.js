const express = require('express')
const port = process.env.port ?? 3000
const rutasC = require("./rutas/carreras.ruta").router
const rutasM = require("./rutas/materias.ruta").router
const app = express()

app.use(express.json());
app.use(rutasC)
app.use(rutasM)

app.listen(port, ()=>{
    console.log(`server corriendo con el puerto ${port}`)
});














