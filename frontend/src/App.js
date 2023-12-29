
import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import router from './routes';
import { useRoutes } from 'react-router-dom';
import './App.css'
export default function App() {
const routers=useRoutes(router)
  
  return (
    <div>
      <div className='app-wrap'>
      <SideBar/>
        {routers}
      </div>
      
    </div>
  );
}
