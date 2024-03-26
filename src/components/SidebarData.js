import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

   //log out
   const logoutHandler = () =>{
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    localStorage.removeItem('id')

   }
 
export const SidebarData = [
  {
    title: "Profile",
    path: " ",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Create Profile",
        path: "/createprofile",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "View Profile",
        path: "/viewprofile",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Login",
    path: "/",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
   
  },
  {
    title: "Home",
    path: "home",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
   
  },
  {
    title: "Sell",
    path: "/sell",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Logout",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    onclick:{logoutHandler},
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
 