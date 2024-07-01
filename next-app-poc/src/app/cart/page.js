'use client';

import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Image from 'next/image';

export default function Cart() {

    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('cartData')) || [];
        setCartData(storedData);
    }, []);

    const handleDeleteCart = (itemToDelete) => {
        const filteredData = cartData.filter((item) => item.title !== itemToDelete.title);
        setCartData(filteredData);
        localStorage.setItem('cartData', JSON.stringify(filteredData));
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-16">
            <Header cartData={cartData} />
            <h1 className=' pt-5'>Cart...</h1>
            <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex pt-10">
                {cartData.length === 0 ? <p className=' w-[100%] text-center text-gray-400'>No items added...</p> : (
                    <div className=" pt-7 grid grid-cols-3 gap-9">
                        {cartData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Image src={item.image} alt="A delicious meal" className=' w-[100%] rounded-lg' width='100' height='100' />
                                    <h2 className=' text-center font-sans text-sm pt-2 flex justify-between items-center pb-2'>{item.title} <span className=' bg-blue-700 p-2 text-white rounded-md cursor-pointer' onClick={() => handleDeleteCart(item)}>Delete Cart</span></h2>
                                    <p className=' text-center font-sans pt-2'>{item.summary}</p>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </main>
    )
}
