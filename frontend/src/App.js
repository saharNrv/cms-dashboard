
import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import router from './routes';
import { useRoutes } from 'react-router-dom';
import './App.css';
import useDarkTheme from './useDarkTheme';

export default function App() {
  const routers=useRoutes(router)
  
 
  return (
    <>
      <SideBar/>
      <div className='app-wrap'>
      <Header/>
        {routers}
      </div>
    </>
  );
}
