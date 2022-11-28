import { push } from "connected-react-router";
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
// import * as actions from "../store/actions";

import './Login.scss';
import {handleLoginApi} from '../../services/userService';


class Login extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password: '',
            isShowPassword: false,
            errMessge:''
        }
    }

    handlOnChangeUsername = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    handlOnChangePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }
    handlLogin = async () =>{
        // alert('kevin')
        this.setState({
            errMessge:''
        })
        try {
  
           let data = await  handleLoginApi(this.state.username, this.state.password)
            // console.log('aaa',data);
            if(data && data.errCode !== 0){
                this.setState({
                    errMessge: data.message
                })
            }
            if(data && data.errCode === 0){
                // eslint-disable-next-line no-undef
                this.props.userLoginSucess(data.user)
                // console.log('login seccess');
                alert('đăng nhập thành công');
                return;
            }
        } catch (error) {
            // console.log('kevin',error.response);
            if(error.response){
                if(error.response.data){
                     this.setState({
                errMessge: error.response.data.message
            })
                }
            }
           
        }
        
    }

    handlShowHidePassword = () =>{
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return(
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 login-text">
                            Login
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Username :</label>
                           
                            <input type="email" 
                                className="form-control" 
                                placeholder="enter your username"
                                value={this.state.username}
                                onChange={(event)=>this.handlOnChangeUsername(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password :</label>
                            <div className="custom-input-username">
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                    className="form-control" 
                                    placeholder="enter your password"
                                    value={this.state.password}
                                    onChange={(event)=>this.handlOnChangePassword(event)}
                                />
                                <span onClick={() => {this.handlShowHidePassword()}}>
                                    <i className={!this.state.isShowPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>                           
                                </span>
                            </div>
                            
                        </div>
                        <div className="col-12" style={{color:'red'}}>
                            {this.state.errMessge}
                        </div>
                        <div className="col-12 ">
                            <button className="login-btn" onClick={()=>{this.handlLogin()}}>Login</button>
                        </div>
                        
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password ?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login">Or login with</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        )

        
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSucess: (userInfo) => dispatch(actions.userLoginSucess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
