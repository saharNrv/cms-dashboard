import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

export default function SaleBox({title,sale,cent}) {
  return (
    <div className='saleBox bg-white dark:bg-teal-800 dark:shadow-slate-600 dark:text-white p-2 rounded-md shadow-lg h-[150px]'>
      <h3 className='text-gray-400 p-4 text-xl'>{title}</h3>
      <div className='flex justify-between p-4'>
        <span className='text-3xl'>{sale}</span>
        <span className='flex items-center gap-1'>+{cent}% 

{
    cent<50?(
        <FaArrowTrendDown className='text-2xl text-red-500'/>
        ):(
        <FaArrowTrendUp className='text-2xl text-green-600'/>

    )
}

        
        </span>
      </div>
    </div>
  );
}
