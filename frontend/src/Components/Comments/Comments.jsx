import React from 'react';

export default function Comments() {
  return (
    <div className='m-10'>
      <h1 className='text-teal-600 text-2xl font-bold mb-10'>Comments</h1>

      <table className='cms-table w-full mt-10'>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Product</th>
            <th>Comment</th>
            <th>Date</th>
            <th>Hour</th>
          </tr>
        </thead> 
        <tbody>
          <tr>
            <td>sahar nouri</td>
            <td>laptop macBook m1 pro</td>
            <td><button className='bg-teal-500 py-2 px-3 rounded-md'>see comment</button></td>
            <td>2023/04/16</td>
            <td>11:17</td>
            <td>
              <button className='bg-teal-500 p-2 mr-2 rounded-md'>ok</button>
              <button className='bg-teal-500 p-2 mr-2 rounded-md'>response</button>
              <button className='bg-teal-500 p-2 mr-2 rounded-md'>response</button>
              <button className='bg-teal-500 p-2 mr-2 rounded-md'>edite</button>
              <button className='bg-teal-500 p-2 mr-2 rounded-md'>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
