import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <div className='header py-10 px-3 fixed top-0 w-full z-10'>
     <div className="header-left">
      <div className="header-infos">
        <img src="/img/amin1.jpeg" alt="admin img" className='header-cover' />
        <div>
          <h2 className='admin-name'>sahar nouri</h2>
          <h3 className='admin-job'>web developer</h3>
        </div>
      </div>
     <div className="header-right">
        
     </div>
     </div>
    </div>
  );
}
