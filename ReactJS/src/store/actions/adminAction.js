import actionTypes from './actionTypes';
import {createNewUserService, deleteUserService, editUserService, getAllcodeService, getAllUsers} from '../../services/userService'
import { toast } from "react-toastify";
// export const fecthGenderStart = () => ({
//     type: actionTypes.FECTH_GENDER_START
// })


export const fecthGenderStart =  () => {
    return async(dispatch, getState) =>{
        try {
            dispatch({
                type: actionTypes.FECTH_GENDER_START
            })
            let res = await getAllcodeService('gender');
            if(res && res.errCode === 0){
                // console.log('ADMIN action get state:', getState);
                dispatch(fecthGenderSuccess(res.data));
            }else{
                dispatch(fecthGenderFaided());
            }
        } catch (error) {
    
            dispatch(fecthGenderFaided());
            // console.log(error);
        }
    }
    
}
export const fecthGenderSuccess = (genderData) => ({
    type: actionTypes.FECTH_GENDER_SUCCESS,
    data: genderData
})

export const fecthGenderFaided = () => ({
    type: actionTypes.FECTH_GENDER_FAIDED
})


//position
export const fecthPositionStart =  () => {
    return async(dispatch, getState) =>{
        try {
            
            let res = await getAllcodeService('POSITION');
            if(res && res.errCode === 0){
                // console.log('action position state:', res.data);
                dispatch(fecthPositionSuccess(res.data));
            }else{
                dispatch(fecthPositionFeild());
            }
        } catch (error) {
    
            dispatch(fecthPositionFeild());
            // console.log(error);
        }
    }
    
}
export const fecthPositionSuccess = (positionData) => ({
    type: actionTypes.FECTH_POSITION_SUCCESS,
    data: positionData
})

export const fecthPositionFeild = () => ({
    type: actionTypes.FECTH_POSITION_FAIDED,
   
})

//Role
export const fecthRoleStart =  () => {
    return async(dispatch, getState) =>{
        try {
           
            let res = await getAllcodeService('ROLE');
            if(res && res.errCode === 0){
                // console.log('action role state:', getState);
                dispatch(fecthRoleSuccess(res.data));
            }else{
                dispatch(fecthRoleFeild());
            }
        } catch (error) {
    
            dispatch(fecthRoleFeild());
            // console.log(error);
        }
    }
    
}
export const fecthRoleSuccess = (RoleData) => ({
    type: actionTypes.FECTH_ROLE_SUCCESS,
    data: RoleData
})

export const fecthRoleFeild = () => ({
    type: actionTypes.FECTH_ROLE_FAIDED,
   
})


//create user REDUX
export const createNewUser =  (data) => {
    return async(dispatch, getState) =>{
        try {
           
            let res = await createNewUserService(data) ;
            // console.log('check create user redux', res);
            if(res && res.errCode === 0){
                // console.log('action role state:', getState);
                toast.success("Tạo user thành công !");
                dispatch(saveUserSuccess());
                // dispatch(fecthAllUsersStart());
               
            }else{
                dispatch(SaveUserFeild());
                toast.warn("Tạo user không thành công!");
            }
        } catch (error) {
    
            dispatch(SaveUserFeild());
            // console.log(error);
        }
    }
    
}

export const saveUserSuccess = () =>({
    type: 'CREAT_USER_SUCCESS'
})

export const SaveUserFeild = () =>({
    type: 'CREAT_USER_FAILED'
})


//FETCH ALL USERS REDUX

export const fecthAllUsersStart =  () => {
    return async(dispatch, getState) =>{
        try {
           
            let res = await getAllUsers('ALL');
            if(res && res.errCode === 0){
                // console.log('fecth all uiser redux state:', res.users);
                dispatch(fecthAllUserSuccess(res.users.reverse()));
            }else{
                dispatch(fecthAllUserFeild());
            }
        } catch (error) {
    
            dispatch(fecthAllUserFeild());
            // console.log(error);
        }
    }
    
}

export const fecthAllUserSuccess = (data) =>({
    type: 'FETCH_ALL_USER_SUCCESS',
    users: data
})

export const fecthAllUserFeild = () =>({
    type: 'FETCH_ALL_USER_FAILED'
})


//XÓA USER REDUX
export const deleteUser =  (userId) => {
    return async(dispatch, getState) =>{
        try {
           
            let res = await deleteUserService(userId) ;
            // console.log('check create user redux', res);
            if(res && res.errCode === 0){
                // console.log('action role state:', getState);
                toast.success("Xóa user thành công !");
                dispatch(deleteUserSuccess());
                // dispatch(fecthAllUsersStart());
               
            }else{
                dispatch(deleteUserFeild());
                // toast.error("Xóa user thất bại !");
                toast.success("Xóa user thành công !");
            }
        } catch (error) {
    
            dispatch(deleteUserFeild());
            // console.log(error);
        }
    }
    
}

export const deleteUserSuccess = () =>({
    type: actionTypes.DELETE_USER_SUCCESS,
    
})

export const deleteUserFeild = () =>({
    type: actionTypes.DELETE_USER_FAILED
})

//sửa USER REDUX
export const editUser =  (data) => {
    return async(dispatch, getState) =>{
        try {
           
            let res = await editUserService(data) ;
            // console.log('check create user redux', res);
            if(res && res.errCode === 0){
                // console.log('action role state:', getState);
                toast.success("Sửa user thành công !");
                dispatch(editUserSuccess());
                // dispatch(fecthAllUsersStart());
               
            }else{
                dispatch(editUserFeild());
                // toast.error("Xóa user thất bại !");
                toast.success("Xóa user thành công !");
            }
        } catch (error) {
    
            dispatch(editUserFeild());
            // console.log(error);
        }
    }
    
}

export const editUserSuccess = () =>({
    type: actionTypes.EDIT_USER_SUCCESS,
    
})

export const editUserFeild = () =>({
    type: actionTypes.EDIT_USER_FAILED
})