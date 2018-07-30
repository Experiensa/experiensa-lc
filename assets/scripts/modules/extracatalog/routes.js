import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './components';
import Voyage from '../voyage/Index';

let siteUrl = experiensa_vars.siteurl.replace('http://','')+'/extra-catalogue/';
const MainRoute = siteUrl.replace('localhost','');
const voyageUrl = MainRoute+'voyage/:id';
console.log('MainRoute',MainRoute);
console.log('voyageUrl',voyageUrl);
const Routes = ({options, filters }) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={MainRoute} render={() => <Index options={options} filters={filters} />} />
        <Route path={voyageUrl} render={({ match })=><Voyage options={options} filters={filters} match={match} />}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;