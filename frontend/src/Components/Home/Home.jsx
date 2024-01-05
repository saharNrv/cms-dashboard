import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import UserTable from '../UserTable/UserTable';
import ProductTable from '../ProductTable/ProductTable';
import ProductTableHome from '../ProductTableHome/ProductTableHome';
import SaleBox from '../SaleBox/SaleBox';


export default function Home() {

  const[chartData,setChartData]=useState([])
  const[data,setData]=useState([])
  
  useEffect(()=>{
    fetch('http://localhost:8000/api/products')
         .then(res=>res.json())
         .then(data=>{
          console.log(data);
          setChartData(data)
          setData(data)
         })
  },[])

  return (
    <div className='home py-[90px] dark:bg-slate-800'>
      <div className='grid grid-cols-3 gap-4 m-5'>
            <SaleBox title='Product Sales' sale='5483' cent={65}/>
            <SaleBox title='Product Popularity' sale='469' cent={49}/>
            <SaleBox title='Users Sales' sale='264.5' cent={38}/>
      </div>
     <Chart grid chartData={chartData} dataKey='count' />
     <div className='m-5 mt-10 flex justify-between'>
      <UserTable/>
      <ProductTableHome/>
     </div>
      
    </div>
  );
}
