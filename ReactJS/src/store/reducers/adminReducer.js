import actionTypes from '../actions/actionTypes';

const initialState = {
    gender:[],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FECTH_GENDER_START:
            console.log('fire fecth gender start:' ,action);
            return {
                ...state,

            }
        case actionTypes.FECTH_GENDER_SUCCESS:
            let copyState = {...state};
            copyState.gender = action.data;
            console.log('fire fecth gender success:' ,copyState);

            return {
                ...copyState,

            }
        case actionTypes.FECTH_GENDER_FAIDED:
            console.log('fire fecth gender faided:' ,action);

            return {
                ...state,

            }
        default:
            return state;
    }
}

export default adminReducer;