import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllcodeService } from '../../../services/userService'
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions'
import './UserRedux.scss'


import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgUrl: [],
            isOpen:false,
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
            this.setState({
                genderArr: this.props.genderRedux
            })
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }

        if (prevProps.positionRedux !== this.props.positionRedux) {

            this.setState({
                positionArr: this.props.positionRedux
            })
        }

    }

    handleOnChangeImage = (event) => {

        let data = event.target.files;
        let file = data[0]

        if (file) {
            let ObjectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgUrl: ObjectUrl
            })
        }


    }

    onpenPreviewsImgae = () =>{
        if(!this.state.previewImgUrl) return;
        this.setState({
            isOpen: true
        })
    }
    render() {
        console.log('log check props from redux', this.state);
        let genders = this.state.genderArr
        let roles = this.state.roleArr
        let positions = this.state.positionArr
        let language = this.props.language
        let isLoadingGender = this.props.isLoadingGender;
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
                                <input type='email' className='form-control' />
                            </div>
                            <div className='col-3'>
                                <label>Password</label>
                                <input type='password' className='form-control' />
                            </div>
                            <div className='col-3'>
                                <label>First name</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-3'>
                                <label>Last name</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-3'>
                                <label>Phone number</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-9'>
                                <label>Address</label>
                                <input type='text' className='form-control' />
                            </div>

                            <div class="form-group col-3">
                                <label for="inputState">Gender</label>
                                <select id="inputState" class="form-control">
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div class="form-group col-3">
                                <label for="inputState">Position</label>
                                <select id="inputState" class="form-control">
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div class="form-group col-3">
                                <label for="inputState">RoleId</label>
                                <select id="inputState" class="form-control">
                                    {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
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
                                        onClick={(()=>this.onpenPreviewsImgae())}
                                    ></div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-primary'>Save</button>
                            </div>
                        </div>

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
        positionRedux: state.admin.positions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fecthGenderStart()),

        getPositionStart: () => dispatch(actions.fecthPositionStart()),

        getRoleStart: () => dispatch(actions.fecthRoleStart()),
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguegeAppRedux: (language) => dispatch(actions.changeLanguegeApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
