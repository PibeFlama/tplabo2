const Joi = require("joi")

const materiasSchema = Joi.object().keys(
    {
        nombre: Joi.string().required().max(60).messages({
            "any.required":"debe ingresar un nombre",
            "string.max": "el nombre no debe pasar los {#limit} caracteres",
            "string.empty": "no puede dejar el nombre vacío"
        }),
        cuatrimestral: Joi.boolean().required().messages({
            "any.required": "debe ingresar un valor para cuatrimestral",
            "any.only": "solo se permiten los valores true o false"
        }),
        anio: Joi.string().required().max(15).messages({
            "string.max": "el nombre no debe pasar los {#limit} caracteres",
            "any.required": "debe ingresar el anio de la materia",
            "string.empty": "no puede dejar el campo anio vacío",
        })
    })

module.exports = {materiasSchema}













