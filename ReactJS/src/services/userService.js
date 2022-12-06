import axios from '../axios'

//thực hiện chức năng login
 const handleLoginApi = (email, password)=>{
    return axios.post('/api/login',{email,password});
}

//thực hiện lấy toàn bộ user
const getAllUsers = (inputId) =>{
    return axios.get(`/api/get-all-user?id=${inputId}`)
}

//thực hiện tạo user mới
const createNewUserService = (data) =>{
    // console.log('check data from service : ',data);
    return axios.post('/api/create-new-user',data)
}

//thực hiện xóa user 
const deleteUserService = (id) =>{
    // return axios.delete('/api/delete-user', {id : userId})
    // console.log('user',id);
    return axios.delete(`/api/delete-user?id=${id}`);
}

//thực hiện edit user
const editUserService = (editData) =>{
    // return axios.delete('/api/delete-user', {id : userId})
    // console.log('user',id);
    return axios.put('/api/edit-user', editData);
}

//lấy toàn bộ user theo phân quyền 
const getAllcodeService = (inputType) =>{
    return axios.get(`/api/get-all-codes?type=${inputType}`)
}


export  {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService ,
    getAllcodeService
};

