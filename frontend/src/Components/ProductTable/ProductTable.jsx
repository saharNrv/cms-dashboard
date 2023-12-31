import React from 'react';
import './ProductTable.css'

export default function ProductTable() {
  return (
    <div className=' m-5'>

        <table className='product-table'>
            <thead>
                <tr className='table-heading-tr'>
                    <th>Cover</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body-tr'>
                    <td>
                        <img src="/img/lap1.jpeg" alt="product img" className='w-[120px] object-cover' />
                    </td>
                    <td>laptop samsung</td>
                    <td>120000$</td>
                    <td>12</td>
                    <td>
                        <button className='bg-teal-500 w-[80px] mx-2 p-2 text-white rounded-md'>Delete</button>
                        <button className='bg-teal-500 w-[80px] mx-2 p-2 text-white rounded-md'>Edite</button>
                        <button className='bg-teal-500 w-[80px] mx-2 p-2 text-white rounded-md'>Detaile</button>
                    </td>
                </tr>
            </tbody>
        </table>
     
    </div>
  );
}
