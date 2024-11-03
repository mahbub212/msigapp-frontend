import React, { useEffect, useState } from 'react'
import { createProduct, getProduct, updateProduct } from '../services/ProductService'
import { useNavigate, useParams } from 'react-router-dom'

const ProductComponent = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update Product</h2> 
    } else {
      return <h2 className='text-center'>Add Product</h2> 
    }

  }

  const {id} = useParams();
  
  const [errors, setErrors] = useState({
        name: '',
        price: '',
        description:'',
        status:''
  })

  const navigator = useNavigate();

  useEffect(() =>{

    if(id) {
        getProduct(id).then((response)=>{
        setName(response.data.name);
        setPrice(response.data.price);
        setDescription(response.data.description);
        setStatus(response.data.status);
      }).catch(error => {
        console.error(error);
      })
    }

  },[])

  function saveOrUpdateProduct(e) {
    e.preventDefault();
    
    if(validateForm()) {

        const product = {name, price, description};
        console.log(product);

        if(id) {
            updateProduct(id, product).then((response)=>{
            console.log(response.data);
            navigator("/product");
          }).catch(()=> {
            console.error(errors) 
          })
        } else {
            createProduct(product).then((response) => {
            console.log(response.data); 
            navigator('/product')        
          }).catch(()=>{
              console.error(errors);
          })
        }
        
    } 


  }

  function validateForm() {
     let valid = true;
     const errorCopy = {... errors}

     if (name.trim()) {
        errorCopy.name='';
     } else {
        errorCopy.name='Product name is required';
        valid = false;
     }

     if (price>0)  {
        errorCopy.price=0.00;
     } else {
        errorCopy.price='Product price is required and must be > 0';
        valid = false;
     }

     if (description.trim()) {
        errorCopy.description='';
     } else {
        errorCopy.description='Description is required';
        valid = false;
     }
    
     setErrors(errorCopy);
     return valid;
  }

  return (
    <div>
       <div children='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'> 
              {/* <h2 className='text-center'>Add Employee</h2>  */}
              {
                  pageTitle()
              }

                <div className='card-body'>
                   <form>
                      <div className='form-group mb-2'>
                          <label className='form-label'>Product Name :</label>
                          <input
                            type='text'
                            placeholder='Enter Product Name'
                            name='name'
                            value={name}
                            className={`form-control ${errors.name ? 'is-invalid':'' }`}
                            onChange={(e) => setName(e.target.value)}
                          >
                          </input>
                          {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                        </div>
                       
                        <div className='form-group mb-2'>
                            <label className='form-label'>Prodcut Price :</label>
                            <input
                              type='text'
                              placeholder='Enter Product Price'
                              name='price'
                              value={price}
                              className={`form-control ${errors.price ? 'is-invalid':'' }`}
                              onChange={(e) => setPrice(e.target.value)}
                            >
                            </input>
                            {errors.price && <div className='invalid-feedback'>{errors.price}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Product Description :</label>
                            <input
                              type='text'
                              placeholder='Enter Prodcut Description'
                              name='description'
                              value={description}
                              className={`form-control ${errors.description ? 'is-invalid':'' }`}
                              onChange={(e) => setDescription(e.target.value)}
                            >
                            </input>
                            {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdateProduct}>Submit</button>
                   </form>   
                </div>
            </div>
           
        </div>
    </div>   
    </div>
  )
}

export default ProductComponent
