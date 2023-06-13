import React from "react";
import { NavLink } from "react-router-dom";
import { FaBuilding, FaCog, FaHome, FaSignOutAlt, FaUserCheck, FaUsers, FaBoxOpen } from 'react-icons/fa';



const SideMenu = ({ isActive }) => {
  return (
    <div className={`UserDashboard ${isActive ? 'active' : ''}`}>
      <div  className={`navigation ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/">
              <span className="icon">
                <FaUserCheck className='ico'/>
              </span>
              <span className="title">Admin</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="icon">
                <FaHome className="ico"/>
              </span>
              <span className="title">Tableau de board</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Candidats">
              <span className="icon">
                <FaUsers className="ico" />
              </span>
              <span className="title">Candidats</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Sociétés">
              <span className="icon">
                <FaBuilding className="ico" />
              </span>
              <span className="title">Sociétés</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Offres">
              <span className="icon">
                <FaBoxOpen className="ico" />
              </span>
              <span className="title">Offres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Setting">
              <span className="icon">
                <FaCog className="ico" />
              </span>
              <span className="title">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="icon">
                <FaSignOutAlt className="ico" />
              </span>
              <span className="title">Sign Out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
