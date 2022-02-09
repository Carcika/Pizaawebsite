import React from 'react';

function menuItems({name, price, image}) {
  return (
      <div className='menuItems'>
          <div style={{backgroundImage: `url(${image})`}}></div>
          <h1>{name}</h1>
          <p>{price}</p>
      </div>
  );
}

export default menuItems;
