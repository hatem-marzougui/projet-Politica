import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import './AppNavbar.css';

import Register from "./auth/Register";
import Login from "./auth/Login";
import { Link } from "react-router-dom";
import { logout} from "../js/actions/authActions";
import { useHistory } from "react-router-dom";

const AppNavbar = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <Navbar className="d-flex justify-content-between"   style={{position: "fixed",top:"0",width:"100%" ,backgroundColor:'#34477c'}}>
     
      <NavbarBrand 
        tag={() => (
          <Link className="PL" style={{ textDecoration: "none", fontSize: "35px" }}
            to="/" >
           <i id='PL'> PoLitica</i> <i  className="fab fa-typo3" />
          </Link>
        )}
      />



      <Nav className="text-white">
        {isAuth ? (
          <Fragment>
            <NavItem className="p-2">
              <Button  onClick={() =>{dispatch(logout());history.push("/"); }}color="primary">
                Logout
              </Button>
            </NavItem>
            <NavItem className="p-2">
              <Button color="primary" >
                <Link className="Link" to="/dashboard" style={{color:'white'}}>Dashboard</Link>
              </Button>
            </NavItem>
          </Fragment>
        )
        
        
        : (
          <Fragment>
            <NavItem className="p-2">
              <Login />
            </NavItem>
            <NavItem className="p-2">
              <Register />
            </NavItem>
          </Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;