import React,{useEffect,useState} from 'react';
import './Product.css'
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import ProductTable from '../ProductTable/ProductTable';

export default function Products() {
  const[allProducts,setAllProducts]=useState([])

  useEffect(()=>{
    getAllProducts()

},[])

function getAllProducts(){
    fetch('http://localhost:8000/api/products')
    .then(res=>res.json())
    .then(data=>{
       
       setAllProducts(data)
    })
}
  return (
    <div className='pt-[90px]'>
    
     <AddNewProduct getAllProducts={getAllProducts}/>
     <ProductTable allProducts={allProducts} getAllProducts={getAllProducts}/>
    </div>
  );
}
