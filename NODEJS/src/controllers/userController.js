import userService from '../services/userService';

let hanldLogin = async(req, res) =>{
    let email = req.body.email;
    let password = req.body.password;
    if(!email || !password){
        return res.status(500).json({
            errCode : 1,
            message: 'Các trường không được bỏ trống !'
        })
    }
    let userData = await userService.hanldUserLogin(email, password);
    return res.status(200).json({
        errCode : userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
        // errCode : 0,
        // message: 'userData.errMessage',
    })
}

let handleGetAllUser = async(req,res)=>{
    let id = req.query.id; //ALL , Single
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required paramenter',
            users:[]
        })
    }
    let users = await userService.getAllUser(id)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'get all user',
        users
    })
}

//thực hiện tạo user
let handleCreateNewUser = async(req,res)=>{
    let message = await userService.createNewUser(req.body);
    // console.log(message);
    return res.status(200).json(message);
}

//thực hiện sửa user
let handleEditUser = async(req,res)=>{
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message)
}

//thực hiện xóa user
let handleDeleteUser = async(req, res) =>{
    if(!req.query.id){
        return res.status(200).json({
            errCode : 1,
            errMessage:'Xóa user không thành công !'
        })
    }
    let message = await userService.deleteUser(req.query.id);
    // console.log(message);
    return res.status(200).json(message);
}


module.exports={
    hanldLogin: hanldLogin,
    handleGetAllUser: handleGetAllUser,
    handleCreateNewUser:handleCreateNewUser,
    handleEditUser:handleEditUser,
    handleDeleteUser :handleDeleteUser,
    handleEditUser: handleEditUser
}