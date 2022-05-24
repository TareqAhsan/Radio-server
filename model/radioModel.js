const mongoose = require('mongoose');

const radioSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    chanelno:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Radio',radioSchema)