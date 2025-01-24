import React from 'react'
import ProductCard from './ProductCard'


const ProductsData = [
    {
        img: "/w2000_q60.webp",
        title:"Whatch",
        desc: "Treking Whatch",
        rating: 1,
        price: "58.00",
    },
    {
        img: "/2c.webp",
        title:"Sports",
        desc: "Treking bag",
        rating: 2,
        price: "70.00",
    },
    {
        img: "/b1.jpg",
        title:"Sports",
        desc: "Treking bag",
        rating: 3,
        price: "58.00",
    },
    {
        img: "/EEEkit.webp",
        title:"Sports",
        desc: "Treking bag",
        rating: 4,
        price: "58.00",
    },
    {
        img: "/Perfume-.webp",
        title:"Sports",
        desc: "Treking bag",
        rating: 4,
        price: "58.00",
    },
    {
        img: "/-image_2782813.jpg",
        title:"Sports",
        desc: "Treking bag",
        rating: 4,
        price: "58.00",
    },
    {
        img: "/wp2154273.webp",
        title:"Sports",
        desc: "Treking bag",
        rating: 4,
        price: "58.00",
    },
    {
        img: "/black.jpg",
        title:"Sports",
        desc: "Treking bag",
        rating: 4,
        price: "58.00",
    },
                
]

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>

            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3
            xl:graid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                {ProductsData.map((item, index) => (
                    <ProductCard key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    rating={item.rating}
                    price={item.price}
                    />
            ))}
            </div>
        </div>
    </div>
  )
}

export default NewProducts