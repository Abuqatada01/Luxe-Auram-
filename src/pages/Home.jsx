import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import { cn } from "../Utils/cn";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";


const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex justify-between  items-center">
            <h1 className="lg:ml-[20rem] xsm:ml-[2rem] xsm:mr-[4rem] mt-[10rem] lg:text-[4rem] xsm:text-[2rem]">
              Special Products
            </h1>

            <Link
              to="/shop"
              className="bg-green-600 text-white font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
            >
              Shop
            </Link>
          </div>

          <div>
          <div className="flex justify-center flex-wrap xsm:mr-[4rem] mt-[2rem]">
              {data.products.map((product,i) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
          {/* <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        
          {data.products.map((product,i) => (
            <BentoGridItem 
             key={product._id}
             product={product}
             className={i === 3 || i === 6 ? "md:col-span-2" : ""}
           >
               <div key={product._id}>
              
                
                </div>
              </BentoGridItem>   ))}
             </BentoGrid>    <Product  /> */}
        </>
      )}
     
    </>
  );
};

export default Home;