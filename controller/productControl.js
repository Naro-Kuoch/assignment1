const Product = require('../model/product');
const fs = require('fs');
exports.addProduct = (req,res)=>{
    console.log(req.body);
    const productName = req.body.productName;
    const qty = req.body.qty;
    const instock = req.body.instock;
    const category = req.body.category;
    const detail = req.body.detail;
    const img = req.files.productimg;
    console.log(img)
    console.log(req.body);
    var productDir = './public/assets/storage/';
    var productFile = productDir+img.name;
    var savedPath="assets/storage/"+img.name;
    if(!fs.existsSync(productDir)){
        fs.mkdirSync(productDir);
    }
    Product.findOne({productName: productName}).then(result=>{
        if(result){
            console.log("already exist !")
        }
        else{
            img.mv(productFile).then(result=>{
                const product = new Product({
                    productName,
                    detail,
                    qty,
                    instock,
                    category,
                    img: savedPath,
                    postedAt: new Date
                })
                product.save().then(result=>{
                    console.log("product is created ")
                    
                }).catch(err=>{
                    console.log(err);
                });
            })
        }
    })

}
exports.getproduct = (req,res)=>{
    product.find().then( products =>{
        console.log(products);
        res.json(products);
    }).catch(err=>{
        console.log(err);
    })
}

exports.deleteProduct = (req, res) => {
    const productid = req.params.postId;
    Post.findByIdAndRemove(postId)
        .then(() => {
          console.log('Post is deleted');
          res.json({"message": "success!"});
        })
        .catch(err => {
          console.log(err);
        })
  }