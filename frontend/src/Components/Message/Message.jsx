import React from 'react';
import './Message.css'

export default function Message({msg}) {
  return (
    <div className='bg-red-500 p-4 rounded-[10px] mt-8'>
      <h1 className='text-white text-center text-xl'>{msg}</h1>
    </div>
  );
}
