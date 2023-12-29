const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"enter the value"]
            
        },
        price:{
            type: Number,
            required: true,
        },
        quantity:{
            type: Number,
            required: true,
            default: 1
        },
        image:{
            type: String,
            required: false
        }
    },
    {
        timestaps: true
    }
)

const Product = mongoose.model("Product",productSchema)

module.exports = Product