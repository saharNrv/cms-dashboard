import React from 'react';

export default function DeleteModal({submitModal,cancleModal,title}) {
  return (
    <div className='modal-parent active'>

        <div className='bg-white p-5 rounded-md'>
            <h1 className='text-lg font-bold'>{title}</h1>
            <div className='flex justify-center gap-2 mt-4'>
                <button className='bg-green-500 px-4 py-2 text-green-800' onClick={()=>submitModal()}>Yes</button>
                <button className='bg-red-500 px-4 py-2 text-red-900' onClick={()=>cancleModal()}>No</button>
            </div>
        </div>
      
    </div> 
  );
}
