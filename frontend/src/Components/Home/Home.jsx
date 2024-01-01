import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import UserTable from '../UserTable/UserTable';
import ProductTable from '../ProductTable/ProductTable';
import ProductTableHome from '../ProductTableHome/ProductTableHome';


export default function Home() {

  const[chartData,setChartData]=useState([])
  
  useEffect(()=>{
    fetch('http://localhost:8000/api/products')
         .then(res=>res.json())
         .then(data=>{
          console.log(data);
          setChartData(data)
         })
  },[])

  return (
    <div className='home py-[90px]'>
     <Chart grid chartData={chartData} dataKey='count' />
     <div className='m-5 mt-10 flex justify-between'>
      <UserTable/>
      <ProductTableHome/>
     </div>
      
    </div>
  );
}
