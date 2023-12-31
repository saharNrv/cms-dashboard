import React from 'react';

export default function EditeModal({children}) {
  return (
    <div className="modal-parent active">

    <div className='bg-white p-5'>
        <h1 className='text-lg font-bold'>Edite Product</h1>
        {children}
      
    </div>
    </div>
  );
}
