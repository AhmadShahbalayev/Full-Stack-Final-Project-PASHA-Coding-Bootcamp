import React from 'react';
import { Route } from 'react-router-dom';
import Home from './homepage/Home';
import ListOfCoins from './list-of-coins/ListOfCoins';

class App extends React.Component {
  render = () => {
    return (
      <>
        <Route exact path='/' component={Home} />
        <Route exact path='/:type' component={ListOfCoins} />
      </>
    );
  }
}


export default App;