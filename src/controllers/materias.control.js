
const { message } = require("../schemas/materias.schema");
const controller={}
let carrerascontroller = require("../../src/controllers/carreras.control")
let carreras = carrerascontroller.carreras
let materias = []
carreras.forEach(c => c.materias.forEach(m => materias.push(m)))

const mostrarMaterias = (req,res) => {
    materias = []
    carreras.forEach(c => c.materias.forEach(m => materias.push(m)))
    res.status(200).json(materias)
}

/*
const postMateria= (req,res) =>{
    materias = []
    carreras.forEach(c => c.materias.forEach(m => materias.push(m)))

    const data= req.body
    let idm=1;
    if(materias.length){
        const x= materias.map(c=> c.id)
        idm= Math.max(...x)+1
    }
    materias.push(
        {idm,
        nombre:data.nombre,
        cuatrimestral: data.cuatrimestral,
        anio: data.anio,
        carreraId: data.carreraId})
        res.status(201).json(materias[materias.length-1])
};
*/


const MateriasbyId = (req,res) => {
    materias = []
    carreras.forEach(c => c.materias.forEach(m => materias.push(m)))
    id= req.params.id
    const materia = materias.find(m => m.id==id)
    res.status(200).json(materia)
}

const deleteMateria = (req,res) => {

    materias = []
    carreras.forEach(c => c.materias.forEach(m => materias.push(m)))
    
    id = req.params.id
    const materia = materias.find( m => m.id == id)
    const carrera = carreras.find( c => c.id == materia.carreraId)
    const materiax = carrera.materias.findIndex(m => (m.id == id))
    borrar = carrera.materias.splice(materiax,1)
    res.status(200).json({message: "se borró la materia: ", objeto:materia})
}


module.exports = {mostrarMaterias, MateriasbyId, deleteMateria}