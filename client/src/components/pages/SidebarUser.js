import React from 'react'
import "./SidebarAdmin.css"
import { useSelector,useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { getPoliticians, getPresQuestions } from '../../js/actions/voteActions';
import { getParties,getLegisQuestions } from '../../js/actions/voteActions';



function SidebarUser() {
    const dispatch = useDispatch();
    const firstname = useSelector((state) => state.authReducer.user.firstname);
  
    const getP_inf =()=> { dispatch(getPoliticians());dispatch(getPresQuestions());};
    const getL_inf =()=> { dispatch(getParties()); dispatch(getLegisQuestions());};


    return (
       <>
   
  <div className="sidebar">
  
 <header> <i className="fas fa-user-circle"></i> {firstname}</header>
 <ul>
   <li><Link className="Link" to="/dashboard/presidential" onClick={getP_inf}> <i className="fas fa-qrcode"></i>Presidential vote</Link></li>
   <li><Link className="Link" to="/dashboard/legislative"  onClick={getL_inf}> <i className="fas fa-link"></i>Legislative vote</Link></li>
   <li><Link className="Link" to="/dashboard/presidResult" onClick={getP_inf}> <i className="fas fa-stream"></i>Presidential Result</Link></li>
   <li><Link className="Link" to="/dashboard/legisResult"  onClick={getL_inf}> <i className="fas fa-calendar-week"></i>Legislative Result</Link></li>
   <li><Link className="Link" to="#"> <i className="fas fa-question-circle"></i>contact us</Link></li>
 </ul>

</div>


  </>

      
    )
}

export default SidebarUser
