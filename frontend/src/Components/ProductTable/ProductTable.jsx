import React, { useEffect, useState } from 'react';
import './ProductTable.css';
import Message from '../Message/Message';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditeModal from '../EditeModal/EditeModal';
import DetaileModal from '../DetaileModal/DetaileModal';
import { ToastContainer, toast } from 'react-toastify';


export default function ProductTable({getAllProducts,allProducts}) {
    const[isShowDeleteModal,setIsShowDeleteModal]=useState(false)
    const[isShowEditeModal,setIsShowEditeModal]=useState(false)
    const[isShowDetailModal,setIsShowDetailModal]=useState(false)
    const[productID,setProductID]=useState(null)
    const[newProductTitle,setNewProductTitle]=useState('')
    const[newProductPrice,setNewProductPrice]=useState('')
    const[newProductCount,setNewProductCount]=useState('')
    const[newProductPopularity,setNewProductPopularity]=useState('')
    const[newProductColors,setNewProductColors]=useState('')
    const[newProductSales,setNewProductSales]=useState('')
    const[newProductImg,setNewProductImg]=useState('')
    const[detailProduct,setDetailProduct]=useState({})

  

    const cancleModal=()=>setIsShowDeleteModal(false)
    const onHide=()=>setIsShowEditeModal(false)
    const onHideDetail=()=>setIsShowDetailModal(false)
    const submitModal=()=>{

        fetch(`http://localhost:8000/api/products/${productID}`,{
            method:'DELETE'
        }).then(res=>res.json())
          .then(resualt=>{
              setIsShowDeleteModal(false)
              getAllProducts()
              toast.success('The product has been successfully removed')
          })

    }

    const submitEdite=()=>{

        let newProductInfoes={
            title:newProductTitle,
            price:newProductPrice,
            count:newProductCount,
            popularity:newProductPopularity,
            img:newProductImg,
            colors:newProductColors,
            sale:newProductSales
        }

        fetch(`http://localhost:8000/api/products/${productID}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newProductInfoes)
        }).then(res=>res.json())
          .then(resualt=>{
            setIsShowEditeModal(false)
            getAllProducts()
          })
    }
    
  return (
    
    <div className=' m-5'>

        <table className='product-table dark:bg-teal-800 dark:text-white' >
            <thead>
                <tr className='table-heading-tr'>
                    <th>Cover</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                {
                    allProducts.length ?(
                         allProducts.map(product=>(
                        <tr className='table-body-tr' key={product.id}>
                        <td>
                            <img src={product.img} alt="product img" className='w-[120px] object-cover' />
                        </td>
                        <td>{product.title}</td>
                        <td>{product.price}$</td>
                        <td>{product.count}</td>
                        <td>
                            <button className='bg-teal-500 w-[80px] mx-2 p-2 text-white rounded-md' 
                            onClick={()=>{
                                setIsShowDeleteModal(true)
                                setProductID(product.id)
                            }}
                            >
                                Delete
                            </button>
                            <button className='bg-teal-500 w-[80px] mx-2 p-2 text-white rounded-md'
                            onClick={()=>{
                                setIsShowEditeModal(true)
                                setProductID(product.id)
                                setNewProductTitle(product.title)
                                setNewProductPrice(product.price)
                                setNewProductCount(product.count)
                                setNewProductPopularity(product.popularity)
                                setNewProductColors(product.colors)
                                setNewProductSales(product.sale)
                                setNewProductImg(product.img)
                            }}
                            >
                                Edite
                            </button>
                            <button className='bg-teal-500 w-[80px] mx-2 p-2 text-white rounded-md'
                            onClick={()=>{
                                setIsShowDetailModal(true)
                                setDetailProduct(product)
                            }}
                            >
                                Detaile
                            </button>
                        </td>
                    </tr>
                    ))):( <Message msg='No products found'/>)
                   
                }
               
            </tbody>
        </table>
        {
            isShowDeleteModal&&(
                <DeleteModal submitModal={submitModal} cancleModal={cancleModal} title='Are You Sure Delete This Product?'/>
            )
        }
        {
            isShowEditeModal&&(
                <EditeModal onHide={onHide} submitEdite={submitEdite}>
                    <div className='w-[400px]'>
                        <input type="text" placeholder='name' 
                        className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md' 
                        value={newProductTitle}
                        onChange={(e)=>setNewProductTitle(e.target.value)}
                        />
                    </div>
                    <div className='w-[400px]'>
                        <input type="text" placeholder='price' 
                         className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
                         value={newProductPrice}
                         onChange={(e)=>setNewProductPrice(e.target.value)}
                         />
                    </div>
                    <div className='w-[400px]'>
                        <input type="text" placeholder='count' 
                        className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
                        value={newProductCount}
                        onChange={(e)=>setNewProductCount(e.target.value)}
                         />
                    </div>
                    <div className='w-[400px]'>
                        <input type="text" placeholder='img' 
                        className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md' 
                        value={newProductImg}
                        onChange={(e)=>setNewProductImg(e.target.value)}
                        />
                    </div>
                    <div className='w-[400px]'>
                        <input type="text" placeholder='popularity' 
                        className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
                        value={newProductPopularity}
                        onChange={(e)=>setNewProductPopularity(e.target.value)}
                         />
                    </div>
                    <div className='w-[400px]'>
                        <input type="text" placeholder='sale'
                         className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md' 
                         value={newProductSales}
                         onChange={(e)=>setNewProductSales(e.target.value)}
                         />
                    </div>
                    <div className='w-[400px]'>
                        <input type="text" placeholder='color' 
                        className='bg-gray-200 w-full mb-3 py-2 px-3 outline-none rounded-md'
                        value={newProductColors}
                        onChange={(e)=>setNewProductColors(e.target.value)}
                         />
                    </div>

                </EditeModal>
            )
        }
       {
        isShowDetailModal &&
        <DetaileModal onHideDetail={onHideDetail}>

            <table className='cms-table'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>popularity</th>
                        <th>color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{detailProduct.title}</td>
                        <td>{detailProduct.price}</td>
                        <td>{detailProduct.popularity}%</td>
                        <td>{detailProduct.colors}</td>
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
