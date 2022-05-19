import axios from 'axios';
import {useState,useEffect} from 'react';
import{useParams} from 'react-router-dom'


function Product() {
    const[product,setProduct]=useState({});
    const{id}=useParams();

    const getTheProduct=async()=>{
        const {data}= await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
        console.log(data)

    }
    useEffect(()=>{
        getTheProduct()
    },[])
  return (
    <div  className='container_fluid col-md-6 '>
        <div classnName="card">
  <img src={`${product.image}`} classnName="card-img-top" alt="image" height={600} width={600}/>
  <div classnName="card-body">
    <h5 classnName="card-title"> <strong className='text-primary'>PRODUCT TITLE :</strong>{product.title}</h5>
    <p classnName="card-text"><strong className='text-primary'>DESCRIPTION :</strong>{product.description}</p>
    <p><strong className='text-primary'>PRICE : </strong> ${product.price}</p>
    <button  classnName="btn-primary">BUY NOW</button>
  </div>
</div>


    </div>
  )
}

export default Product;