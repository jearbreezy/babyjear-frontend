import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout our featured locations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/location1.jpg'
              text='Getting Hooked on Zambales'
              label='Silanguin Cove'
              path='/services'
            />
            <CardItem
              src='images/location2.jpg'
              text='A hiking destination favored for its proximity to Metro Manila'
              label='Mt. Balagbag'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/location3.jpg'
              text='Enjoy Aurora’s Prime Surfing Destination'
              label='Baler'
              path='/services'
            />
            <CardItem
              src='images/location4.jpg'
              text='Beach-Bumming in Padre Burgos'
              label='Dampalitan'
              path='/products'
            />
            <CardItem
              src='images/location5.jpg'
              text='A famous camping getaway of tourists from all walks of life'
              label='Anawangin Cove'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
