import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {listProduct,deleteProduct,approveProduct,rejectProduct} from '../services/ProductService'


export const ListProductComponent = () => {

  const [product, setProduct] = useState([]) 
  
  const navigator = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, [])

  function getAllProducts() {
    listProduct().then((response) => {
        setProduct(response.data);
    }).catch(error => {
        console.error(error);
    })
  }

  function addNewProduct() {
    navigator('/addProduct')
  }

  function updateProdcut(id) {
    navigator(`/editProduct/${id}`)
  }

  function removeProdcut(id) {
    console.log(id);
    deleteProduct(id).then((response)=> {
        getAllProducts();
    }).catch(error => {
        console.error(error);
    })

  }

  function approvedProdcut(id) {
    console.log(id);
    approveProduct(id).then((response)=> {
    getAllProducts();
    }).catch(error => {
      console.error(error);
    })


  }

  function rejectedProdcut(id) {
    console.log(id);
    rejectProduct(id).then((response)=> {
      getAllProducts();
      }).catch(error => {
        console.error(error);
      })
    
  }

 
  return (
    <div className='container'>
    <h2 className='text-center'>List of Products</h2>
    <button className='btn btn-primary mb-2' onClick={addNewProduct}>Add Product</button>

    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Description</th>
                <th>Product Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                product.map(product => 
                 <tr key={product.id}>
                     <td>{product.id}</td>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td>{product.description}</td>
                     <td>{product.status}</td>
                     <td>
                         <button className='btn btn-info'    onClick={()=> updateProdcut(product.id)}>Update</button>
                         <button className='btn btn-danger'  onClick={()=> removeProdcut(product.id)}style={{marginLeft:'5px'}}>Delete</button>
                         <button className='btn btn-success' onClick={()=> approvedProdcut(product.id)}style={{marginLeft:'5px'}}>Approved</button>
                         <button className='btn btn-warning' onClick={()=> rejectedProdcut(product.id)}style={{marginLeft:'5px'}}>Rejected</button>
                     </td>
                 </tr>
                )
            }
           
        </tbody>
    </table>

 </div>
  )
}

export default ListProductComponent
