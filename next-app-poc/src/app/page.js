'use client';
import React, { useEffect, useState } from "react";
import GridLayout from "./main/page";
import Header from "../components/Header";

export default function Home() {
  const [data, setData] = useState([]);

  /**
   * this useEffect has been used to get the entire cartData array.
   * then updating the existing state with the storedData variable for an immediate change.
   */
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cartData')) || [];
    setData(storedData);
  }, []);


  /**
   * the function below adds a sepcific item to the cart.
   * the updatedData variable keeps on pushing the items one after the other.
   * then setting the state with the updatedData variable.
   * 
   */

  const handleAddToCart = (item) => {
    const updatedData = [...data, item];
    setData(updatedData);
    localStorage.setItem('cartData', JSON.stringify(updatedData));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Header cartData={data} />
      <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex pt-10">
        <GridLayout handleAddToCart={handleAddToCart} />
      </div>
    </main>
  );
}
