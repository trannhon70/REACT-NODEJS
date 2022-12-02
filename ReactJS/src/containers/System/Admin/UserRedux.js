import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllcodeService} from '../../../services/userService'
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions'

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }

    }

     async componentDidMount() {
        this.props.getGenderStart();
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

    componentDidUpdate(prevProps, prevState, snapshot){
        //render => didupdate
        // hiện tại và quá khứ 

        if(prevProps.genderRedux !== this.props.genderRedux){
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
    }

    render() {
        console.log('log check props from redux', this.props.genderRedux);
        let genders= this.state.genderArr
        let language = this.props.language
        return (
            <div className="user-redux-container" >
                <div className='title'>
                    UserRedux kevin 
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
                                        genders.map((item, index)=>{
                                            return(
                                                <option key={index} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn} </option>
                                            )
                                        })
                                    }
                                    
                                   
                                </select>
                            </div>
                            <div class="form-group col-3">
                                <label for="inputState">Position</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-3">
                                <label for="inputState">RoleId</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-3">
                                <label>Image</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-primary'>Save</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.gender,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fecthGenderStart())
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguegeAppRedux: (language) => dispatch(actions.changeLanguegeApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
