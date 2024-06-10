import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  // Use useParams to get the keyword from the URL
  const { keyword } = useParams();

  // Fetch products data with the keyword
  const { data, isLoading, isError, error } = useGetProductsQuery({ keyword });

  return (
    <>
      {/* Conditionally render the Header component if there's no keyword */}
      {!keyword && <Header />}
      
      {/* Handle loading state */}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        // Handle error state
        <Message variant="danger">
          {error?.data?.message || error?.message || "An error occurred"}
        </Message>
      ) : (
        // Handle successful data fetching
        <>
          <div className="flex justify-between items-center">
            <h1 className="lg:ml-[20rem] xsm:ml-[2rem] xsm:mr-[4rem] lg:mt-[10rem] lg:text-[4rem] xsm:text-[2rem]">
              Special Products
            </h1>
            <Link
              to="/shop"
              className="bg-green-600 text-white font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
            >
              Shop
            </Link>
          </div>
          
          <div className="flex justify-center flex-wrap xsm:mr-[4rem] mt-[2rem]">
            {/* Ensure data and data.products are defined before mapping */}
            {data?.products ? (
              data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))
            ) : (
              <Message variant="info">No products found</Message>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
