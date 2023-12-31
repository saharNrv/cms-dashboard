import React from 'react';
import './Product.css'
import Message from '../Message/Message';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import ProductTable from '../ProductTable/ProductTable';

export default function Products() {
  return (
    <div className=''>
     <Message msg='No products found'/>
     <AddNewProduct/>
     <ProductTable/>
    </div>
  );
}
