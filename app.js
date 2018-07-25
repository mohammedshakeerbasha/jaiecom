var express = require('express');
var mongoose = require ('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require ('path');

const router = require ('./routes/route');

var app = express();

mongoose.connect('mongodb://shakeer:shakeer123@ds247121.mlab.com:47121/jazz',{ useNewUrlParser: true });

mongoose.connection.on('Connected',() =>{
   
    console.log('Connected to the server @ 27017');
});
mongoose.connection.on('error' , (err) =>{
    if(err){
        console.log('Error in Database connection:'+err);

    } 
})


const PORT = process.env.PORT ||8080;

app.use(cors());

app.use(bodyparser.json());

app.use('/api', router);

app.use(express.static(path.join(__dirname, 'public' )));

app.get('/' , (req,res) =>{
res.send ('Jaiecom Application');
});

app.get('*' , (req,res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html' ));
    });
    
    app.listen (PORT,()=>{
        console.log('server started at port:' +PORT);
    });