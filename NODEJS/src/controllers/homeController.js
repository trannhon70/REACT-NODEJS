import db from '../models/index';
import CRUDService from "../services/CRUDService";


let getHomePage =async (req, res)=>{
    try {
        let data = await db.User.findAll();
        // console.log('------------');
        // console.log(data);
        // console.log('------------');
        return res.render('homepage.ejs',{
            data:JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
   
}

let getAboutPage = (req, res)=>{
    return res.render('test/about.ejs');
}

let getCRUDPage = (req, res)=>{
    return res.render('crud.ejs');
}

let postCRUD = async (req, res)=>{
    let messeage =await CRUDService.createNewUser(req.body);
    console.log(messeage);
    return res.send('sao không dc vậy');
}

let dishplayGetCRUD = async (req, res)=>{
    let data = await CRUDService.getAllUser();
    // console.log('dataa', data);
   return res.render('dishplayCrud.ejs',{
    dataTable: data
   })
}

let getEditCRUD = async (req, res)=>{
    // console.log(req.query.id);
    let userId = req.query.id;
    if(userId){
        let userData = await CRUDService.getUserInfobyId(userId)
        // console.log('---------------');
        // console.log(userData);
        // console.log('---------------');
        
        return res.render('dishplayCrud.ejs',{
            user: userData
        })
    }
    else{
        return res.send('user not found')
    }

    
}

let putCRUD = async(req, res)=>{
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);

    return res.render('dishplayCrud.ejs',{
        dataTable: allUsers
       })
}

let deleteCRUD = async(req, res)=>{
    let id = req.query.id;
    if(id){
        await CRUDService.deleteUserById(id);
        return res.send('xoa user thanh cong')
    }else{
        return res.send('xoa user khong thanh cong')
    }
    
    
}

module.exports = {
    getHomePage:getHomePage,
    getAboutPage:getAboutPage,
    getCRUDPage:getCRUDPage,
    postCRUD:postCRUD,
    dishplayGetCRUD:dishplayGetCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD,
}