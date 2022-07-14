import React,{ useEffect }  from "react";
import { useSelector } from "react-redux";
import ProductCard from "./itemCard";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import axios from "axios";
import { setProduct } from "../redux/actionCreators/actionCreators";

const ProductsList=()=>{
    const products=useSelector(state=>state.allProducts)
    console.log(products)
    const dispatch=useDispatch()

    const fetchProducts=async()=>{
        const response=await axios.get('https://fakestoreapi.com/products').
        catch(err=>{console.log(err.message)})

        dispatch(setProduct(response.data))
    }
    
    useEffect(()=>{fetchProducts()},[])
    return(
        <div className="prodlist">
        < ProductCard />
        </div>
    )
}
export default ProductsList;