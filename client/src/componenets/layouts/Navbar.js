import React, { useContext, Fragment } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Navbar = () => {
  const { logout, clearError, userAuth, user } = useContext(AuthContext);
  const onLogout = () => {
    logout();
    clearError();
  };

  const userLinks = (
    <Fragment>
      <li>Hello,{user && user.name}</li>
      <span className="sm-hide"></span>
      <li>
        <a href="#!" onClick={onLogout}>
          <span className="sm-hide">Logout</span>
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/register">
          <Button
            variant="outlined"
            style={{
              backgroundColor: "white",
              boxShadow: "0 1px 10px 1px violet ",
            }}
          >
            Register
          </Button>
        </Link>
      </li>
      <span className="sm-hide">|</span>
      <li>
        <Link to="/login">
          <Button
            variant="outlined"
            style={{
              color: "green",
              backgroundColor: "white",
              boxShadow: "0 1px 10px 1px blue ",
            }}
          >
            Login
          </Button>
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <div className="logo">
        <h2>
          <img src="wine.png" style={{ height: 30 }}></img>
          &nbsp; Invite &nbsp;
          <img src="wine.png" style={{ height: 30 }}></img>
        </h2>
        <h6>
          Made with <span>❤</span> by Siddhesh
        </h6>
      </div>
      <ul>{userAuth ? userLinks : authLinks}</ul>
    </div>
  );
};

export default Navbar;
