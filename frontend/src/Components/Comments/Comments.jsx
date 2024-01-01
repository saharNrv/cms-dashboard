import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import DetaileModal from '../DetaileModal/DetaileModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditeModal from '../EditeModal/EditeModal';

export default function Comments() {

  const[allComments,setAllComments]=useState([])
  const[isShowCommentText,setIsShowCommentText]=useState(false)
  const[isShowDelete,setIsShowDelete]=useState(false)
  const[isShowEditeModal,setIsShowEditeModal]=useState(false)
  const[isShowAcceptModal,setIsShowAcceptModal]=useState(false)
  const[isShowRejectModal,setisShowRejectModal]=useState(false)
  const[commentID,setCommentID]=useState(null)
  const[commentText,setCommentText]=useState('')
  const[editeText,setEditeText]=useState('')
  

  useEffect(()=>{
getAllComments()
    

  },[])
  function getAllComments(){
    fetch('http://localhost:8000/api/comments')
    .then(res=>res.json())
    .then(data=>{
     
     setAllComments(data)
    })
  }
 
  const onHideDetail=()=>setIsShowCommentText(false)
  const cancleModal=()=>setIsShowDelete(false)
  const onHide=()=>setIsShowEditeModal(false)
  const cancleAcceptModal=()=>setIsShowAcceptModal(false)
  const cancleRejectModal=()=>setisShowRejectModal(false)

  const submitModal=()=>{

    fetch(`http://localhost:8000/api/comments/${commentID}`,{
      method:'DELETE'
    }).then(res=>res.json())
      .then(result=>{
        setIsShowDelete(false)
        getAllComments()
      })
  }

  const submitEdite=()=>{
    let newCommentBody={
      body:editeText
    }

    fetch(`http://localhost:8000/api/comments/${commentID}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
    body:JSON.stringify(newCommentBody)
    }).then(res=>res.json())
    .then(resualt=>{
      setIsShowEditeModal(false)
      getAllComments()
    })

 }
 const submitAcceptModal=()=>{

  fetch(`http://localhost:8000/api/comments/accept/${commentID}`,{
    method:'POST',
   
  }).then(res=>res.json())
    .then(resulat=>{
      setIsShowAcceptModal(false)
      getAllComments()
    })
 }
 const submitRejectModal=()=>{

  fetch(`http://localhost:8000/api/comments/reject/${commentID}`,{
    method:'POST',
   
  }).then(res=>res.json())
    .then(resulat=>{
      
      setisShowRejectModal(false)
      getAllComments()
    })
 }

  return (
    <div className='m-10'>
      <h1 className='text-teal-600 text-2xl font-bold mb-10'>Comments</h1>

      {
        allComments.length?(
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
          {
            allComments.map(comment=>(
              <tr key={comment.id}>
              <td>{comment.userID}</td>
              <td>{comment.productID}</td>
              <td>
              <button className='bg-teal-500 py-2 px-3 rounded-md'
              onClick={()=>{
                setIsShowCommentText(true) 
                setCommentText(comment.body)
              }}
              >see comment
              </button>
              </td>
              <td>2023/04/16</td>
              <td>11:17</td>
              <td>
                <button className='bg-teal-500 p-2 mr-2 rounded-md'>response</button>
                {
                  (comment.isAccept===0)?(
                    <button className='bg-teal-500 p-2 mr-2 rounded-md'
                    onClick={()=>{
                     setIsShowAcceptModal(true)
                     setCommentID(comment.id)
                    }}
                    >accept</button>
                  ):(
                    <button className='bg-red-500 p-2 mr-2 rounded-md'
                    onClick={()=>{
                      setisShowRejectModal(true)
                     setCommentID(comment.id)
                    }}
                    >reject</button>
                  )
                }
               
                <button className='bg-teal-500 p-2 mr-2 rounded-md'
                onClick={()=>{
                  setIsShowEditeModal(true)
                  setEditeText(comment.body)
                  setCommentID(comment.id)
                }}
                >
                  edite
                </button>
                <button className='bg-teal-500 p-2 mr-2 rounded-md'
                 onClick={()=>{
                  setIsShowDelete(true)
                  setCommentID(comment.id)
                 }}
                >
                  delete
                </button>
              </td>
            </tr>
            ))
          }
         
        </tbody>
      </table>
        ):(<Message msg='No Comment Found'/>)
      }

    {
      isShowCommentText &&
      <DetaileModal onHideDetail={onHideDetail}>
        <div className='bg-white p-5 w-[400px]'>
        <p className='text-center text-xl'>{commentText}</p>
        <button className='bg-teal-500 p-2 rounded-md' onClick={()=>setIsShowCommentText(false)}>Close</button>
        </div>
      </DetaileModal>
    }
    {
      isShowDelete&&
      <DeleteModal cancleModal={cancleModal} submitModal={submitModal}  title='Are You Sure Delete This Comment?'/>
    }
    {
      isShowEditeModal&&
      <EditeModal onHide={onHide} submitEdite={submitEdite}>
        <div className='w-[400px]'>
        <textarea className='w-full border p-2'  cols="30" rows="10" value={editeText}
        onChange={(e)=>setEditeText(e.target.value)}
        ></textarea>

        </div>
      </EditeModal>
    }
    {
      isShowAcceptModal&&
      <DeleteModal cancleModal={cancleAcceptModal} submitModal={submitAcceptModal} title='Are You Sure Accept This Comment?'/>
    }
    {
      isShowRejectModal&&
      <DeleteModal cancleModal={cancleRejectModal} submitModal={submitRejectModal} title='Are You Sure Reject This Comment?'/>
    }
      
    </div>
  );
}
