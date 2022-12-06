const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //admin
    ADMIN_LOGIN_SUCCESS: 'ADMIN_LOGIN_SUCCESS',
    ADMIN_LOGIN_FAIL: 'ADMIN_LOGIN_FAIL',
    FECTH_GENDER_START : 'FECTH_GENDER_START',
    FECTH_GENDER_SUCCESS:'FECTH_GENDER_SUCCESS',
    FECTH_GENDER_FAIDED :'FECTH_GENDER_FAIDED',

    FECTH_POSITION_START :'FECTH_POSITION_START',
    FECTH_POSITION_SUCCESS :'FECTH_POSITION_SUCCESS',
    FECTH_POSITION_FAIDED :'FECTH_POSITION_FAIDED',

    FECTH_ROLE_START :'FECTH_ROLE_START',
    FECTH_ROLE_SUCCESS :'FECTH_ROLE_SUCCESS',
    FECTH_ROLE_FAIDED :'FECTH_ROLE_FAIDED',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',
    USER_LOGIN_FAIL:'USER_LOGIN_FAIL',

    //tạo user redux
    CREAT_USER_SUCCESS :'CREAT_USER_SUCCESS',
    CREAT_USER_FAILED :'CREAT_USER_FAILED',

     //xóa user redux
     DELETE_USER_SUCCESS :'DELETE_USER_SUCCESS',
     DELETE_USER_FAILED :'DELETE_USER_FAILED',

     //sửa user redux
     EDIT_USER_SUCCESS :'EDIT_USER_SUCCESS',
     EDIT_USER_FAILED :'EDIT_USER_FAILED',

    //fecth all user redux
    FETCH_ALL_USER_START :'FETCH_ALL_USER_START',
    FETCH_ALL_USER_SUCCESS :'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAILED :'FETCH_ALL_USER_FAILED',

})

export default actionTypes;