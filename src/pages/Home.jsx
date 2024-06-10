import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

// Hardcoded list of products
const staticProducts = [
  { _id: '1', name: 'Product 1', price: 29.99 },
  { _id: '2', name: 'Product 2', price: 49.99 },
  { _id: '3', name: 'Product 3', price: 19.99 },
  // Add more products as needed
];

const Home = () => {
  // Use useParams to get the keyword from the URL
  const { keyword } = useParams();

  // Since this is static, we're not loading or fetching data
  const isLoading = false;
  const isError = false;
  const error = null;

  // Use static products list instead of fetched data
  const products = staticProducts;

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
        // Handle successful data fetching (static in this case)
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
            {/* Render static products */}
            {products.length > 0 ? (
              products.map((product) => (
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

