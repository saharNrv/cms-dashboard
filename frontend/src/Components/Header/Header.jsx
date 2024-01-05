import React, { useEffect } from 'react';
import './Header.css'
import { GrSun } from "react-icons/gr";
import useDarkTheme from '../../useDarkTheme';
import { MdOutlineDarkMode } from "react-icons/md";
export default function Header() {

  const[theme,toggleTheme]=useDarkTheme()

 
console.log('theme',theme);

useEffect(()=>{
  if(theme==='dark'){
    document.body.classList.add('dark')

  }else{
    document.body.classList.remove('dark')

  }
},[theme])



  console.log('theme',theme);
  return (
    <div className='header bg-white-50 py-10 px-3 fixed top-0 w-full z-10 dark:bg-slate-800 '>
      <div className='flex items-center justify-between w-[85%] pr-10'>
     <div className="header-left">
      <div className="header-infos">
        <img src="/img/amin1.jpeg" alt="admin img" className='header-cover' />
        <div>
          <h2 className='admin-name dark:text-white'>sahar nouri</h2>
          <h3 className='admin-job'>web developer</h3>
        </div>
      </div>
     </div>
     <div className="header-right  ">

      <button className='bg-teal-500 text-white text-2xl w-[35px] h-[35px] flex items-center justify-center rounded-[50%]'
       onClick={toggleTheme}
      >
        {
          theme==='light'?(<GrSun/>):(<MdOutlineDarkMode/>)
        }
        
      </button>
        
     </div>

      </div>
      
    </div>
  );
}
