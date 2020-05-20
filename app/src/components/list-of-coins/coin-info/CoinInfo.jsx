import React from 'react';
import { connect } from 'react-redux';
import { getCoinById } from '../../../redux/actions';

class CoinInfo extends React.Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.getCoinById(id);
  }
  render = () => {
    const { name, fullDescription, country, metal, quality, value, year, weight, price} = this.props.coin;
    let nameInDB = `${name}`;
    nameInDB = nameInDB.replace(/\s+/g, "_");
    const URL1 = `http://localhost:5000/images/${nameInDB}_1.png`
    const URL2 = `http://localhost:5000/images/${nameInDB}_2.png`
    return (
      <div className="info-page">
        <div className='info-box'>
          <div className="img-box">
            <img src={URL1} alt={`${nameInDB}_obverse`}/>
            <img src={URL2} alt={`${nameInDB}reverse`}/>
          </div>
          <div className="info-textarea">
            <h1>{name}</h1>
            <p>{fullDescription}</p>

            <table>
              <tbody>

                <tr>
                  <td>Issuing country</td>                  
                  <td>{country}</td>
                </tr>

                <tr>
                  <td>Composition</td>                  
                  <td>{metal}</td>
                </tr>

                <tr>
                  <td>Quality</td>                  
                  <td>{quality}</td>
                </tr>

                <tr>
                  <td>Demonomination</td>                  
                  <td>{value}</td>
                </tr>

                <tr>
                  <td>Year</td>                  
                  <td>{year}</td>
                </tr>

                <tr>
                  <td>Weight</td>                  
                  <td>{weight}</td>
                </tr>

                <tr>
                  <td>Price</td>
                  <td>{price}</td>
                </tr>

              </tbody>
            </table>
            <button onClick={() => this.props.history.goBack()}>Back to the list</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coin: state.reducer.coin
  }
}

export default connect(mapStateToProps, { getCoinById })(CoinInfo);