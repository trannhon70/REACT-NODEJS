import bcrypt from'bcryptjs';
import db from '../models/index';


const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) =>{
    return new Promise(async(resolve, reject)=>{
        try {
            
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            // console.log('data',data);
            // console.log('hashPasswordFromBcrypt',hashPasswordFromBcrypt);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === 1 ? true : false,
                
                roleId: data.roleId,
                
            })
            resolve('ok create a new user succed!');
        } catch (error) {
            reject(error)
        }
    })
    
   
}

let hashUserPassword = (password)=>{
    return new Promise(async(resolve,reject)=>{
       try {
        let hashPassword = await bcrypt.hashSync(password, salt);
        resolve(hashPassword)
       } catch (error) {
            console.log(error);
       }

   
    })
}

let getAllUser = () =>{
    return new Promise(async(resolve, reject)=>{
        try {
            let users = db.User.findAll({
                raw: true,
            });
            resolve(users);
        } catch (error) {
            reject(error)
        }
    })
}

let getUserInfobyId = (userId)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id: userId},
                raw : true,
            })
            if(user){
                resolve(user)
            }else{
                resolve([])
            }
        } catch (error) {
            reject(error)
        }
    })
}

let updateUserData = (data) =>{
    // console.log('data from service');
    // console.log('data',data);
    return new Promise(async(resolve, reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id: data.id}
            })
            if(user){
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                await user.save();

                let AllUsers = await db.User.findAll();
                resolve(AllUsers);
            }
            else{
                resolve();
            }
        } catch (error) {
            reject(error)
        }
    })
}

let deleteUserById = (userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id:userId}
            })
            if(user){
                await user.destroy();
            }
            resolve();
        } catch (error) {
            reject(error)
        }
    })
}
module.exports={
    createNewUser:createNewUser,
    getAllUser:getAllUser,
    getUserInfobyId:getUserInfobyId,
    updateUserData:updateUserData,
    deleteUserById:deleteUserById,
}