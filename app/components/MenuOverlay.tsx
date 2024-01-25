import React from "react";
import { navlinks } from "../data";
import Image from "next/image";
import Link from "next/link";

const MenuOverlay = () => {
  return (
    <div className="px-10 py-2 grid grid-cols-2 text-sm mt-[-1rem]">
      <ul className="flex flex-col py-4 items-start">
        {navlinks.map((navlink, index) => (
          <li key={index}>
            <Link href="/">
              {navlink.title}
              {navlink.icon ? (
                <Image
                  src={navlink.icon as string}
                  alt="drop-down"
                  width={20}
                  height={20}
                />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col mt-4 gap-4">
        <Link href="/">
        Talk to sales
        </Link>
        <Link href="/">
        Sign up for free
        </Link>
      </div>
    </div>
  );
};

export default MenuOverlay;
