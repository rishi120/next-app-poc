'use client';

import React from 'react';
import { dummyMeals } from "./sampleData";
import Image from 'next/image';

export default function GridLayout({ handleAddToCart }) {

    return (
        <section className=' w-[100%]'>
            <h1 className=' text-center font-sans text-2xl'>Cards</h1>
            <div className=" pt-7 grid grid-cols-3 gap-9">
                {dummyMeals.map((item, index) => {
                    return (
                        <div key={index}>
                            <Image src={item.image} alt="A delicious meal" className=' w-[100%] rounded-lg' width='100' height='100' />
                            <h2 className=' text-center font-sans text-sm pt-2 flex justify-between items-center pb-2'>{item.title} <span className=' bg-blue-700 p-2 text-white rounded-md cursor-pointer' onClick={() => handleAddToCart(item)}>Add To Cart</span></h2>
                            <p className=' text-center font-sans pt-2'>{item.summary}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
