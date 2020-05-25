// Libraries:
import React from 'react';
import { Route } from 'react-router-dom';

// Pages: 
import Homepage from './pages/Homepage';
import ListOfCoins from './pages/ListOfCoins';
import AdminLogin from './pages/AdminLogin';
import CoinInfo from './pages/CoinInfo';
import AdminPanel from './pages/AdminPanel';
import CoinEdit from './pages/CoinEdit';
import CoinCreate from './pages/CoinCreate';

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/catalog/:type' component={ListOfCoins} />
        <Route exact path='/admin' component={AdminLogin} />
        <Route exact path='/admin/panel' component={AdminPanel} />
        <Route exact path='/admin/create' component={CoinCreate} />
        <Route exact path='/admin/edit/:id' component={CoinEdit} />
        <Route exact path='/coins/:id' component={CoinInfo} />
      </div>
    );
  }
}

export default App;