
import React from 'react';

import Link from "next/link";



function Navbar  () {
    return (
        <div className="hidden lg:block">
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                    <Link className='navbar__link relative' href="#" >HOME</Link>
                    <Link className='navbar__link relative' href="#" >CATEGORIES</Link>
                    <Link className='navbar__link relative' href="#" >MEN'S</Link>
                    <Link className='navbar__link relative' href="#" >WOMEN'S</Link>
                    <Link className='navbar__link relative' href="#" >PERFUM</Link>
                    <Link className='navbar__link relative' href="#" >BLOG</Link>
                    <Link className='navbar__link relative' href="#" >OFFERS</Link>
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;