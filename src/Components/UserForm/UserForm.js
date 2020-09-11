import React, { Component } from "react";
import { getNames } from "country-list";
import { createUser } from "../../store/actions/userActions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import './UserForm.css';

class UserForm extends Component {
  state = {
    userName: "",
    userEmail: "",
    userPhone: "",
    userCountry: "",
    userDob: "",
    userImg: {},
  };

  handleChange = (ev) => {
    this.setState({
      [ev.target.id]: ev.target.value,
    });
  };

  handleFile = (ev) => {
    ev.preventDefault();
    const userImg = ev.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(userImg);
    this.setState({
      [ev.target.id]: userImg,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.createUser(this.state);
    // this.props.history.push("/users");
  };

  render() {
    return (
      <form className="user-form" name="userForm" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="userName"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="userEmail"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPhone">Phone number</label>
          <input
            type="tel"
            className="form-control form-control-sm"
            id="userPhone"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userCountry">Country</label>
          <select
            className="form-control"
            id="userCountry"
            onChange={this.handleChange}
          >
            {getNames().map((country) => {
              return (
                <option key={country.toLowerCase()} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="userDob">Date of birth</label>
          <input
            type="date"
            id="userDob"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userImg">Photo</label>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            className="form-control-file"
            id="userImg"
            onChange={this.handleFile}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
        <div className="Delete">
        <NavLink to="/users" className="btn btn-secondary">
        Users-Lists
      </NavLink>
        </div>
      
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
