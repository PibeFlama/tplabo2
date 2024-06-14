let carreras = require("../../data/carreras.json")
let materias = []

updateMaterias = ()=>{
    materias = []
    carreras.forEach(c => c.materias.forEach(m => materias.push(m)))
    return materias
}

updateMaterias()

const mostrarMaterias = (req,res) => {
    materias = updateMaterias()
    res.status(200).json(materias)
}

const MateriasbyId = (req,res) => {
    materias = updateMaterias()
    id= req.params.id
    const materia = materias.find(m => m.id==id)
    console.log(materia)
    res.status(200).json(materia)
}
 
const deleteMateria = (req,res) => {
    materias = updateMaterias()
    id = req.params.id 
    const materia = materias.find( m => m.id == id)
    if (materia){
        const carrera = carreras.find( (c) => c.id == materia.carreraId)
        console.log(carrera.materias)
        const posC = carrera.materias.findIndex(m => m.id == materia.id)
        console.log(`encontrada la materia en la carrera ${carrera.id}, en posicion ${posC}`)
        carrera.materias.splice(posC,1)
        console.log(`borrando materia ${posC}`)
        res.status(200).json({message: "se borró la materia: ", objeto:materia})
    }
} 
module.exports = {mostrarMaterias, MateriasbyId, deleteMateria}