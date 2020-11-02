import React from 'react'
import "./SidebarAdmin.css"
import { useSelector,useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { getPresQuestions } from '../../js/actions/voteActions';
import { getLegisQuestions } from '../../js/actions/voteActions';
import { getPoliticians, getUsers ,getParties} from '../../js/actions/adminActions';

function SidebarAdmin() {

  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.authReducer.user.firstname);
  const lastname = useSelector((state) => state.authReducer.user.lastname);

  const getQuestions =()=> { dispatch(getPresQuestions());dispatch(getLegisQuestions());};
  const getAllUsers =()=> { dispatch(getUsers());};
  const getAllPoliticians =()=> { dispatch(getPoliticians());};
  const getAllParties =()=> { dispatch(getParties());};
    return (
       <>
   
  <div className="sidebar">
    
  <header>  <i className="fas fa-user-circle"></i> {firstname}</header>
 <ul>
   <li><Link className="Link" to="/dashboard/users" onClick={getAllUsers}> <i className="fas fa-qrcode"></i>Users</Link></li>
   <li><Link className="Link" to="/dashboard/politicians" onClick={getAllPoliticians}> <i className="fas fa-link"></i>Politicians</Link></li>
   <li><Link className="Link" to="/dashboard/parties" onClick={getAllParties} > <i className="fas fa-stream"></i>P.Parties</Link></li>
   <li><Link className="Link" to="/dashboard/questions" onClick={getQuestions}> <i className="fas fa-calendar-week"></i>Questions</Link></li>
   
   

 </ul>
</div>


  </>

      
    )
}

export default SidebarAdmin
