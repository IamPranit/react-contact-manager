import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, phone, email } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { number: "Phone number is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    const newContact = {
      name,
      phone,
      email
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    // Clear data
    this.setState({
      name: "",
      phone: "",
      email: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { name, phone, email, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 mt-2">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Number"
                    name="phone"
                    placeholder="Enter Number..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.number}
                  />

                  <TextInputGroup
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-primary btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
