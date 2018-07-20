import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import MainContainer from './components/MainContainer';

const App = ({ history, options, filters }) => {
  console.log( 'App datos', history, options, filters);
  return (
    <ConnectedRouter history={history}>
      <MainContainer options={options} filters={filters} />
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;
