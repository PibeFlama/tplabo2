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
const validarId = middleware.validarExisteId

const validarSchema = require("../middlewares/validarSchemas").validadorSchemas

const schemaCarrera = require("../schemas/carreras.schema").carreraSchema
const schemaMateria = require("../schemas/materias.schema").materiasSchema


router.get("/carreras", getCarreras)
router.get("/carreras/:id", validarId, getCarrera)
router.post("/carreras", validarSchema(schemaCarrera), postCarrera)
router.delete("/carreras/:id", validarId, deleteCarrera)
router.get("/carreras/:id/materias", validarId, getMateriasDeCarrera)
router.post("/carreras/:id/materia", validarId, validarSchema(schemaMateria), postMateria)


module.exports = {router}