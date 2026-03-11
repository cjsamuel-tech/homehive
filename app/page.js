"use client"
import Image from "next/image";
import { useState } from "react";
import {useEffect} from "react";

export default function Home() {
  
  return (
    <main>
      <div className=" md:bg-[url('/nicehuz.jpg')] h-[200vh] bg-no-repeat bg-cover">
      <h1 className="text-4xl font-bold text-blue-500 text-center">HomeHive, The Perfect Home</h1>
      <p className="text-2xl font-semibold text-center text-blue-400">Browse verified property listings from trusted agents and property owners, Find houses, land, and apartments for sale or rent quickly and easily.</p>
      </div>
      <h1 className="mt-4 text-center text-2x1 font-bold text-blue-600">Flexible Stays, Fully Furnished</h1>
      <p className="text-5x1 font-bold text-center">For Tenants Seeking Homes and Landlords Running Them_HomeHives Deliver</p>
      <div className="px-10 py-10 grid grid-cols-4">
        <div className="w-70 h-75 rounded-md shadow-md">
          <Image
          src="/rum1.jpg"
          alt="myimage"
          width={200}
          height={200}
          className="w-70 h-60 rounded-t-md"
          
        
          
          />
          <p></p>
        </div>
        <div className="w-70 h-75 rounded-md shadow-md">
          <Image
          src="/rum2.jpg"
          alt="myimage"
          width={200}
          height={200}
          className="w-70 h-60 rounded-t-md"
          
          />
        </div>
        <div className="w-70 h-75 rounded-md shadow-md">
          <Image
          src="/rum3.jpg"
          alt="myimage"
          width={200}
          height={200}
          className="w-70 h-60 rounded-t-md"
          
          />
        </div>
        <div className="w-70 h-75 rounded-md shadow-md">
          <Image
          src="/rum4.jpg"
          alt="myimage"
          width={200}
          height={200}
          className="w-70 h-60 rounded-t-md"
          
          />
        </div>
        </div>
        <div className="bg-[url('/cleanrum2.jpg')] h-[100vh] bg-no-repeat bg-contain bg-center">
        </div>
        <h1 className="mt-4 text-center text-2x6 font-bold text-blue-600">HomeHives is the Smarter Renting Solution for Tenants and Landlords Alike</h1>
        <div className="bg-[url('/image.png')] bg-contain bg-side">

        </div>

    </main>
    
  );
}
