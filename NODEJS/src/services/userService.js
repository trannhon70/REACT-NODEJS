import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      console.log(error);
    }
  });
};

let hanldUserLogin = (email, password) => {
  return new Promise(async (resovel, reject) => {
    try {
      let userData = {};

      let isExits = await checkUserEmail(email);
      if (isExits) {
        //user already exits
        let user = await db.User.findOne({
          //lấy ra email và roleId
          attributes: ["id", "email", "password", "roleId"],
          where: { email: email },

          raw: true,
        });
        if (user) {
          //compare password
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "ok";
            // console.log(user);
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Mật khẩu không đúng !";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User not found`;
        }

        // resovel()
      } else {
        //return error
        userData.errCode = 1;
        userData.errMessage = `Tài khoản hoặc mật khẩu đăng nhập không đúng !`;
      }
      resovel(userData);
    } catch (error) {
      reject(error);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resovel, reject) => {
    try {
      // console.log('db',db);
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
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

let getAllUser = (userId) => {
  return new Promise(async (resovel, reject) => {
    try {
      let users = "";
      if (userId === "ALL") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (userId && userId !== "ALL") {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
        console.log("users", users);
      }
      resovel(users);
    } catch (e) {
      reject(e);
    }
  });
};

//thực hiện tạo user
let createNewUser = (data) => {
  return new Promise(async (resovel, reject) => {
    try {
      //check email co ton tai hay ko
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resovel({
          errCode: 1,
          message:
            "Email của bạn đã được đăng ký, vui lòng sử dụng email khác!",
        });
      }
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
      });
      resolve({
        errCode: 0,
        message: "Tạo người dùn thành công",
      });
    } catch (e) {
      console.log(e);
    }
  });
};

//thực hiện xóa User
let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
      });
      if (!user) {
        resolve({
          errCode: 2,
          errMessage: "user không tồn tại !",
        });
      }
      // if(user){
      //   await user.destroy();
      // }
      await db.User.destroy({
        where: { id: userId },
      });

      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

//thực hiện update user
let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data.id);
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "missing required parameters",
        });
      }
      let user = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        await user.save();

        resolve({
          errCode: 0,
          message: "Cập nhật người dùng thành công",
        });
      } else {
        resolve({
          errCode: 1,
          message: "người dùng không tồn tại!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = {
  hanldUserLogin: hanldUserLogin,
  getAllUser: getAllUser,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
};
