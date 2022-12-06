import React, { Component } from "react";
import { connect } from "react-redux";
import "../../UserManage.scss";
import * as actions from '../../../../store/actions'

class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        };
    }

    componentDidMount() {
        this.props.fecthUserRedux()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.listUsers !== this.props.listUsers){
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (item) =>{
        // console.log('user deleete', item);
        if(item.id){
           
                this.props.deleteUserRedux(item.id)
            
           
        }

        setTimeout(() =>{
            this.props.fecthUserRedux()
        },1000)
        
    }

    handleUpdateUser = (data) =>{
        this.props.current(data)
        // console.log('user update', data);
    }
    render() {
        // console.log('user admin redux', this.props.listUsers);
        // console.log('user admin check state', this.state.usersRedux);
        let users = this.props.listUsers
        return (
            <div className="users-container">

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
                            {users &&
                                users.map((item, index) => {
                                    return (
                                        <tr key={index} >
                                            <td>{item.email} </td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button
                                                    className="btn-edit"
                                                    onClick={()=>this.handleUpdateUser(item)}
                                                ><i className="fa fa-edit"></i></button>
                                                <button
                                                    className="btn-delete"
                                                    onClick={()=>this.handleDeleteUser(item)}
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
    return {
        listUsers: state.admin.allUsers,
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fecthUserRedux: () => dispatch(actions.fecthAllUsersStart()),
        deleteUserRedux : (id) => dispatch(actions.deleteUser(id)),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
