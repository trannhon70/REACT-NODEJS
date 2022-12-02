

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import {emitter} from "../../utils/emiter"
class ModalUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
    }
    this.listenEmiiter()
  }
  listenEmiiter() {
    emitter.on('EVENT_CLEAR_MODAL_DATA',data => {
      // console.log('listen emiter:', data);
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
      }
    })
  }

  componentDidMount() {
    console.log();
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
  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if(isValid === true){
      //call API create modal
      // console.log('datamodal', this.state);
      // console.log(this.props.createNewUser());
      this.props.createNewUser(this.state)
    }
    // console.log('datamodal', this.state);
  }
  render() {
    // console.log('check child props', this.props);
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
          Modal title
        </ModalHeader>
        <ModalBody>

          <div className='modal-user-body'>
            <div className='input-container'>
              <label>Email</label>
              <input
                type='text'
                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                value={this.state.email}
              />
            </div>
            <div className='input-container'>
              <label>Password</label>
              <input
                type='password'
                onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                value={this.state.password}
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
            onClick={() => this.handleAddNewUser()}
            className="px-3"
          >
            Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
