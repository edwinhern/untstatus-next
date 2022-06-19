import React from "react";
import Image from "next/image";
import Link from 'next/link';


const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center top-0">
    <div className={`realtive flex-grow-0 pt-0`}>
        <div className="container mx-auto p-0 pb-5 md:pb-0 text-white">
          <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
            <div className="flex flex-row justify-center mt-[0.5vh] lg:mt-[0vh] lg:p-3 p-[.8vh]">
              <Link href="/"><a>
              <Image src="/assets/logos/logo-100.svg"
                 width={100 / 3}
                 height={100 / 3}
                 alt="logo"
                />
              </a></Link>
            </div>
            <div className={`md:mt-4`}>
                <Link href="/canvas"><a className="p-4 px-3 sm:px-4 border-b-4 border-transparent hover:border-pink-500">Canvas</a></Link>
                <Link href="/lockdown"><a className="p-4 px-3 sm:px-4 border-b-4 border-transparent hover:border-green-500">Lockdown</a></Link>
                <Link href="/turnitin"><a className="p-4 px-3 sm:px-4 border-b-4 border-transparent hover:border-purple-500">Turnitin</a></Link>
                <Link href="/zoom"><a className="p-4 px-3 sm:px-4 border-b-4 border-transparent hover:border-blue-500">Zoom</a></Link>
                <Link href="https://buy.stripe.com/14k5mlcrTcbC7Li3cc"><a className="text-white p-4 px-3 sm:px-4 border-b-4 border-transparent hover:border-pink-500">Donate</a></Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Navbar;