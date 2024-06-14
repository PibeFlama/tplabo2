let carreras = require("../../data/carreras.json");
let materias = []

updateMaterias = ()=>{
    materias = []
    carreras.forEach(c => c.materias.forEach(m => materias.push(m)))
    return materias
}

const getAllCarreras = (req, res) => {
    res.status(200).json(carreras)
};

const getCarreraByID= (req,res) => {
    const id = req.params.id;
    const carrera = carreras.find(c => c.id==id);
    res.status(200).json(carrera)
    console.log(carrera)
};

const postCarrera= (req,res) =>{
    
    const data= req.body
    let idc=1;

    if(carreras.length){
        const listadeids= carreras.map(c=> c.id)
        idc = Math.max(...listadeids) + 1
    }

    materiasdecarrera = []
    materias = updateMaterias()
    
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
            "carreraId": idc
        }
        materiasdecarrera.push(m)
        materias.push(m)

    })

    carreras.push(
        {id: idc,
        nombre:data.nombre,
        grado:data.grado,
        universidad:data.universidad,
        materias:materiasdecarrera})

    res.status(201).json(carreras[carreras.length - 1])
};

const deleteCarreraById = (req,res) => {
    const id= req.params.id
    const carrera = carreras.find(c => c.id == id)
    
    if (carrera){
        const pos = carreras.findIndex(c => c.id == id)
        carreras.splice(pos,1)
        res.status(200).json({mensaje: "se borra la carrera: ", objeto: carrera})

    }
}


const getAllMateriasDeCarrera = (req,res) => {
    const id= req.params.id
    const carrera = carreras.find(c => c.id == id)
    if (carrera)
        res.status(200).json((carrera.materias))
};

const postMateriaEnCarrera = (req,res) => {
    materias = updateMaterias()
    const id = req.params.id
    const data = req.body
    const carrera = carreras.find(c => c.id == id)
    
    const materia = { 
        "id" : Math.max(...materias.map(m => m.id)) + 1,
        "nombre": data.nombre,
        "cuatrimestral": data.cuatrimestral,
        "anio": data.anio,
        "carreraId": id
        }

    if (carrera){
        carrera.materias.push(materia)
        res.status(201).json(materia)
    }
    
}

module.exports= {getAllCarreras, getCarreraByID, postCarrera, deleteCarreraById, getAllMateriasDeCarrera, postMateriaEnCarrera}


