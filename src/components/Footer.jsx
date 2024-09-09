import React from "react";
import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer text-white">
        <div className="top grid gay-10 py-[50px] lg:grid-cols-5 px-[5%] grid-cols-2 md:grid-cols-3">
          <div className="cols col-span-1">
            <div className="flex gap-3 my-3 mt-0 pt-0 text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer">
              <div className="">
                <img src="./img/Logo.png" alt="" />
              </div>
            </div>
            <div className="flex gap-3 my-3 text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer">
              <div className="">
                <img src="./img/Location.png" alt="" />
              </div>
              Walsis Pvt. Ltd
            </div>
            <div className="flex gap-3 my-3 text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer">
              <div className="">
                <img src="./img/Calling.png" alt="" />
              </div>
              +91 7979857172
            </div>
            <div className="flex gap-3 my-3 text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer">
              <div className="">
                <img src="./img/Message.png" alt="" />
              </div>
              www.walsisindia.com
            </div>
            <div className="flex gap-[15px] mt-[10px]">
              <img
                className="cursor-pointer hover:mt-[-5px] hover:mb-[5px] duration-300"
                src="./img/facebook.png"
                alt=""
              />
              <img
                className="cursor-pointer hover:mt-[-5px] hover:mb-[5px] duration-300"
                src="./img/twitter.png"
                alt=""
              />
              <img
                className="cursor-pointer hover:mt-[-5px] hover:mb-[5px] duration-300"
                src="./img/instagram.png"
                alt=""
              />
              <img
                className="cursor-pointer hover:mt-[-5px] hover:mb-[5px] duration-300"
                src="./img/pinterest.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1">
            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer leading--[40px] tracking-[0.01em]">
              Service
            </li>
            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer leading--[40px] tracking-[0.01em]">
              Order Management
            </li>
            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer leading--[40px] tracking-[0.01em]">
              Social Assistant
            </li>
          </div>
          <div className="cols col-span-1">
            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer">
              Company
            </li>
            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer">
              About Us
            </li>
            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer">
              News
            </li>
          </div>
          <div className="cols col-span-1">
            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer">
              Supports
            </li>

            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer ">
              Feedback
            </li>
            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer ">
              Contact us
            </li>
          </div>
          <div className="cols col-span-1">
            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer ">
              Resoucers
            </li>
            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer ">
              Download
            </li>

            <li className=" list-none my-3 text-lg text-[#FFFFFFCC] hover:text-violet-700 duration-300 cursor-pointer ">
              What`s new
            </li>
          </div>
        </div>
        <div className="text-white text-xl flex justify-center items-center py-6 md:row-span-1 gap-8">
          <FaFacebookF className="hover:text-violet-700 duration-300 cursor-pointer "/>
          <FaInstagram className="hover:text-violet-700 duration-300 cursor-pointer "/>
          <FaXTwitter className="hover:text-violet-700 duration-300 cursor-pointer "/>
        </div>
      </div>

     
    </>
  );
};

export default Footer;
