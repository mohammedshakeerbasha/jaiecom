const express = require ('express');
const router = express.Router();
const Contact = require ('../models/contacts');

router.get('/viewcountry' , (req,res,next) =>{
    Contact.find(function (err , contacts){
        res.json(contacts);
    });

});
 

router.get('/' , (req,res,next) =>{
    res.send("here...")

});
router.post('/addcountry' , (req, res, next)=>{
    let newContact = new Contact({
        country_name:req.body.country_name,
        short_code:req.body.short_code,
        country_code : req.body.country_code,
        currency : req.body.currency,
        currencycode : req.body.currencycode,
        currencysign : req.body.currencysign,
        rate : req.body.rate,
        vat:req.body.vat,
        a1:req.body.a1,
        a2:req.body.a2,
        a3:req.body.a3,
        a4:req.body.a4,
        a5:req.body.a5,
        a6:req.body.a6,
        a7:req.body.a7,
        a8:req.body.a8,
        a9:req.body.a9,
        a10:req.body.a10,
        a11:req.body.a11,
        a12:req.body.a12,
        a13:req.body.a13,
        a14:req.body.a14,
        a15:req.body.a15,
        a16:req.body.a16,
        a17:req.body.a17,
        a18:req.body.a18,
        a19:req.body.a19,
        a20:req.body.a20, 
        a21:req.body.a21, 
            
        
    });


    newContact.save((err,contact) =>{
        if(err)
        {
            res.json({msg:'failed to add the contact'});
        }else{
            res.json({msg: 'Country added successfully'});
        } 
    });

    
});
router.post('/count/',function(req, res, next) {
 
    Contact.find({"country_name" : req.body.country_name}).count(function(err,contacts){
        if(err) return next(err);
        res.json(contacts);

    });
});

//finbyid
router.get('/update/:Item_id',(req,res,next)=>{
    Contact.findById(req.params.Item_id,function(err,contacts){
        if(err){
            res.json(err);
        }
        else{
            res.json(contacts);
        }
        
    });
})

//updating the data
router.put('/update/:Item_id',(req,res,next)=>{
    
    Contact.findById(req.params.Item_id,function(err,contacts){
        if(err){
            res.send(err);
        }

        
       contacts.country_name = req.body.country_name;
       contacts.short_code = req.body.short_code;
        contacts.country_code  = req.body.country_code;
        contacts.currency = req.body.currency;
        contacts.currencycode = req.body.currencycode;
         contacts.currencysign  = req.body.currencysign;
        contacts.rate = req.body.rate; 
        contacts.vat=req.body.vat;
        contacts.a1=req.body.a1;
        contacts.a2=req.body.a2;
        contacts.a3=req.body.a3;
        contacts. a4=req.body.a4;
        contacts.a5=req.body.a5;
        contacts.a6=req.body.a6;
        contacts.a7=req.body.a7;
        contacts.a8=req.body.a8;
        contacts.a9=req.body.a9;
        contacts.a10=req.body.a10;
        contacts.a11=req.body.a11;
        contacts.a12=req.body.a12;
        contacts.a13=req.body.a13;
        contacts.a14=req.body.a14;
        contacts.a15=req.body.a15;
        contacts.a16=req.body.a16;
        contacts.a17=req.body.a17;
        contacts.a18=req.body.a18;
        contacts.a19=req.body.a19;
        contacts.a20=req.body.a20; 
        contacts.a21=req.body.a21; 
        contacts.save(function(err){
            if(err)
            {
                res.send(err);
            }
            else{
                res.json({msg:'Country Updated!'});
            }
        });
    });
});


router.delete('/delete/:Item_id',(req,res)=>{
    Contact.remove({_id: req.params.Item_id},function(err,contacts){
        if(err){
            res.json(err);
        }
        else{
            res.json(contacts);
        }
    });
});


 
module.exports = router;