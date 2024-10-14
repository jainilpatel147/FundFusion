var Model = require("../../Model/model");

async function createUser(name,email,password,profile){
    try{
        const user = await Model.User.create({"name":name,"email":email,"password":password,"profilePicture":profile});
        await user.save();
        return true;
    }
    catch(e){
        return false;
    }
}
async function validateUser(name,password,email){
    try{
        const checkUser = await Model.User.findOne({"name" : name , "password" : password, "email": email});
        if(checkUser != null){
            return true; 
        }
        else{
            return false;
        }
    }
    catch(e){
        return false;
    }
}
async function updateUser(oldUserName,updateField,UpdatedValue){
    try{
        const user = await Model.User.where("name").equals(oldUserName)
        user[0].updateField = UpdatedValue;
        user[0].save();
        return true;
        // if(checkUser != null){
        //     return true; 
        // }
        // else{
        //     return false;
        // }
    }
    catch(e){
        return false;
    }
}
async function getUser(name,password){
    try{
        const checkUser = await Model.User.findOne({"name" : name , "password" : password});
        if(checkUser != null){
            return true; 
        }
        else{
            return false;
        }
    }
    catch(e){
        return false;
    }
}
async function getUsersAll(name,password){
    try{
        const checkUser = await Model.User.findOne({"name" : name , "password" : password});
        if(checkUser != null){
            return true; 
        }
        else{
            return false;
        }
    }
    catch(e){
        return false;
    }
}
async function deleteUser(name,password){
    try{
        const checkUser = await Model.User.findOne({"name" : name , "password" : password});
        if(checkUser != null){
            return true; 
        }
        else{
            return false;
        }
    }
    catch(e){
        return false;
    }
}
module.exports= {createUser,validateUser,updateUser,getUser,getUsersAll,deleteUser};