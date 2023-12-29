const Product = require('/home/godspeed/node_project/models/productModel')
const asyncHandler = require('express-async-handler');



const getProducts = asyncHandler(async (req,res)=>{
    try{
        const product = await Product.find({})
        res.status(200).json(product)

    }catch(error){
        console.log(error.message)
        res.status(500)
        throw new Error(error.message)

    }
})


const postProducts = asyncHandler(async (req,res)=>{
    try{
        const products = await Product.create(req.body)
        res.status(200).json(products)

    }catch(error){
        console.log(error.message)
        throw new Error(error.message)

    }
})

const putProducts = asyncHandler(async (req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(404)
            throw new Error({message:`Product not found in db ${id}`})
        }

        const updated_product = await Product.findById(id)
        res.status(200).json(updated_product)

    }catch(error){
        console.log(error.message)
        res.status(500)
        throw new Error(error.message)

    }
})

const deleteProducts = asyncHandler(async (req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404)
            throw new Error({message:`Product not found in db ${id}`})
        }
        res.status(200).json(product)

    }catch(error){
        console.log(error.message)
        res.status(500)
        throw new Error(error.message)

    }
})

const getProductsById = asyncHandler(async (req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product){
            res.status(404)
            throw new Error({message:`Product not found in db ${id}`})
        }
        res.status(200).json(product)

    }catch(error){
        console.log(error.message)
        res.status(500)
        throw new Error(error.message)
        // res.status(500).json({message:error.message})

    }
})

module.exports = { getProducts , postProducts , putProducts , deleteProducts , getProductsById}