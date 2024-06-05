import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  AiOutlineUser,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import FavoritesCount from "../Products/FavoritesCount";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="  lg:w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    to="/"
                    className="text-xl absolute left-11 font-semibold text-green-600"
                  >
                   De Luxe Aurum
                  </Link>
                  <div className="absolute right-3   z-50   left-[11rem]">
                    <button
                      onClick={toggleDropdown}
                      className="flex  items-center font-semibold text-black focus:outline-none"
                    >
                      {userInfo ? (
                        <span className="text-black   rounded-md text-bold absolute right-2 ">
                          <UserIcon className=" p-1 bg-[#ebe9e9]  border-1 rounded-full mt-2 h-8 ml-[5rem]"/>
                          {/* {userInfo.username} */}
                        </span>
                      ) : (
                        <></>
                      )}
                      {userInfo && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ml-1 ${
                            dropdownOpen ? "transform rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                              dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"
                            }
                          />
                        </svg>
                      )}
                    </button>

                    {dropdownOpen && userInfo && (
                      <ul
                        className={`absolute -right-10 top-5 h-[20rem] mt-1 mr-16 space-y-2 rounded-lg bg-[#f0efef] text-gray-600 ${
                          !userInfo.isAdmin ? "-top-20" : "-top-80"
                        } `}
                      >
                        {userInfo.isAdmin && (
                          <>
                            <li className="hover:bg-green-600">
                              <Link
                                to="/admin/dashboard"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Dashboard
                              </Link>
                            </li>
                            <li className="hover:bg-green-600">
                              <Link
                                to="/admin/productlist"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Products
                              </Link>
                            </li>
                            <li className="hover:bg-green-600">
                              <Link
                                to="/admin/categorylist"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Category
                              </Link>
                            </li>
                            <li className="hover:bg-green-600">
                              <Link
                                to="/admin/orderlist"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Orders
                              </Link>
                            </li>
                            <li className="hover:bg-white">
                              <Link
                                to="/admin/userlist"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Users
                              </Link>
                            </li>
                          </>
                        )}

                        <li className="hover:bg-white">
                          <Link
                            to="/profile"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="hover:bg-white">
                          <button
                            onClick={logoutHandler}
                            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    )}
                    {!userInfo && (
                      <div className="p-0">
                        <div className="flex items-center">
                          <Link
                            to="/login"
                            className="flex items-center xsm:ml-[6rem] xsm:mb-4 text-black text-semibold mt-5 transition-transform transform hover:translate-x-2"
                          >
                            <AiOutlineLogin
                              className="mr-2 text-black mb"
                              size={26}
                            />
                            <span className="hidden nav-item-name">LOGIN</span>
                          </Link>

                          <Link
                            to="/register"
                            className="flex items-center  xsm:ml-[4px] text-black lg:mt-5 transition-transform transform hover:translate-x-2"
                          >
                            <AiOutlineUserAdd size={26} />
                            <span className="hidden nav-item-name">
                              REGISTER
                            </span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex  justify-center mt-1 ml-[25rem]  items-center space-x-4">
                  <Link to="/shop"
                    className="text-gray-300 hover:bg-green-600 hover:text-white
                    rounded-md px-3 py-2 text-sm font-semibold"
                  >
                    Category 
                  </Link>
                  <Link to="/favorite"
                    className="text-gray-300 hover:bg-green-600 hover:text-white
                          rounded-md px-3 py-2 text-sm font-semibold"
                  >
                  Favorites
                  </Link>
                  <Link to="/shop"
                    className="text-gray-300 hover:bg-green-600 hover:text-white
                          rounded-md px-3 py-2 text-sm font-semibold"
                  >
                    Shop
                  </Link>
                  <Link to="/login"
                    className="text-gray-300 hover:bg-green-600 hover:text-white
                          rounded-md px-3 py-2 text-sm font-semibold"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
