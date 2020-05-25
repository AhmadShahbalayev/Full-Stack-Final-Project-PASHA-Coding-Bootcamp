import React from 'react';
import { Link } from 'react-router-dom';

class Catalog extends React.Component {
  render = () => {
    return (
      <section className='main-catalog'>
        <Link to='/catalog/memorial'>
          <h2 className='catalog-header'>Bullion coins</h2>
          <p className='show-all'>Show all ></p>
          <img className='m-catalog-img' src='/images/South_Vietnamese_Dong_1.png' alt="bullion-coin"/>
        </Link>
        <Link to='/catalog/exclusive'>
          <h2 className='catalog-header'>Exclusive coins</h2>
          <p  className='show-all'>Show all ></p>
          <img className='m-catalog-img' src='/images/ISK_2.png' alt="exclusive-coin"/>
        </Link>
        <Link to='/catalog/invested'>
          <h2 className='catalog-header'>Commemorative coins</h2>
          <p  className='show-all'>Show all ></p>
          <img className='m-catalog-img' src='/images/Looney_1.png' alt="invested-coin"/>
        </Link>
      </section>
    );
  }
}

export default Catalog;