import React from 'react';
import { Link } from 'react-router-dom';
import bullion from '../../../images/South Vietnamese Dong_1.png';
import exclusive from '../../../images/ISK_2.png';
import commemorative from '../../../images/Looney_1.png';

class Catalog extends React.Component {
  render = () => {
    return (
      <section className='main-catalog'>
        <Link to='/memorial'>
          <h2 className='catalog-header'>Bullion coins</h2>
          <p className='show-all'>Show all ></p>
          <img className='m-catalog-img' src={bullion} alt="bullion-coin"/>
        </Link>
        <Link to='/exclusive'>
          <h2 className='catalog-header'>Exclusive coins</h2>
          <p  className='show-all'>Show all ></p>
          <img className='m-catalog-img' src={exclusive} alt="exclusive-coin"/>
        </Link>
        <Link to='/invested'>
          <h2 className='catalog-header'>Commemorative coins</h2>
          <p  className='show-all'>Show all ></p>
          <img className='m-catalog-img' src={commemorative} alt="invested-coin"/>
        </Link>
      </section>
    );
  }
}

export default Catalog;