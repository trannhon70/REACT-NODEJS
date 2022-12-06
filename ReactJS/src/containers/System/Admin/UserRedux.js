import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS } from '../../../utils';
import * as actions from '../../../store/actions'
import './UserRedux.scss'


import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TabaleManageUser from './TableManage/TabaleManageUser';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgUrl: [],
            isOpen: false,
            action: '',
            userEditId: '',

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: ''
        }

    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();

        // try {
        //     let res = await getAllcodeService('gender');
        //     console.log('user check reudx res', res);
        //     if(res && res.errCode === 0){
        //         this.setState({
        //             genderArr: res.data,
        //         })
        //         console.log('this state', this.state);
        //     }

        // } catch (error) {
        //     console.log(error);
        // }   
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //render => didupdate
        // hiện tại và quá khứ 

        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGender = this.props.genderRedux
            this.setState({
                genderArr: this.props.genderRedux,
                gender: arrGender && arrGender.length > 0 ? arrGender[0].key : ''
            })
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux
            this.setState({
                roleArr: this.props.roleRedux,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : ''
            })
        }

        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPosition = this.props.positionRedux
            this.setState({
                positionArr: this.props.positionRedux,
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].key : ''
            })
        }

        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGender = this.props.genderRedux
            let arrRoles = this.props.roleRedux
            let arrPosition = this.props.positionRedux
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGender && arrGender.length > 0 ? arrGender[0].key : '',
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].key : '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
            })
        }

    }

    handleOnChangeImage = (event) => {

        let data = event.target.files;
        let file = data[0]

        if (file) {
            let ObjectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgUrl: ObjectUrl,
                avatar: file
            })
        }


    }

    onpenPreviewsImgae = () => {
        if (!this.state.previewImgUrl) return;
        this.setState({
            isOpen: true
        })
    }

    onChangeInput = (e, id) => {
        // email:'',
        //     password:'',
        //     firstName:'',
        //     lastName:'',
        //     PhoneNumber:'',
        //     address:'',
        //     gender:'',
        //     position:'',
        //     role:'',
        //     avatar:''

        let copyState = { ...this.state }
        copyState[id] = e.target.value;
        this.setState({
            ...copyState
        }
        )
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address'];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                // eslint-disable-next-line no-unused-vars
                isValid = false;
                alert('không được bỏ trống trường : ' + arrCheck[i])
                break;
            }
        }
        return isValid;
    }
    handleSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return;
        let { action } = this.state
        if (action === CRUD_ACTIONS.CREATE) {
            //fire redux action 
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
            })
        }

        if (action === CRUD_ACTIONS.EDIT) {
            //fire redux action edit 
            this.props.editUserRedux({
                id:this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
            })

        }
        // console.log('check cubmit', this.state);
        setTimeout(() => {
            this.props.fecthUserRedux()
        }, 1000)

    }

    handleEditUserFromParent = (user) => {
        // console.log('check handle paren edit usser', user);

        this.setState({
            email: user.email,
            password: 'hashcode',
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
            gender: user.gender,
            role: user.roleId,
            position: user.positionId,
            avatar: '',
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id
        })
    }

    render() {
        // console.log('log check props from redux', this.state);
        let genders = this.state.genderArr
        let roles = this.state.roleArr
        let positions = this.state.positionArr
        let language = this.props.language
        let isLoadingGender = this.props.isLoadingGender;
        let { email, password, firstName, lastName, phoneNumber, address, gender, position, role, avatar } = this.state
        return (
            <div className="user-redux-container" >
                <div className='title'>
                    UserRedux kevin
                </div>
                {/* loading */}
                <div className='col-12'>
                    {isLoadingGender === true ? 'Loading gender' : ''}
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>Thêm người dùng</div>
                            <div className='col-3'>
                                <label>Email</label>
                                <input type='email' className='form-control'
                                    value={email}
                                    onChange={(e) => { this.onChangeInput(e, 'email') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Password</label>
                                <input type='password' className='form-control'
                                    value={password}
                                    onChange={(e) => { this.onChangeInput(e, 'password') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                />
                            </div>
                            <div className='col-3'>
                                <label>First name</label>
                                <input type='text' className='form-control'
                                    value={firstName}
                                    onChange={(e) => { this.onChangeInput(e, 'firstName') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Last name</label>
                                <input type='text' className='form-control'
                                    value={lastName}
                                    onChange={(e) => { this.onChangeInput(e, 'lastName') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Phone number</label>
                                <input type='text' className='form-control'
                                    value={phoneNumber}
                                    onChange={(e) => { this.onChangeInput(e, 'phoneNumber') }}
                                />
                            </div>
                            <div className='col-9'>
                                <label>Address</label>
                                <input type='text' className='form-control'
                                    value={address}
                                    onChange={(e) => { this.onChangeInput(e, 'address') }}
                                />
                            </div>

                            <div class="form-group col-3">
                                <label for="inputState">Gender</label>
                                <select id="inputState" class="form-control"
                                    value={gender}
                                    onChange={(e) => { this.onChangeInput(e, 'gender') }}
                                >
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div class="form-group col-3">
                                <label for="inputState">Position</label>
                                <select id="inputState" class="form-control"
                                    onChange={(e) => { this.onChangeInput(e, 'position') }}
                                    value={position}
                                >
                                    {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div class="form-group col-3">
                                <label for="inputState">RoleId</label>
                                <select id="inputState" class="form-control"
                                    onChange={(e) => { this.onChangeInput(e, 'role') }}
                                    value={role}
                                >
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div class="form-group col-3">
                                <label>Image</label>
                                <div className='preview-img-container'>
                                    <input id='previewImg' type='file' hidden
                                        onChange={(envent) => this.handleOnChangeImage(envent)}
                                    />
                                    <label className='label-upload' htmlFor='previewImg'>Tải ảnh<i className="fa fa-cloud-upload-alt"></i></label>
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImgUrl})` }}
                                        onClick={(() => this.onpenPreviewsImgae())}
                                    ></div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <button
                                    className={this.state.action === CRUD_ACTIONS.EDIT ? 'btn btn-warning' : 'btn btn-primary'}
                                    onClick={() => this.handleSaveUser()}>
                                    {
                                        this.state.action === CRUD_ACTIONS.EDIT ? 'Sửa' : 'Lưu'
                                    }
                                </button>
                            </div>
                        </div>
                        <div className='col-12 mb-5' ><TabaleManageUser
                            current={this.handleEditUserFromParent}
                            action={this.state.action}
                        /></div>
                    </div>
                </div>

                {
                    this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgUrl}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,

        isLoadingGender: state.admin.isLoadingGender,

        genderRedux: state.admin.gender,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,

        listUsers: state.admin.allUsers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fecthGenderStart()),

        getPositionStart: () => dispatch(actions.fecthPositionStart()),

        getRoleStart: () => dispatch(actions.fecthRoleStart()),

        // eslint-disable-next-line no-undef
        createNewUser: (data) => dispatch(actions.createNewUser(data)),

        fecthUserRedux: () => dispatch(actions.fecthAllUsersStart()),

        editUserRedux: (data) => dispatch(actions.editUser(data))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
