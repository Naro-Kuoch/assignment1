const bcrypt = require('bcryptjs');
const User = require('../model/user');
// const bcrypt = require('bycrypt js')
exports.getHomePage = (req,res,next)=>{
    res.render('homePage')
}
exports.signUp = (req,res)=>{
    res.render('signUp');
}
exports.signIn = (req,res)=>{
    res.render('signIn');
}
exports.product = (req,res)=>{
    res.render('product');
}
exports.manageProduct = (req,res)=>{
    res.render('adminPage');
}
exports.register = (req,res)=>{
    const username = req.body.username;
    const pwd = req.body.pwd;
    const confirm_pwd = req.body.confirm_pwd;
    const date = new Date();
    const salt = bcrypt.genSaltSync(10);
    const user = new User({
        username:username,
        email:req.body.email,
        password: bcrypt.hashSync(pwd,salt),
        registerTime: date,
    })
    user.save().then(result=>{
        console.log("save")
        res.redirect("/signin");
    }).catch(err=>{
        console.log(err);
    });
}
exports.logIn = (req,res) =>{
    const email = req.body.email;
    const pwd = req.body.pwd;
    User.find({email:email}).then(result=>{
        if(result){
            bcrypt.compare(pwd,result[0].password,function(err,passwordIsMatch){
                if(passwordIsMatch){
                    res.redirect("/admin");
                }else{
                    res.render("singin", {error: true,  message: "Incorrect password !"});
                }
            })
        }
    });
}
exports.searchEmail = function(req,res){
    User.find({email:req.body.email}).then(
        result=>{
            console.log(result)
            if(result) res.json({exist:true})
            res.json({exist:false})
        }
    ).catch(err=>{
        res,json({exist:false})
    })
}

