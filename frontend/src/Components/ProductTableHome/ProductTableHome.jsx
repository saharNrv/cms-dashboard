import React, { useEffect, useState } from 'react';

export default function ProductTableHome() {

    const[allProduct,setAllProduct]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/api/products')
             .then(res=>res.json())
             .then(resualt=>{
                setAllProduct(resualt)
             })
    },[])
  return (
    <div className='bg-red overflow-y-scroll h-[400px] bg-white rounded-2xl shadow'>
      <table className='cms-table w-[600px]'>
        <thead>
            <tr>
                <th>img</th>
                <th>product</th>
                <th>price</th>
                <th>sale</th>
            </tr>
        </thead>
        <tbody>
            {
                allProduct.map(product=>(
                    <tr key={product.id}>
                        <td>
                            <img src={product.img} alt=""  className='w-[80px]'/>
                        </td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.sale}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
}
