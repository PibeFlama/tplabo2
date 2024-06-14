const {Router} = require("express")
const router = Router()

const controller = require("../controllers/carreras.control")
const getCarreras = controller.getAllCarreras
const getCarrera = controller.getCarreraByID
const postCarrera = controller.postCarrera
const deleteCarrera = controller.deleteCarreraById
const getMateriasDeCarrera = controller.getAllMateriasDeCarrera
const postMateria = controller.postMateriaEnCarrera

const middleware = require("../middlewares/carreras.middleware")
const validarIdCarrera = middleware.validarExisteIdCarrera

const validarSchema = require("../middlewares/validarSchemas").validadorSchemas

const schemaCarrera = require("../schemas/carreras.schema").carreraSchema
const schemaMateria = require("../schemas/materias.schema").materiasSchema


router.get("/carreras", getCarreras)
router.get("/carreras/:id", validarIdCarrera, getCarrera)
router.post("/carreras", validarSchema(schemaCarrera), postCarrera)
router.delete("/carreras/:id", validarIdCarrera, deleteCarrera)
router.get("/carreras/:id/materias", validarIdCarrera, getMateriasDeCarrera)
router.post("/carreras/:id/materia", validarIdCarrera, validarSchema(schemaMateria), postMateria)


module.exports = {router}