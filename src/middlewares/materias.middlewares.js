const carreras = require("../../data/carreras.json")
const materias = []
carreras.forEach((c) => materias.push(...c.materias))

const validarExistebyId= (req,res,next) => {
    const id= req.params.id;
    const valiMateria= materias.findIndex(c => c.id==id)
    if(valiMateria<0){
        res.status(404).json({mensaje: "no existe una materia con ese id"})
    }
    next()
}


module.exports= {validarExistebyId}










