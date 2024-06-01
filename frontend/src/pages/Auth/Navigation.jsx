import { useState } from "react";
import React from "react";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import { Menu } from "@mui/material/Menu";

import {
  AiFillHome,
  AiFillShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineLine,
  AiFillCarryOut,
  AiFillCreditCard,
  // AiFillShopping,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Auth/Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import FavoritesCount from "../Products/FavoritesCount";


export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem >
          
              <div className="flex flex-col  justify-center">
        <Link
          to="/"
          className="flex text-black font-semibold   items-center transition-transform transform hover:translate-x-2"
        >
          <AiFillHome
            color=""
            className="mr-2 mt-5 border-black  text-xl"
            size={26}
          />
        <span className="mt-6">HOME</span>
        </Link>

        <Link
          to="/shop"
          className="flex text-black font-semibold items-center transition-transform transform hover:translate-x-2"
        >
          <AiFillShopping className="mr-2 mt-[3rem]" size={26} />
          <span className=" mt-[3rem]">SHOP</span>
        </Link>

        <Link
          to="/cart"
          className="flex relative  text-black font-semibold items-center transition-transform transform hover:translate-x-2 "
        >
          <div className="flex items-center transition-transform transform hover:translate-x-2">
            <AiFillCarryOut className="mt-[3rem] mr-2" size={26} />
            <span className=" mt-[3rem]">Cart</span>{" "}
          </div>

          <div className="absolute top-9">
            {cartItems.length > 0 && (
              <span>
                <span className="px-1 py-0 text-sm text-white bg-purple-500 rounded-full">
                  {cartItems.reduce((a, c) => a + c.qty, 0)}
                </span>
              </span>
            )}
          </div>
        </Link>

        <Link to="/favorite" className="flex relative">
          <div className="flex text-black font-semibold items-center transition-transform transform hover:translate-x-2">
            <FaHeart className="mt-[3rem] mr-2" size={20} />
            <span className=" mt-[3rem]">
              Favorites
            </span>{" "}
            <FavoritesCount />
          </div>
        </Link>
      </div>
         
          </ListItem>
      
      </List>
    
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
      <img className=" absolute h-8 w-8 -top-[3.5rem]" src="https://tse4.mm.bing.net/th?id=OIP.6E_njRMJUwSjSkWsmqeWPAAAAA&pid=Api&P=0&h=180">

      </img>
        </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}