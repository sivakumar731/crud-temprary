import React from 'react';
import {useState,useEffect} from 'react';
import  axios from 'axios';
import {Link} from 'react-router-dom'

function Create1() {
 var [products,setProducts]=useState([]);

var getProducts=async()=>{
    // var response= await fetch('https://fakestoreapi.com/products/')
    // var data= await response.json();
    var {data}= await axios.get('https://fakestoreapi.com/products')
    setProducts(data);
    console.log(data);
}


useEffect(()=>{
 getProducts()

},[])


  return(
<div className='conatiner_fluid m-0 p-0  row '>
{
  products.map((product)=>(
    <div className="container_fluid card col-md-3 p-0 m-0  " >
  <img src={product.image} className="card-img-top" alt="image" height={200} width={50} />
  <div className="card-body ">
    <h5 className="card-title ">{product.title}</h5>
    <p className="card-text col-md-12 " >{product.description}</p>
    <Link to={`/product/${product.id}`}  className="btn btn-primary ">ADD TO CART</Link>
  </div>
</div>

  ))
}

</div>


  ) 
    
    

  
}

export default Create1;