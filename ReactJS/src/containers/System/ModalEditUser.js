

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import _ from 'lodash'
import UserManage from './UserManage';
class ModalEditUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
        id: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
    }
    
  }
  

  componentDidMount() {
    let editUser = this.props.currentUser
//    console.log('ditmount edit modal', this.props.currentUser);
if(editUser && !_.isEmpty(editUser)){
    this.setState({
        id : editUser.id,
        email : editUser.email,
        password: 'hasjcode',
      firstName: editUser.firstName,
      lastName: editUser.lastName,
      address: editUser.address,
    })
}
   
  }

  toggle = () => {
    this.props.isClose();
  }

  handleOnChangeInput = (event, id) => {
    //good code
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState
    }, () => {
      // console.log('check bad state', this.state);
    })
    // console.log(copyState);
  }
  checkValidateInput = () =>{
    let isValid = true;
    let arrInput = ['email','password','firstName','lastName','address']
    for(let i =0; i < arrInput.length; i++){
      if(!this.state[arrInput[i]]){
        isValid = false;
        alert('không được bỏ trống trường : '  + arrInput[i]);
        break;
      }
    }return isValid;
  }
  handleAddSaveUser = () => {
    let isValid = this.checkValidateInput();
    if(isValid === true){
      //call API create modal
      // console.log('datamodal', this.state);
      // console.log(this.props.createNewUser());
      this.props.EditUser(this.state)
    }
    // console.log('datamodal', this.state);
  }
  render() {
    console.log('check child props edit', this.props);
    // console.log('check child modal', this.props.isOpen);
    // console.log('check child modal', this.props.isOpen);
    
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        size='lg'
        className='modal-user-container'
      >
        <ModalHeader
          className='modal-title'
          toggle={() => this.toggle()}
        >
          Modal edit user
        </ModalHeader>
        <ModalBody>

          <div className='modal-user-body'>
            <div className='input-container'>
              <label>Email</label>
              <input
                type='text'
                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                value={this.state.email}
                disabled
              />
            </div>
            <div className='input-container'>
              <label>Password</label>
              <input
                type='password'
                onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                value={this.state.password}
                disabled
              />
            </div>
            <div className='input-container'>
              <label>firstName</label>
              <input
                type='text'
                onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                value={this.state.firstName}
              />
            </div>
            <div className='input-container'>
              <label>lastName</label>
              <input
                type='text'
                onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                value={this.state.lastName}
              />
            </div>
            <div className='input-container max-with-input'>
              <label>Address</label>
              <input
                type='text'
                onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary"
            onClick={() => this.handleAddSaveUser()}
            className="px-3"
          >
           Save
          </Button>{' '}
          <Button
            color="secondary"
            onClick={() => this.toggle()}
            className="px-3"
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
  }

}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
