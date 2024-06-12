const carreras= require("../../data/carreras.json")


const validarExisteId= (req,res,next) => {
    const id= req.params.id;
    const caId= carreras.findIndex(c => c.id==id)
    if(caId<0){
        res.status(404).json({mensaje: "no existe una carrera con esa id"})
    }
    next()
}


module.exports= {validarExisteId}