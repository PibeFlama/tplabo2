const validadorSchemas= (schema) => {
    return (req,res,next) => {
        const x= schema.validate(req.body, {abortEarly: false})
        if (x.error) {
            return res.status(400).json({
                errores: x.error.details
            })

        }
        next()
    }
}

module.exports = validadorSchemas






