const {Router} = require("express")
const router = Router()
const controller= require("../controllers/carreras.control")
const middleware= require("../middlewares/carreras.middleware")
const validadorSchema= require("../middlewares/validarSchemas")
const schemaCarrera= require("../schemas/carreras.schema")

router.get("/carreras", controller.getAllCarreras)
router.get("/carreras/:id",middleware.validarExisteId, controller.getCarreraByID)
router.post("/carreras", validadorSchema(schemaCarrera), controller.postCarrera)
router.delete("/carreras/:id",middleware.validarExisteId, controller.deleteCarreraById)
router.get("/carreras/:id/materias",middleware.validarExisteId, controller.getAllMateriasDeCarrera)
router.post("/carreras/:id/materias",middleware.validarExisteId, controller.postMateriaEnCarrera)



module.exports = router