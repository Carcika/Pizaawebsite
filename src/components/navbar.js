import React from 'react';
import '../styles/navbar.css'

function navbar() {
  return (
      <div className='navbar'>
          <img src={require('../assets/deliverylogo.png')} />
      </div>
  );
}

export default navbar;
