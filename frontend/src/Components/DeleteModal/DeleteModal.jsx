import React from 'react';

export default function DeleteModal() {
  return (
    <div className='modal-parent active'>

        <div className='bg-white p-5 rounded-md'>
            <h1 className='text-lg font-bold'>Are You Sure This Product?</h1>
            <div className='flex justify-center gap-2 mt-4'>
                <button className='bg-green-500 px-4 py-2 text-green-800'>Yes</button>
                <button className='bg-red-500 px-4 py-2 text-red-900'>No</button>
            </div>
        </div>
      
    </div> 
  );
}