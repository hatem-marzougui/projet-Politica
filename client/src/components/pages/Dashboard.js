import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import AdminPage from "./AdminPage";
import './AdminPage.css';
import UserPage from "./UserPage";
import './UserPage.css';

const Dashboard = () => {
  const role = useSelector((state) => state.authReducer.user.role);
  const user = useSelector((state) => state.authReducer.user);
  if (!user) {
    return <h1>Spinner.....</h1>;
  }
  return (
    <Fragment>
   {role ? (<AdminPage/>):(<UserPage/>)}
  </Fragment>
    
  );
};

export default Dashboard;