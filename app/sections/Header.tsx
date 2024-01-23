"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuOverlay from "../components/MenuOverlay";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { navlinks } from "../data";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={!navbarOpen ? "fixed mx-auto top-[2rem] left-0 right-0 z-10 bg-gray-300 w-[95%] rounded-full" : "fixed mx-auto top-[2rem] left-0 right-0 z-10 bg-gray-300 w-[95%]"}>
      <div className="flex container lg:py-3 flex-wrap items-center justify-between mx-auto px-4 py-2 max-[280px]:px-2">
        <Link
          href={"/"}
          className="text-xl font-semibold flex"
        >
          <Image
            src="icons/clear-link.svg"
            alt="company logo"
            width={20}
            height={20}
          />
          <p className="text-gray-900 ml-2 max-md:hidden">ClearLink</p>
        </Link>
        <div className="mobile-menu block lg:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-gray-900"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-gray-900"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden lg:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navlinks.map((navlink, index) => (
              <li key={index}>
                <Link href="/" className="flex">
                  {navlink.title}
                  {navlink.icon ? (
                    <Image
                      src={navlink.icon as string}
                      alt="drop-down"
                      width={20}
                      height={20}
                      className="ml-1"
                    />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
            <Link href='/'>
              <button className="bg-white text-gray-900 border border-gray-400 px-2 py-2 rounded-full">Talk to sales</button>
            </Link>
            <Link href='/'>
              <button className="text-white bg-blue-700 px-2 py-2 rounded-full ml-2">Sign up for free</button>
            </Link>
          </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};

export default Header;
