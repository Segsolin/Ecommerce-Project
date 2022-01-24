const router = require('express').Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo");
const { CloudWatchLogs } = require('aws-sdk');
// POST request - create a new product

router.post("/products", upload.single("photo"), async (req, res) => {
    try {
        let product = new Product();
        product.ownerID = req.body.ownerID;
        product.categoryID = req.body.categoryID;
        product.price = req.body.price;
        product.title = req.body.title;
        product.description = req.body.description;
        product.stockQuantity = req.body.stockQuantity;
        product.photo = req.file.location;

        await product.save();


        res.json({
            status: true,
            message: "succesfully saved"
        });
    }catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


// GET request - get all products
router.get("/products", async (req, res) => {
    try {
        let products = await Product.find();
        res.json({
            success: true,
            products: products
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


// GET request - get a single product
router.get("/products/:id", async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.params.id });
        res.json({
            success: true,
            product: product
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


//PUT request -  Update a single product

router.put("/products/:id", upload.single("photo"), async (req, res) => {
     console.log(req.body)
    req.body.ownerID = null
    req.body.categoryID = null
    
    try {
        let product = await Product.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                title: req.body.title,
                price: req.body.price,
                category: req.body.categoryID,
                photo: req.file.location,
                description: req.body.description,
                owner: req.body.ownerID
                }
        },
        { upsert: true }
        );
        res.json({
            success: true,
            updateProduct: product
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//DELETE request - delete a single product
router.delete('/products/:id', async (req, res) => {
    try {
        let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });

        if (deletedProduct) {
            res.json({
                status:true,
                message: "Product deleted"
            });
        }
    } catch (err) {
        res.status(500).json ({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;