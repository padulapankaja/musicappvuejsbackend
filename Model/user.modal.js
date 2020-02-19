const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsersSchema = new Schema({
    fname : {
        type: String, 
        required: true,

    },
    lname : {
        type: String,
        required : true,
    },
    email: {
        type: String,
       required : true,
    },
    dob : {
        type: String,
        required : true
    },
    gender: {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    }

});

module.exports = mongoose.model('UserRegister', UsersSchema);


// {
//     "fname" : "amalk",
//     "lname" : "lsasas",
//      "email" : "sss@gamail.oc",
//      "dob" : "10101",
//      "gender" : "dsds",
//      "password" : "sasa"
// }