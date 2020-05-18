import React from 'react';
import { Route } from 'react-router-dom';
import Home from './homepage/Home';
import ListOfCoins from './list-of-coins/ListOfCoins';
import AdminLogin from './admin-panel/AdminLogin';
import Filter from './homepage/advanced-filter/Filter';
import AdminCE from './admin-panel/AdminCE';
import CoinInfo from './list-of-coins/coin-info/CoinInfo';

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/catalog/:type' component={ListOfCoins} />
        <Route exact path='/advanced-filter' component={Filter} />
        <Route exact path='/admin' component={AdminLogin} />
        <Route exact path='/admin/create-edit' component={AdminCE} />
        <Route exact path='/coins/:id' component={CoinInfo} />
      </div>
    );
  }
}


export default App;