import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {getAllUsers} from '../../services/userService'
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        arrUsers: []
    };
  }

  async componentDidMount() {
    let response = await getAllUsers('ALL');
    if(response && response.errCode === 0){
        this.setState({
            arrUsers: response.users
        })
    }
  }

  render() {
    let arrUser = this.state.arrUsers
    console.log(arrUser,'aaaa');
    return (
      <div className="users-container">
        <div className="title text-center">
            Manage with users
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
            {
                arrUser && arrUser.map((item, index)=>{
                    return (
                        <tr key={index}>
                            <td>{item.email}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.address}</td>
                            <td>
                                <button className="btn-edit"><i class="fa fa-edit"></i></button>
                                <button className="btn-delete"><i class="fa fa-trash"></i></button>
                            </td>
                        </tr>
                    )
                })
            }
            
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
