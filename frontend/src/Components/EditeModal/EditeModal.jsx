import React, { useEffect } from 'react';

export default function EditeModal({children,onHide,submitEdite}) {

  useEffect(()=>{

    const hideEditModal=(e)=>{
     
      if(e.keyCode===27){
        onHide()
      }
    }

    window.addEventListener('keydown',hideEditModal)
    return ()=>window.removeEventListener('keydown',hideEditModal)
  },[])


  return (
    <div className="modal-parent active">

    <div className='bg-white p-5 rounded-md text-teal-600'>
        <h1 className='text-xl font-bold my-5 text-center'>Edite Product</h1>
        {children}
      
    <button className='bg-teal-500 py-2 px-4 rounded-md text-white' onClick={()=>submitEdite()} >Edit Product</button>
    </div>
    </div>
  );
}
