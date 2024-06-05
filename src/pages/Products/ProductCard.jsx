import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import HeartIcon from "./HeartIcon";

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("Item added successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <div className="lg:w-[22rem] xsm:w-[41vw]  xsm:p-0 xsm:m-0   bg-[#f1f0f06c] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <section className="relative">
        <Link to={`/product/${p._id}`}>
          <span className="absolute bottom-3 right-3 bg-pink text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full ">
            {p?.brand}
          </span>
          <img
            className="cursor-pointer rounded-t-lg lg:w-[22rem] lg:h-[22rem] xsm:w-[13rem]"
            src={p.image}
            alt={p.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </Link>
        <HeartIcon product={p} />
      </section>

      <div className="lg:p-5 xsm:p-2">
        <div className="flex justify-between">
          <h5 className="mb-2 lg:text-xl xsm:text-sm text-whiet text-black">{p?.name}</h5>
          <br></br>

          
        </div>

        <p className="mb-3 font-normal text-[#5c5b5b]">
          {p?.description?.substring(0, 10)} ...
        </p>
<p className="text-green-600 xsm:text-sm font-semibold ">
            {p?.price?.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        <section className="flex justify-between items-center">
          <Link
            to={`/product/${p._id}`}
            className="inline-flex items-center xsm:h-[2rem] xsm:w-[6rem] xsm:pl-2 xsm:text-[11px] lg:px-3 lg:py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:bg-pink dark:hover:bg-pink dark:focus:ring-pink"
          >
            Read More
            <svg
              className="lg:w-3.5 lg:h-3.5 xsm:w-5 xsm:h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>

          <button
            className="p-2 rounded-full"
            onClick={() => addToCartHandler(p, 1)}
          >
            <AiOutlineShoppingCart size={25} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;