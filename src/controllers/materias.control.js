const { message } = require("../schemas/materias.schemas");
const controller={}
const carreras = require("../../data/carreras.json")
const materias = []
carreras.forEach((c) => materias.push(...c.materias))

const mostrarMaterias= (req,res) => {
    res.status(200).json(materias)
}

const postMateriaEnCarrera= (req,res) =>{
    id = req.params.id
    const data= req.body
    const carrera = carreras.find((c) => c.id == id)
    let idm=1;
    if(materias.length){
        const x = materias.map(m => m.id)
        idm = Math.max(...x)+1
    }
    materias.push(
        {id: idm,
        nombre:data.nombre,
        cuatrimestral: data.cuatrimestral,
        anio: data.anio,
        carreraId: data.carreraId})
        res.status(201).json(materias[materias.length-1])
    console.log(carrera.materias)
};


const MateriasbyId = (req,res) => {
    const id = req.params.id
    const materia = materias.find(m => (m.id == id))
    console.log(materia)
    res.status(200).json(materia)
}

const deleteMateria= (req,res) => {
    id = req.params.id
    indiceM = materias.findIndex(m => m.id==id)
    borrar = materias.splice(indiceM,1)
    res.status(200).json({message: "se borró la materia: ", objeto: borrar[0]})
}


module.exports = {postMateriaEnCarrera, mostrarMaterias, MateriasbyId, deleteMateria}