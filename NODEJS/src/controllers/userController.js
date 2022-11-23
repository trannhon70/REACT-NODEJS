import userService from '../services/userService';

let hanldLogin = async(req, res) =>{
    let email = req.body.email;
    let password = req.body.password;
    if(!email || !password){
        return res.status(500).json({
            errCode : 1,
            message: 'Missing inputs parameter !'
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

module.exports={
    hanldLogin: hanldLogin,
}