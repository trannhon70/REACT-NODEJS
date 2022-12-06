import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    gender: [],
    roles: [],
    positions: [],
    allUsers: [],
}

const adminReducer = (state = initialState, action) => {

    switch (action.type) {
        //gender
        case actionTypes.FECTH_GENDER_START:
            // let copyState = {...state};
            state.isLoadingGender = true;
            // console.log('fire fecth gender start:', action);
            return {
                ...state,

            }
        case actionTypes.FECTH_GENDER_SUCCESS:
            // const state = {...state};
            state.gender = action.data;
            state.isLoadingGender = false;
            // console.log('fire fecth gender success:', action);

            return {
                ...state,

            }
        case actionTypes.FECTH_GENDER_FAIDED:
            state.isLoadingGender = false;
            state.gender = [];
            // console.log('fire fecth gender faided:', action);

            return {
                ...state,

            }

        //position
        case actionTypes.FECTH_POSITION_START:
            // let copyState = {...state};
            // state.isLoadingGender = true;
            // console.log('fire fecth gender start:', action);
            return {
                ...state,

            }
        case actionTypes.FECTH_POSITION_SUCCESS:
            state.positions = action.data;
            // console.log('fire fecth gender success:', action);
            return {
                ...state,

            }
        case actionTypes.FECTH_POSITION_FAIDED:
            state.positions = [];
            // console.log('fire fecth gender faided:', action);
            return {
                ...state,
            }

        //Role
        case actionTypes.FECTH_ROLE_START:
            // let copyState = {...state};
            // state.isLoadingGender = true;
            // console.log('fire fecth gender start:', action);
            return {
                ...state,

            }
        case actionTypes.FECTH_ROLE_SUCCESS:
            state.roles = action.data;
            // console.log('fire fecth gender success:', action);
            return {
                ...state,

            }
        case actionTypes.FECTH_ROLE_FAIDED:
            state.roles = [];
            // console.log('fire fecth gender faided:', action);
            return {
                ...state,
            }

        //fecth all user redux 
        case actionTypes.FETCH_ALL_USER_SUCCESS:
            state.allUsers = action.users;
            // console.log('fire fecth gender faided:', action);
            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_USER_FAILED:
            state.allUsers = [];
            // console.log('fire fecth gender faided:', action);
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;