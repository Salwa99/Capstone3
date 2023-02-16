import React from 'react';
import { NavLink } from 'react-router-dom';
import { TiMicrophone } from 'react-icons/ti';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import house from '../assets/house.png';

function Navigation() {
  return (
    <div className="navbar">
      <ul>
        <li className="back">
          <NavLink to="/">
            <IoIosArrowBack />
          </NavLink>
        </li>
      </ul>
      <div className="logo">
        <div className="wrapper">
          <div className="bg"> Hogwarts characters </div>
          <div className="fg"> Hogwarts characters </div>
        </div>
        <img src={house} alt="hogwarts houses" />
      </div>
      <div>
        <div className="setting">
          <TiMicrophone />
          <IoMdSettings />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
