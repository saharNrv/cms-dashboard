import React, { useEffect, useState } from 'react';

export default function UserTable() {

    const[allUser,setAllUser]=useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/api/users')
             .then(res=>res.json())
             .then(users=>{
                setAllUser(users)
             })
    },[])

  return (
    <div>
      <table className='cms-table w-[550px] shadow bg-white dark:bg-teal-800 dark:text-white'>
        <thead>
            <tr>
                <th>#</th>
                <th>name</th>
                <th>email</th>
                <th>buy</th>
            </tr>
        </thead>
        <tbody>
            {
                allUser.map((user,index)=>(
                    <tr key={user.id}>
                        <td>{index+1}</td>
                        <td>{user.firsname} {user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.buy}</td>
                    </tr>
                ))
            }
        </tbody>

      </table>
    </div>
  );
}
