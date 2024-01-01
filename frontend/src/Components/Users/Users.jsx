import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import DeleteModal from '../DeleteModal/DeleteModal';
import { ToastContainer, toast } from 'react-toastify';
import EditeModal from '../EditeModal/EditeModal';
import DetaileModal from '../DetaileModal/DetaileModal';


export default function Users() {

  const[allUsers,setAllUsers]=useState([])
  const[isShowDelete,setIsShowDelete]=useState(false)
  const[isShowEdit,setIsShowEdit]=useState(false)
  const[isShowDetail,setIsShowDetail]=useState(false)
  const[userID,setUserID]=useState(null)
  const[newFirstName,setNewFirstName]=useState('')
  const[newLastName,setNewLastName]=useState('')
  const[newUsername,setNewUsername]=useState('')
  const[newPassword,setNewPassword]=useState('')
  const[newEmail,setNewEmail]=useState('')
  const[newPhone,setNewPhone]=useState('')
  const[newCity,setNewCity]=useState('')
  const[newAddress,setNewAddress]=useState('')
  const[newScore,setNewScore]=useState('')
  const[newBuy,setNewBuy]=useState('')
  const[userInfo,setUserInfo]=useState({})

  useEffect(()=>{
    getAllUSers()
  },[])

function getAllUSers(){
  fetch('http://localhost:8000/api/users')
       .then(res=>res.json())
       .then(data=>{
       
        setAllUsers(data)
       })
}

const cancelDelete=()=>setIsShowDelete(false)
const hideEditModal=()=>setIsShowEdit(false)
const onHideDetail=()=>setIsShowDetail(false)

const submitDelete=()=>{
 fetch(`http://localhost:8000/api/users/${userID}`,{
  method:'DELETE'
 }).then(res=>res.json())
   .then(resualt=>{
    toast.success('user deleted successfully')
    setIsShowDelete(false)
    getAllUSers()
    
   })
}

const submitEdite=()=>{
  let editUserInfos={
    firsname:newFirstName,
    lastname:newLastName,
    username:newUsername,
    password:newPassword,
    phone:newPhone,
    city:newCity,
    email:newEmail,
    address:newAddress,
    score:newScore,
    buy:newBuy,
  }
fetch(`http://localhost:8000/api/users/${userID}`,{
  method:'PUT',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(editUserInfos)

}).then(res=>res.json())
  .then(resualt=>{
    setIsShowEdit(false)
    getAllUSers()
    toast('edite user info')
  })

}


  return (
    <div className='m-5'>
      <h1 className='text-2xl text-teal-500 font-bold my-10'>Users</h1>

      {
        allUsers.length ?(
          <table className="cms-table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {
              allUsers.map(user=>(
                <tr key={user.id}>
                <td>{user.firsname} {user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button className='bg-teal-500 p-2 mr-2 rounded-md'
                  onClick={()=>{
                    setIsShowDelete(true)
                    setUserID(user.id)
                  }}
                  >Delete</button>
                  <button className='bg-teal-500 p-2 mr-2 rounded-md'
                  onClick={()=>{
                    setIsShowEdit(true)
                    setUserID(user.id)
                    setNewFirstName(user.firsname)
                    setNewLastName(user.lastname)
                    setNewUsername(user.username)
                    setNewPassword(user.password)
                    setNewEmail(user.email)
                    setNewPhone(user.phone)
                    setNewCity(user.city)
                    setNewAddress(user.address)
                    setNewScore(user.score)
                    setNewBuy(user.buy)
                  }}
                  >Edite</button>
                  <button className='bg-teal-500 p-2 mr-2 rounded-md'
                  onClick={()=>{
                    setIsShowDetail(true)
                    setUserInfo(user)
                  }}
                  >Details</button>
                </td>
              </tr>
              ))
            }
         
        </tbody>
      </table>
        ):(
          <Message msg='Not Users Found!'/>
        )
      }

      {
        isShowDelete&&
        <DeleteModal cancleModal={cancelDelete} submitModal={submitDelete} title='Are You Sure Delete This User?'/>
      }
      {
        isShowEdit&&
        <EditeModal onHide={hideEditModal} submitEdite={submitEdite}>

          <div className='w-[400px]'>
            <input type="text" placeholder='firstname' className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
            value={newFirstName}
            onChange={(e)=>setNewFirstName(e.target.value)}
            />
          </div>
          <div className='w-[400px]'>
            <input type="text" placeholder='lastname' className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
            value={newLastName}
            onChange={(e)=>setNewLastName(e.target.value)}
            />
          </div>
          <div className='w-[400px]'>
            <input type="text" placeholder='username' className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
            value={newUsername}
            onChange={(e)=>setNewUsername(e.target.value)}
            />
          </div>
          <div className='w-[400px]'>
            <input type="text" placeholder='password' className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
            value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
            />
          </div>
          <div className='w-[400px]'>
            <input type="text" placeholder='phone' className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
            value={newPhone}
            onChange={(e)=>setNewPhone(e.target.value)}
            />
          </div>
          <div className='w-[400px]'>
            <input type="text" placeholder='email' className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
            value={newEmail}
            onChange={(e)=>setNewEmail(e.target.value)}
            />
          </div>
          <div className='w-[400px]'>
            <input type="text" placeholder='city' className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
            value={newCity}
            onChange={(e)=>setNewCity(e.target.value)}
            />
          </div>
          <div className='w-[400px]'>
            <input type="text" placeholder='address' className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
            value={newAddress}
            onChange={(e)=>setNewAddress(e.target.value)}
            />
          </div>
          <div className='w-[400px]'>
            <input type="text" placeholder='score' className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
            value={newScore}
            onChange={(e)=>setNewScore(e.target.value)}
            />
          </div>
          <div className='w-[400px]'>
            <input type="text" placeholder='buy' className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
            value={newBuy}
            onChange={(e)=>setNewBuy(e.target.value)}
            />
          </div>

        </EditeModal>
      }
      {
        isShowDetail&&
        <DetaileModal onHideDetail={onHideDetail}>
             <table className="cms-table">
              <thead>
                <tr>
                  <th>name</th>
                  <th>city</th>
                  <th>score</th>
                  <th>buy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{userInfo.firsname} {userInfo.lastname}</td>
                  <td>{userInfo.city}</td>
                  <td>{userInfo.score}</td>
                  <td>{userInfo.buy}</td>
                </tr>
              </tbody>
             </table>
        </DetaileModal>
      }

<ToastContainer
   position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
 />
    </div>
  );
}
