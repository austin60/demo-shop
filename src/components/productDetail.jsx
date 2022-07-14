import React,{ useEffect }  from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectedProduct } from "../redux/actionCreators/actionCreators";
import { removeProduct } from "../redux/actionCreators/actionCreators";
import axios from 'axios';
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useParams } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";

const ProductDetail=()=>{
    const products=useSelector(state=>state.products);
    console.log(products)
    const {productId}=useParams();
    const dispatch=useDispatch();
    const {description,image,price,category,title}=products

    const fetchSelectedProduct=async()=>{
      const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
                     .catch(error=>{console.log(error.message)})
    
        dispatch(selectedProduct(response.data))
    }
    useEffect(()=>{
        if(productId && productId!==" ")fetchSelectedProduct();
        return ()=>{dispatch(removeProduct())}
    },[productId])
    return (
        <div className="container">
        <div className="product-detail">
          <div className="detail-image">
           <img src={image} alt={category} />
          </div>
          <div className="detail-info">
            <div className="detail-title"> <b>{title}</b></div>
            <div className="detail-desc"><p>{description}</p></div>
            <div className="detail-price">${price}</div>
            <div className="detail-btn">
                <button className="btn btn-danger">Add to Cart <AiOutlineShoppingCart/></button>
            </div>
          </div>
        </div>
        </div>
    )
}
export default ProductDetail