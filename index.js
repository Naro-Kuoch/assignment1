const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/myRoute');
const app = express();
const path = require("path");
app.set('view engine','ejs');
app.set('views','view');
app.use(express.static(path.join(__dirname,'public')));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
app.use(route);

mongoose.connect('mongodb+srv://user1:User12345678@cluster0.6k8oa.mongodb.net/users?retryWrites=true&w=majority').then(result =>{
    console.log('DB is connected');
    app.listen(3000);
}).catch(err=>{
    console.log(err);
})

