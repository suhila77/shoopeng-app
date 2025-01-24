import React from 'react';

import  {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import  {FaLinkedin} from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-4">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header_top__icon_wrapper">
                        <FaFacebook />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <FaTwitter />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <FaInstagramSquare />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <FaLinkedin />
                    </div>
                </div>


                <div className='text-gray-500 text-[12px]'>
                    <b>FREE SHOPPPING</b> THIS WEEK ORDER OVER - $55
                </div>

                <div>
                    <select
                    className='text-gray-500 text-[12px] w-[70px]' 
                    name="currency" 
                    id="currency"
                    >
                        <option value="USD $">USD $</option>
                        <option value="EUR €">EUR €</option>
                        <option value="LYD">LYD</option>
                    </select>

                    <select
                    className='text-gray-500 text-[12px] w-[80px]' 
                    name="language" 
                    id="language"
                    >
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Arabic">Arabic</option>
                    </select>
                </div>


            </div>
        </div>
    </div>
  )
};

export default HeaderTop;