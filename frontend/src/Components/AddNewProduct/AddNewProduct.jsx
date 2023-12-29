import React from 'react';

export default function AddNewProduct() {
  return (
    <div className='addProduct p-5'>

        <h1 className='text-[20px]'>Add New Product</h1>
        <div className='form-wrap'>
            <form className='form'>
                <div className='addProduct-input-wrap'>
                    <input type="text" placeholder='product name' />
                </div>
            </form>
        </div>
      
    </div>
  );
}
