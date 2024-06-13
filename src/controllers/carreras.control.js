let carreras = require("../../data/carreras.json");
const controller = {}
let materias = []
carreras.forEach(c => c.materias.forEach(m => materias.push(m)))

const getAllCarreras =(req,res) => {
    res.status(200).json(carreras)
};

const getCarreraByID= (req,res) => {
    const id= req.params.id;
    const carrera= carreras.find(c => c.id==id);
    res.status(200).json(carrera)
};

const postCarrera= (req,res) =>{
    const data= req.body
    let idc=1;
    if(carreras.length){
        const x= carreras.map(c=> c.id)
        idc = Math.max(...x) + 1
    }

        materiasdecarrera = []
        data.materias.forEach(m => {

            let idm = 1;
            if(materias.length){
                const listadeidsdematerias = materias.map(m=> m.id)
                idm = Math.max(...listadeidsdematerias) + 1
            }
            m = {
                "id": idm,
                "nombre": m.nombre,
                "cuatrimestral": m.cuatrimestral,
                "anio": m.anio,
                "carreraId": m.carreraId
            }
            materias.push(m)
            materiasdecarrera.push(m)
        })
    carreras.push(
        {id: idc,
        nombre:data.nombre,
        grado:data.grado,
        universidad:data.universidad,
        materias:materiasdecarrera})
    //console.log(materias)
    res.status(201).json(carreras.find(c => c.id == idc))
};

const deleteCarreraById= (req,res) => {
    const id= req.params.id
    const posic= carreras.findIndex(c => c.id==id)
    const borrar= carreras.splice(posic,1)
    res.status(200).json({mensaje: "se borra la carrera: ", objeto: borrar[0]})
}

const getAllMateriasDeCarrera =(req,res) => {
    const id= req.params.id
    const carrera = carreras.find(c => c.id == id)
    res.status(200).json((carrera.materias))
};

const postMateriaEnCarrera = (req,res) => {
    const id = req.params.id
    const carrera = carreras.find(c => c.id == id)
    const materia = 
    {
    id: Math.max(...materias.map(m => m.id)) + 1,
    ...req.body
    }
    carrera.materias.push(materia)
    res.status(201).json(materia)
};




    

module.exports= {getAllCarreras, getCarreraByID, postCarrera, deleteCarreraById, getAllMateriasDeCarrera, postMateriaEnCarrera}




