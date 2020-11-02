import React from 'react';
import  SidebarUser from './SidebarUser';
import {Route,Switch} from 'react-router-dom';
import PrivateRoute from '../route/PrivateRoute'

import LegisVote from '../LegisVote';
import PresidVote from '../PresidVote';
import PresidResult from '../PresidResult';
import LegisResult from '../LegisResult';


function UserPage() {
    return (
        <div className="pageUser">
              
            <SidebarUser/>
            <section className="sidebar-content">
                
                
               
               
<Switch>
          <PrivateRoute  path="/dashboard/presidential" component={PresidVote}/>
          <PrivateRoute  path="/dashboard/legislative" component={LegisVote}/>
          <PrivateRoute  path="/dashboard/presidResult" component={PresidResult}/>
          <PrivateRoute  path="/dashboard/legisResult" component={LegisResult}/>
          

          </Switch>

</section>
            
    )
        </div>
    )
}

export default UserPage
