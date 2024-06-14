const {Router} = require("express")
const router = Router()

const middleware = require("../middlewares/materias.middleware")
const validarIdMateria = middleware.validarExisteIdMateria

const controller = require("../controllers/materias.control")

getMaterias = controller.mostrarMaterias
getMateria = controller.MateriasbyId
deleteMateria = controller.deleteMateria

router.get("/materias", controller.mostrarMaterias)
router.get("/materias/:id", validarIdMateria , getMateria)
router.delete("/materias/:id", validarIdMateria , deleteMateria)

module.exports = {router}











