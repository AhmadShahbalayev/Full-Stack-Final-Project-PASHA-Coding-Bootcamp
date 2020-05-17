import React from 'react';
import { Route } from 'react-router-dom';
import Home from './homepage/Home';

class App extends React.Component {
  render = () => {
    return (
      <>
        <Route exact path='/' component={Home} />
      </>
    );
  }
}

export default App;