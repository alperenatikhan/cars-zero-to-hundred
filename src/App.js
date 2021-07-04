import React, { useEffect, useState } from 'react';
import './style.css';
import CarCard from './CarCard.js';
import Loader from 'react-js-loader';


export default function App() {
  let [carList, setCarList] = useState(false);

  function fetchApi(url) {
    fetch(url)
      .then(data => data.json())
      .then(fetchList => setCarList(fetchList));
  }

  useEffect(
    () =>
      fetchApi(
        'https://my-json-server.typicode.com/alperenatikhan/cars-zero-to-hundred-api/cars'
      ),
    []
  );

  return (
    <div>
      <h1>Zero To Hundred</h1>

      <div className="container">
        <div className="row" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"space-around"}} >
          {carList ? (
              carList.map(item => <CarCard item={item} key={item.modelName} />)
          
          ) : (
            <div
              style={{
                margin: '10% 25%'
              }}
            >
              <Loader type="hourglass" bgColor={'orangered'} size={300} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
