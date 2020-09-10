import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../store/actions/userActions";
import logo from "../../logo.svg";
import { NavLink } from "react-router-dom";

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [],
      users: this.props.users,
    };
    // this.deleteUser = this.props.deleteUser;
    
  }
  
  deleteUser = (user) => {
    this.props.deleteUser(user)
      this.setState({
        users: [...this.props.users]
      })   
    console.log(user);
    }
  
  
//  componentDidMount(users) {
//   users  = this.props.users
//   console.log(users)
    
//     this.setState({
//       users: users
//     })
  
//  }

  objToImg = (imgObj) => {
    if (!!imgObj === false) {
      return logo;
    }
    return URL.createObjectURL(imgObj);
  };

  filterUsers = (ev) => {
    let val = ev.target.value.toLowerCase();
    if (val === "") {
      this.setState({
        users: this.props.users,
      });
      return;
    }
    let filteredUsers = this.props.users.filter((user) => {
      return user.userName.toLowerCase().includes(val);
    });
    this.setState({
      users: filteredUsers,
    });
  };
  
 

  // deleteUser = (user) => {
  //   let newUsers = users.filter((usrToDel) => {
  //     return (
        // user.userName !== usrToDel.userName &&
  //       user.userEmail !== usrToDel.userEmail
  //     );
  //   });
  //   setUsers(newUsers);
  // };
  render() {
    let { users } = this.state;
    console.log(users);
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="searchInput">Search</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="searchInput"
              placeholder="Search by name"
              onChange={(ev) => this.filterUsers(ev)}
            />
          </div>
        </form>
        <div className="table-responsive">
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Country</th>
                <th scope="col">DOB</th>
                <th scope="col">User photo</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.userPhone + user.userName}>
                    <td>
                      <div className="form-group form-check">
                        <label htmlFor="">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </td>
                    <td>{user.userName} </td>
                    <td> {user.userEmail} </td>
                    <td> {user.userPhone} </td>
                    <td>{user.userCountry} </td>
                    <td>{user.userDob}</td>
                    <td>
                      <img
                        src={this.objToImg(user.userImg)}
                        className="img-fluid"
                        alt="profile"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                          this.deleteUser(user);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <NavLink className="btn btn-secondary" to="/userform">
          Go to form
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // const newUsers = state.user.users;
  // console.log(newUsers);
  return {
    users: state.user.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (user) => dispatch(deleteUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
