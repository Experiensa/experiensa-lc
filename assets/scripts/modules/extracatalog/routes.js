import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './components';
import Voyage from '../voyage/Index';

const Routes = ({options, filters }) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/experiensa/" render={() => <Index options={options} filters={filters} />} />
        <Route path="/experiensa/voyage/:id" render={({ match })=><Voyage options={options} filters={filters} match={match} />}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
