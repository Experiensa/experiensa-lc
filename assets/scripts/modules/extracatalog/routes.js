import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './components';
import TestContainer from './components/TestContainer';

const Routes = ({options, filters }) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/experiensa/" render={() => <Index options={options} filters={filters} />} />
        <Route path="/experiensa/voyage/:id" render={({ match })=><TestContainer options={options} filters={filters} match={match} />}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
