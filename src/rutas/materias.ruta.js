const {Router} = require("express")
const router = Router()

const middleware = require("../middlewares/materias.middleware")
const validarId = middleware.validarExisteId

const controller = require("../controllers/materias.control")

getMaterias = controller.mostrarMaterias
getMateria = controller.MateriasbyId
deleteMateria = controller.deleteMateria

router.get("/materias", controller.mostrarMaterias)
router.get("/materias/:id", validarId , getMateria)
router.delete("/materias/:id", validarId , deleteMateria)

module.exports = {router}











