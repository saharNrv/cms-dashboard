
import React, { useEffect } from 'react';

export default function App() {

  useEffect(()=>{
    fetch('http://localhost:8000/api/products')
         .then(res=>res.json())
         .then(data=>{
          console.log(data);
         })
  },[])
  return (
    <div>
      
    </div>
  );
}
