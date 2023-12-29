import React from 'react';
import './SideBar.css';
import {Link,NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className='sidebar'>
        <h1 className='sidebar-title'>My Dashboard</h1>
        <ul className="sidebar-list">
            <li className="sidebar-item">
                 
                 <NavLink to="/">
                 <FaHome/>
                    home
                 </NavLink>
            </li>
            <li className="sidebar-item">
                 
                 <NavLink to="/products">
                 <FaProductHunt/>
                    products
                 </NavLink>
            </li>
            <li className="sidebar-item">
                 
                 <NavLink to="/comments">
                 <FaRegComment/>
                    comments
                 </NavLink>
            </li>
            <li className="sidebar-item">
                 
                 <NavLink to="/users">
                 <FaUsers/>
                    users
                 </NavLink>
            </li>
        </ul>
      
    </div>
  );
}
