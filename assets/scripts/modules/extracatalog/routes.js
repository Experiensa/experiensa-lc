import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import Voyage from '../voyage/Index';

let siteUrl = experiensa_vars.siteurl.replace('http://','')+'/extra-catalogue/';
siteUrl = siteUrl.replace('localhost', '');
siteUrl = siteUrl.replace('indalo.experiensa.com', '');
const MainRoute = siteUrl;
const voyageUrl = MainRoute+'voyage/:id';
console.log('MainRoute', MainRoute);
console.log('voyageUrl', voyageUrl);
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
