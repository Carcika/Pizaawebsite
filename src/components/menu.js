import React from 'react';
import MenuItems from '../helpers/menuItems';
import {menuList} from '../helpers/menufoods'
import { useState } from 'react';
import '../styles/menu.css'
import react from 'react';

function Menu() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <react.Fragment>
      <input placeholder='Search...' type="text" onChange={event => setSearchTerm(event.target.value)} />
      <div className='menu'>
          {menuList.filter((val) => {
            if(searchTerm == "") {
              return val
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          }).map((menulist, key) => {
          return <MenuItems
              key={key}
              name={menulist.name}
              price={menulist.price}
              image={menulist.image}
            />
          })}
      </div>
    </react.Fragment>
  );
}

export default Menu;
