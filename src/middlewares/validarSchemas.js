const validadorSchemas = (schema) => {
    return (req,res,next) => {
        const result = schema.validate(req.body, {abortEarly: false})
        if (result.error) {
            return res.status(400).json({
                errores: result.error.details
            })
        }
        next()
    }
}

module.exports = {validadorSchemas}






