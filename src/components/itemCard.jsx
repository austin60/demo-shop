import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

const ProductCard=()=>{
    const products=useSelector(state=>state.allProducts.products);
    
    const RenderList=products.map(product=>{
        const {category,title,price,id,image}=product;
    return(
        
        <div className='product-card ' key={id}>
            <Link to={`/product/${id}`}>
           <div className="product-image">
             <img src={image}alt={category} />
           </div>
           <div className="general-detail">
            <div className="prod-price">{title} </div>
            <div className='prod-info'>${price}</div>  
           </div> 
           </Link> 
       </div>
       
       )
    })
    return(
     <>{RenderList}</>
    )
}
export default ProductCard
