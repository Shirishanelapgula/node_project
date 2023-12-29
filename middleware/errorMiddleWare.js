
const errorMiddleWare = (err, req, res, next)=>{
    console.log("this error middleware")
    res.status(err.statusCode ? err.statusCode : 500).json({message: err.message , stack: process.env.NODE_ENV === "development" ? err.stack : null })

}

module.exports = errorMiddleWare