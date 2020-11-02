import React from 'react';
import  SidebarAdmin from './SidebarAdmin';
import {Route,Switch} from 'react-router-dom';
import PrivateRoute from '../route/PrivateRoute';

import HandleUsers from '../HandleUsers';
import HandlePoliticians from '../HandlePoliticians';
import HandleParties from '../HandleParties';
import HandleQuestions from '../HandleQuestions';
import HandlePoll from '../HandlePoll';

function AdminPage() {
    return (
        <div className="pageAdmin">
            
            <SidebarAdmin/>
            <section className="sidebar-content">
           <Switch>
          <PrivateRoute  path="/dashboard/users" component={HandleUsers}/>
          <PrivateRoute  path="/dashboard/politicians" component={HandlePoliticians}/>
          <PrivateRoute  path="/dashboard/parties" component={HandleParties}/>
          <PrivateRoute  path="/dashboard/questions" component={HandleQuestions}/>
          <PrivateRoute  path="/dashboard/poll" component={HandlePoll}/>
          </Switch>

</section>
        </div>
    )
}

export default AdminPage
