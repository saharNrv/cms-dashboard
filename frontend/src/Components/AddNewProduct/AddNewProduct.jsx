import React,{useState} from 'react';
import './AddNewProduct.css';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { FaImage } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { FcSalesPerformance } from "react-icons/fc";

export default function AddNewProduct({getAllProducts}) {

  const[newProductTitle,setNewProductTitle]=useState('')
  const[newProductPrice,setNewProductPrice]=useState('')
  const[newProductCount,setNewProductCount]=useState('')
  const[newProductPopularity,setNewProductPopularity]=useState('')
  const[newProductColors,setNewProductColors]=useState('')
  const[newProductSales,setNewProductSales]=useState('')
  const[newProductImg,setNewProductImg]=useState('')

  const addNewProduct=(e)=>{
    e.preventDefault()
    let addNewProductInfos={
      title:newProductTitle,
      price:newProductPrice,
      count:newProductCount,
      img:newProductImg,
      popularity:newProductPopularity,
      sale:newProductSales,
      colors:newProductColors,
    }

    fetch('http://localhost:8000/api/products',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addNewProductInfos)

    }).then(res=>res.json())
      .then(result=>{
        console.log(result);
        getAllProducts()
        clearInputValue()
      })
  }

  const clearInputValue=()=>{
    setNewProductTitle('')
    setNewProductPrice('')
    setNewProductCount('')
    setNewProductPopularity('')
    setNewProductColors('')
    setNewProductSales('')
    setNewProductImg('')
  }

  return (
    <div className='addProduct p-5'>

        <h1 className='text-[20px] text-teal-600 font-bold'>Add New Product</h1>
        <div className='form-wrap mt-8 '>
            <form className='form  bg-white p-8 rounded-md grid grid-cols-2 gap-4 items-center'>
                <div className='addProduct-input-wrap relative '>
                  <MdDriveFileRenameOutline className='absolute size-[22px] top-2 left-2'/>
                    <input type="text" placeholder='Name' className='w-full pl-10 py-[10px] outline-none rounded-md' 
                    value={newProductTitle}
                    onChange={(e)=>setNewProductTitle(e.target.value)}
                    />
                </div>
                <div className='addProduct-input-wrap relative '>
                  <HiCurrencyDollar className='absolute size-[22px] top-2 left-2'/>
                    <input type="text" placeholder=' Price' className='w-full pl-10 py-[10px] outline-none rounded-md'
                    value={newProductPrice}
                    onChange={(e)=>setNewProductPrice(e.target.value)}
                    />
                </div>
                <div className='addProduct-input-wrap relative '>
                  <PiArrowsCounterClockwiseBold className='absolute size-[22px] top-2 left-2'/>
                    <input type="text" placeholder='Count' className='w-full pl-10 py-[10px] outline-none rounded-md'
                    value={newProductCount}
                    onChange={e=>setNewProductCount(e.target.value)}
                    />
                </div>
                <div className='addProduct-input-wrap relative '>
                  <FaImage className='absolute size-[22px] top-2 left-2'/>
                    <input type="text" placeholder='Img' className='w-full pl-10 py-[10px] outline-none rounded-md'
                    value={newProductImg}
                    onChange={(e)=>setNewProductImg(e.target.value)}

                    />
                </div>
                <div className='addProduct-input-wrap relative '>
                  <MdFavoriteBorder className='absolute size-[22px] top-2 left-2'/>
                    <input type="text" placeholder='Populare' className='w-full pl-10 py-[10px] outline-none rounded-md'
                    value={newProductPopularity}
                    onChange={(e)=>setNewProductPopularity(e.target.value)}
                    />
                </div>
                <div className='addProduct-input-wrap relative '>
                  <IoIosColorPalette className='absolute size-[22px] top-2 left-2'/>
                    <input type="text" placeholder='Color' className='w-full pl-10 py-[10px] outline-none rounded-md' 
                    value={newProductColors}
                    onChange={(e)=>setNewProductColors(e.target.value)}
                    />
                </div>
                <div className='addProduct-input-wrap relative '>
                  <FcSalesPerformance className='absolute size-[22px] top-2 left-2'/>
                    <input type="text" placeholder='Sale' className='w-full pl-10 py-[10px] outline-none rounded-md'
                    value={newProductSales}
                    onChange={(e)=>setNewProductSales(e.target.value)}
                    />
                </div>
              <button className='bg-teal-500 w-[180px] m-[auto] p-2 rounded-md' onClick={addNewProduct}>Add Product</button>
            </form>
        </div>
      
    </div>
  );
}
