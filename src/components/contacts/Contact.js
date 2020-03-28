import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  showOnClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  deleteOnClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users${id}`);

      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (error) {
      console.error(error, "JSON Placeholder Fake API doesn't let you delete");
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 mt-2">
              <h4>
                {" "}
                {name}{" "}
                <i
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                  onClick={this.showOnClick}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.deleteOnClick.bind(this, id, dispatch)}
                />
                <Link to={`/contacts/update/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    {" "}
                    Number: {phone.split(" ")[0]}{" "}
                  </li>
                  <li className="list-group-item"> Email: {email} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
