import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import Voyage from '../voyage/Index';
import {getRoutes} from '../../util/Url';

const {mainRoute, voyageUrl} = getRoutes();
const Routes = ({options, filters }) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={mainRoute} render={() => <Index options={options} filters={filters} />} />
        <Route path={voyageUrl} render={({ match })=><Voyage options={options} filters={filters} match={match} />}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
