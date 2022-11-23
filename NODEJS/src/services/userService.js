import db from '../models/index';
import bcrypt from'bcryptjs';

let hanldUserLogin = (email, password) => {
    return new Promise(async(resovel, reject)=>{
        try {
            let userData={};

            let isExits = await checkUserEmail(email);
            if(isExits){
                //user already exits
                let user = await db.User.findOne({
                  //lấy ra email và roleId
                  attributes:['id','email','password','roleId'],
                    where: {email: email},
                    
                    raw:true
                })
                if(user){
                    //compare password
                   let check = await bcrypt.compareSync(password,user.password)
                   if(check){
                    userData.errCode = 0;
                    userData.errMessage = 'ok';
                    // console.log(user);
                    delete user.password;
                    userData.user = user;

                   }else{
                    userData.errCode = 3;
                    userData.errMessage = 'password not found';
                   }
                }
                else{
                    userData.errCode = 2;
                    userData.errMessage = `User not found`;
                }

                // resovel()
            }else{
                //return error
                userData.errCode = 1;
                userData.errMessage = `your email isn't exist in your system. Plz try orther email`;
            }
            resovel(userData)
        } catch (error) {
            reject(error)
        }
    })
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resovel, reject) => {
    try {
        // console.log('db',db);
      let user = await db.User.findOne({
       
        where: { email: userEmail }
      })
      if (user) {
        resovel(true);
      } else {
        resovel(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  hanldUserLogin: hanldUserLogin,
};
