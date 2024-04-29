"use client";

import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLink = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#Projects",
  },
  {
    title: "Contact",
    path: "#Contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);

  return (
    <nav className="bg-[#2A016E] fixed top-0 left-0 right-0 z-10 bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto md:px-[80px] px-[20px] py-7">
        <Link
          href="/"
          className="text-5xl md:text-4xl  text-white font-extrabold"
        >
          Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon onClick={()=> setnavbarOpen(true)} className="h-5 w-5"></Bars3Icon>
            </button>
          ) : (
            <button className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon onClick={()=> setnavbarOpen(false)} className="h-5 w-5"></XMarkIcon>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md-flex-row md-space-x-8 ">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLink}/>: null}
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
