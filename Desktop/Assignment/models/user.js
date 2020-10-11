const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true
    },
    URL:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});

const User = mongoose.model("User",userSchema);
module.exports = User;