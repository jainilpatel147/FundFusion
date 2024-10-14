var mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase : true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    createdAt :{
        type : Date,
        default : () => Date.now(),
        immutable : true,
    },
    updatedAt :{
        type : Date,
        default : () => Date.now(),
    }
    
},{timestamps:true}, {collection:'Users'});

const Users = mongoose.model('User', userSchema);
module.exports = Users;