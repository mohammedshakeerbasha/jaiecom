

const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    country_name:{
        type :String
    },
    short_code:{
        type:String
    },
    country_code:
    {
        type:String
    },
    currency :{
        type:String
    },
    currencycode :{
        type:String
    },
    currencysign :{
        type:String
    },
    rate:{
        type: String
    },
    vat:{
        type: String
    },
    a1:{
        type: String
    },
    a2:{
        type: String
    },
    a3:{
        type: String
    },
    a4:{
        type: String
    },
    a5:{
        type: String
    },
    a6:{
        type: String
    },
    a7:{
        type: String
    },
    a8:{
        type: String
    },
    a9:{
        type: String
    },
    a10:{
        type: String
    },
    a11:{
        type: String
    },
    a12:{
        type: String
    },
    a13:{
        type: Boolean
    },
    a14:{
        type: Boolean
    },
    a15:{
        type: Boolean
    },
    a16:{
        type: Boolean
    },
    a17:{
        type: Boolean
    },
    a18:{
        type: Boolean
    },
    a19:{
        type: Boolean
    },
    a20:{
        type: Boolean
    } ,
    a20:{
        type: Boolean
    } ,
    a21:{
        type: Boolean
    } 
});

const Contact = module.exports = mongoose.model('Contact',contactSchema);