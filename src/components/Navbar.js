import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import logo from './updated_logo.jpg'
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'var(--supporting-color)' }}>
        <div className='navbar'>
          <FaIcons.FaBars onClick={showSidebar} className="svgs" size={42}/>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          {/* <a href="/" className="logo">Sethi Stores</a> */}
        <Link to="/"><img src={logo} alt="lodaing" className="logo"/></Link>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <AiIcons.AiOutlineClose className="svgs" size={42}/>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
