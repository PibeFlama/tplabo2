const carreras= require("../../data/carreras.json")
const controller={}
const materias = []
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
    let idc = 1;
    if(carreras.length){
        const x= carreras.map(c=> c.id)
        idc = Math.max(...x)+1
    }

    
    const materiasc = ()=>{
        materiasdecarrera = [] 
        data.materias.forEach(m => {
            m = {
                "id" : Math.max(...(materias.map( m => m.id))) +1,
                "nombre": m.nombre,
                "cuatrimestral": m.cuatrimestral,
                "anio": m.anio,
                "carreraId": m.carreraId
            }
            materias.push(m)
            materiasdecarrera.push(m)
        })
        return materiasdecarrera
    }

    carreras.push(
        {
            id: idc,
            nombre:data.nombre,
            grado:data.grado,
            universidad:data.universidad,
            materias:materiasc()
        })
    console.log(materias.length)
    /*
    const array = [[1,2,3],[4,5,6],[7,8,9]]
    const array2 = []
    array.forEach( a => array2.push(...a))
    console.log(array2)
    */
    res.status(201).json(carreras[carreras.length-1])
};

const deleteCarreraById= (req,res) => {
    const id= req.params.id
    const posic= carreras.findIndex(c => c.id==id)
    const borrar= carreras.splice(posic,1)
    res.status(200).json({mensaje: "se borra la carrera: ", objeto: borrar[0]})
}


const getAllMateriasDeCarrera = (req,res) => {
    const id = req.params.id
    const carrera = carreras.find(c => c.id == id)
    res.status(200).json((carrera.materias))
}

const postMateriaEnCarrera = (req,res) =>{
    idc = req.params.id
    const data = req.body
    const carrera = carreras.find(c => (c.id == idc))
    let idm=1;
    if(materias.length){
        const x = materias.map(m => m.id)
        idm = Math.max(...x) + 1
    }
    carrera.materias.push(
        {
            id: idm,
            nombre:data.nombre,
            cuatrimestral: data.cuatrimestral,
            anio: data.anio,
            carreraId: data.carreraId
        })
    res.status(201).json(materias.find(m => m.id == idm))
};

/*const createMateriaEnCarrera*/



    

module.exports= {getAllCarreras, getCarreraByID, postCarrera, deleteCarreraById, getAllMateriasDeCarrera,postMateriaEnCarrera}




