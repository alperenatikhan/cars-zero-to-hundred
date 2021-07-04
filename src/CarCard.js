import React from 'react';
import FadeIn from 'react-fade-in';

export default function CarCard(props) {
  let {
    modelName,
    productionYear,
    timeZeroToHundred,
    enginePower,
    shortNotice,
    photoUrl
  } = props.item;
  return (
    <div
      className="col-8 col-sm-5 col-md-4 col-lg-3"
      key={modelName}
      style={{ padding: '1rem', margin: '0.2rem' }}
    >
      <FadeIn>
        <div className="header" style={{ height: '30vh' }}>
          <h1 style={{ fontSize: '4vh' }}> {modelName} </h1>{' '}
          {shortNotice && (
            <p>
              <em> "{shortNotice}"</em>
            </p>
          )}
          <p> Production Year: {productionYear}</p>
        </div>
        <img src={photoUrl} />
        <div className="explanation" style={{ marginTop: '1rem' }}>
          <p>
            {' '}
            0-100 km/h: <strong>{timeZeroToHundred} seconds </strong>
          </p>
          <p>
            {' '}
            Engine Power: <strong>{enginePower}</strong>
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
