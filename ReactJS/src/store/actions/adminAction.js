import actionTypes from './actionTypes';
import {getAllcodeService} from '../../services/userService'

// export const fecthGenderStart = () => ({
//     type: actionTypes.FECTH_GENDER_START
// })

export const fecthGenderStart =  () => {
    return async(dispatch, getState) =>{
        try {
            let res = await getAllcodeService('gender');
            if(res && res.errCode === 0){
                console.log('action get state:', getState);
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
