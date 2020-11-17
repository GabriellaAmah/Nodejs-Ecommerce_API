
function errorHandler(error, req, res, next){
    if (error) {
        const status = error.statusCode;
        const message = error.message;

      res.status(status || 422).json({
            message
        })

        next()
    }
}

export default errorHandler;