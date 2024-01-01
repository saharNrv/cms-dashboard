import React, { useEffect } from 'react';

export default function DetaileModal({children,onHideDetail}) {

  useEffect(()=>{

    const closeModal=(e)=>{
         if(e.keyCode===27){
          onHideDetail()
         }
    }

    window.addEventListener('keydown',closeModal)
    return ()=>window.removeEventListener('keydown',closeModal)
  },[])


  return (
    <div className='modal-parent active '>
            {children}
 
    </div>
  );
}
