const express = require('express')

const router = express.Router()

const { getProducts, postProducts, putProducts, deleteProducts , getProductsById} = require('../controler/productControler')




router.put('/:id', putProducts)

router.delete('/:id', deleteProducts)

router.get('/:id', getProductsById)

router.get('/', getProducts)


router.post('/', postProducts )


module.exports = router