import actionTypes from './actionTypes';
import {getAllcodeService} from '../../services/userService'

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