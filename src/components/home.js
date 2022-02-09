import React from 'react';
import homeBg from '../assets/homebg.jpg'
import '../styles/home.css'
import { Link } from 'react-router-dom'

function home() {
  return(
      <div className='home' style={{backgroundImage: `url(${homeBg})`}}>
          <div className='overlay'></div>
          <Link to='/menu'>
            <button className='order'>Order now</button>
          </Link>
      </div>
  );
}

export default home;
