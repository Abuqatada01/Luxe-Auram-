import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card"

const SmallProduct = ({ product }) => {
  return (
    <div className="w-[30rem] lg:block xsm:hidden ml-[2rem] p-3 relative">
    {/* <div className="relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-[25rem] rounded"
      />
      <HeartIcon product={product} />
    </div> */}

    {/* <div className="p-4">
      <Link to={`/product/${product._id}`}>
        <h2 className="flex justify-between items-center">
          <div className="text-lg">{product.name}</div>
          <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
            $ {product.price}
          </span>
        </h2>
      </Link>
    </div> */}



    <CardContainer className="inter-var h-">
    <CardBody className="bg-[#c9c8c873] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[25rem]  h-[23rem] rounded-xl p-0 border  ">
      <CardItem
        translateZ="50" 
        className=" relative rounded-lg  text-xl font-bold text-neutral-600 dark:text-white"
      >
        <img
        src={product.image}
        alt={product.name}
        className="w-full h-full rounded-t-lg"
      />
           <HeartIcon product={product} />
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 pl-3 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
       <Link to={`/product/${product._id}`}>
        <h2 className="flex justify-between items-center">
          <div className="text-lg">{product.name}</div> &nbsp;&nbsp;&nbsp;
          <span className="bg-green-600 pl-4 text-white w-auto text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full ">
          ₹ {product.price}
          </span>
        </h2> 
      </Link>
      </CardItem>
           </CardBody>
  </CardContainer>
  </div>
  );
};

export default SmallProduct;