"use client";

import React from 'react';
import Slider from 'react-slick';
import Slide from './slide';

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/1496231.webp",
            title: "Trending Item",
            mainTitle: "LETS START SHOPPINGS",
            price: "15$",
        },
        {
            id: 1,
            img: "/shop1.jpg",
            title: "Trending Item",
            mainTitle: "LETS START SHOPPINGS",
            price: "15$",
        },
        {
            id: 2,
            img: "/wp1877610.webp",
            title: "Sale Offer",
            mainTitle: "LETS START SHOPPINGS",
            price: "15$",
        },
    ];
    

  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
         <Slider {...settings}>
            {slideData.map((item) => (
                <Slide key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price} />
            ))}
          </Slider>
        </div>
    </div>
  );
};

export default Hero;