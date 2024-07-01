import React from 'react';
import shoppingCart from "../assets/images/shopping-cart.png";
import Link from "next/link";
import Image from "next/image";

export default function Header({ cartData }) {
    return (
        <h1 className=" fixed w-[100%] top-0 p-5 flex justify-between items-center border-b bg-white z-20">
            <Link href="/">
                POC
            </Link>
            <Link href="/cart">
                <Image src={shoppingCart} width='20' height='20' className=" cursor-pointer" alt="An image with a cart symbol" /><span className=" w-4 h-4 rounded-[50%] bg-red-600 absolute right-5 top-2 text-[8px] text-white text-center flex items-center justify-center">{cartData.length}</span>
            </Link>
        </h1>
    )
}
