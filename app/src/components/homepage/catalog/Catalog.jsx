import React from 'react';

class Catalog extends React.Component {
  render = () => {
    return (
      <section className='main-catalog'>
        <div>
          Bullion coins
        </div>
        <div>
          Exclusive coins
        </div>
        <div>
          Commemorative coins
        </div>
      </section>
    );
  }
}

export default Catalog;