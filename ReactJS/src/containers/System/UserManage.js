import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from "./ModalUser";
import "./UserManage.scss";
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emiter';


class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModal: false,
      isOpenModalEditUser: false,
      userEdit: {}
    };
  }
  getAllUsersFromReact = async () => {
    let response = await getAllUsers('ALL');
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users
      })
    }
  }
  async componentDidMount() {
    // console.log('aa',this.getAllUsersFromReact());
    await this.getAllUsersFromReact();
  }


  handleAddNewUser = () => {
    this.setState({
      isOpenModal: true
    })
  }
  handleCloseModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal
    })
  }

  handleCloseModalEditUser = () => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser
    })
  }

  createNewUser = async (data) => {
    try {
      let reponse = await createNewUserService(data);
      if (reponse && reponse.errCode === 0) {
        this.setState({
          isOpenModal: !this.state.isOpenModal
        })
        await this.getAllUsersFromReact()
        emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })
      }
      else {
        alert(reponse.errMessage);
      }
      // console.log('check data cha', reponse);
    } catch (error) {
      console.log(error);
    }
    window.location.reload()
  }

  handleDeleteUser = async (user) => {

    try {
      let res = await deleteUserService(user.id)
      if (res && res.errCode === 0) {
        await this.getAllUsersFromReact()
      } else {
        alert(res.errMessage);
      }
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  handleEditUser = (user) => {
    // console.log('edit user', user);
    this.setState({
      isOpenModalEditUser: true,
      userEdit: user
    })
  }

  doEditUser = async (user) => {
    try {
      let res = await editUserService(user)
      if (res && res.errCode === 0) {
        this.setState({
          isOpenModalEditUser: false,
        })
        await this.getAllUsersFromReact()
      } else {
        alert(res.errMessage);
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let arrUser = this.state.arrUsers
    // console.log(arrUser,'aaaa');
    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModal}

          isClose={this.handleCloseModal}
          createNewUser={this.createNewUser}
        />
        {this.state.isOpenModalEditUser &&
          <ModalEditUser
            isOpen={this.state.isOpenModalEditUser}

            isClose={this.handleCloseModalEditUser}
            currentUser={this.state.userEdit}
            EditUser={this.doEditUser}
          />
        }
        <div className="title text-center">
          Manage with users
        </div>
        <div className="mx-1">
          <button onClick={() => this.handleAddNewUser()} className="btn btn-primary px-3"><i className="fa fa-plus" style={{ marginRight: '10px' }}></i>Add new user</button>
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <thead>
              <tr>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                arrUser && arrUser.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() => this.handleEditUser(item)}
                        ><i className="fa fa-edit"></i></button>
                        <button
                          className="btn-delete"
                          onClick={() => { this.handleDeleteUser(item) }}
                        ><i className="fa fa-trash"></i></button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>


          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
