import React from "react";
import "./App.css";
import users from "./Users.json";

class App extends React.Component {
  state = {
    userList: users,
    sortOrder: "",
  };

  handleSort = (data) => {
    const newSort = this.state.userList.sort((a, b) => {
      var nameA = a[data].toUpperCase();
      var nameB = b[data].toUpperCase();
        if (this.state.sortOrder !== "des") {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        } else {
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        }
      });
    const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des";
    this.setState({ userList: newSort, sortOrder: newSortOrder });
  };

  handleSortID = (data) => {
    const newSort = this.state.userList.sort((a, b) => {
        if (this.state.sortOrder !== "des") {
          return a[data] - b[data];
        } else {
          return b[data] - a[data];
        }
      });
    const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des";
    this.setState({ userList: newSort, sortOrder: newSortOrder });
  };

  render() {
    return (
      <>
      <nav className="navbar navbar-dark bg-dark">
      <h1 className="text-success">User Manager</h1>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" >Search</button>
        </form>
      </nav>
        <table className="table table-hover table-dark table-bordered">
          <thead>
            <tr className="bg-success">
              <th scope="col" onClick={() => this.handleSortID("id")}>
                User ID
              </th>
              <th scope="col" onClick={() => this.handleSort("first")}>
                First Name
              </th>
              <th scope="col" onClick={() => this.handleSort("last")}>
                Last Name
              </th>
              <th scope="col" onClick={() => this.handleSort("gender")}>
                Gender
              </th>
              <th scope="col" onClick={() => this.handleSort("email")}>
                E-Mail
              </th>
              <th scope="col" onClick={() => this.handleSort("phone")}>
                Phone
              </th>
              <th scope="col">Photo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userList.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.first}</td>
                <td>{user.last}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <img
                    src={user.picture.medium}
                    alt={user.first}
                    className="rounded img-fluid image-thumbnail"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
