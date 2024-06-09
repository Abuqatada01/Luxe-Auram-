import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
"use client";

import React from "react";
// import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card"
// import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className="lg:w-[30rem] xsm:w-[80vw]  xsm:p-5  ml-[2rem] p-3 relative">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-[25rem] rounded"
        />
        <HeartIcon product={product} />
      </div> 

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div className="text-lg">{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              $ {product.price}
            </span>
          </h2>
        </Link>
      </div>



    
          <img
          src={product.image}
          alt={product.name}
          className="w-full lg:w-[25rem] xlg:w-[25rem] xsm:w-[21rem] h-full rounded-t-lg"
        />
             <HeartIcon product={product} />
        
       
         <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div className="text-lg p-1 pl-3">{product.name}</div> &nbsp;&nbsp;&nbsp;
            <span className="bg-green-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full ">
            ₹{product.price}
            </span>
          </h2> 
        </Link>
      
    </div>
    
    // 3D card

    
  );
};

export default Product;