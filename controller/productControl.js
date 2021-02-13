const Product = require('../model/product');
const fs = require('fs');

// exports.manageProduct = (req,res)=>{
//     res.render('adminPage');
// }

exports.manageProduct=async(req,res)=>{
    await Product.find().then(result=>{
        if(result){
            console.log(result);
            res.render('adminPage',{error:false,result:result});

        }else{
            res.render('adminPage',{error:false,result:false});
        }
    })
    
}
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
            res.redirect('/admin')
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
                    console.log("product is created ");
                    res.redirect("/admin");
                    
                }).catch(err=>{
                    console.log(err);
                });
            })
        }
    })

}
// exports.getproduct = (req,res)=>{
//     product.find().then( products =>{
//         console.log(products);
//         res.json(products);
//     }).catch(err=>{
//         console.log(err);
//     })
// }

// exports.deleteProduct = (req, res) => {
//     const productid = req.params.postId;
//     Post.findByIdAndRemove(postId)
//         .then(() => {
//           console.log('Post is deleted');
//           res.json({"message": "success!"});
//         })
//         .catch(err => {
//           console.log(err);
//         })
//   }
exports.deleteProduct = (req,res)=>{
    const path="./public"
    console.log(req.params.id)
    Product.findByIdAndRemove(req.params.id).then(result=>{
        fs.unlink(path+result.img);
        res.redirect("/admin");
    }).catch(err=>{
        res.redirect("/admin");
    })

}