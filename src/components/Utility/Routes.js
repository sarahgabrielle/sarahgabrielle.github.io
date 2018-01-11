import React from 'react';
// import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import Body from '../Main/Body';
import Project1 from '../Projects/Project1';
import Project2 from '../Projects/Project2';
import Project3 from '../Projects/Project3';
import Project4 from '../Projects/Project4';

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Body} />
      <Route path='/Project1' component={Project1} />
      <Route path='/Project2' component={Project2} />
      <Route path='/Project3' component={Project3} />
      <Route path='/Project4' component={Project4} />
    </Switch>
  );
};

export default Routes;
