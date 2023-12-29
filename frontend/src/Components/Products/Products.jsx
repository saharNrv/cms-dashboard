import React from 'react';
import './Product.css'
import Message from '../Message/Message';
import AddNewProduct from '../AddNewProduct/AddNewProduct';

export default function Products() {
  return (
    <div className=''>
     <Message msg='No products found'/>
     <AddNewProduct/>
    </div>
  );
}
