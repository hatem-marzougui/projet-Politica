import React,{useEffect} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import AppNavbar from './components/AppNavbar';
import {getAuthUser} from "./js/actions/authActions";
import PrivateRoute from './components/route/PrivateRoute'
import Home from "./components/pages/Home";
import Result from "./components/pages/Result";
import Dashboard from "./components/pages/Dashboard";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => { getUser();}, []);
  return <BrowserRouter>
  <AppNavbar/>
  <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/result" component={Result}/>
           <PrivateRoute path="/dashboard" component={Dashboard}/> 
  </Switch>


  </BrowserRouter>
   
}

export default App;
