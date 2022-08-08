import React from "react";
import Navbar from "../components/navbar";
import style from "../styles/pages.module.css";

export default function Custom404() {
  return (
    <>
      <Navbar />
      <div className={`${style.pagesBg} flex h-[93vh] justify-center items-center`}>
        <h2 className="text-white text-3xl text-center">404 Page Not Found</h2>
      </div>
    </>
  );
}
