"use client";
import Link from "next/link";
import { NavLinks } from "../_data/data";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";

export default function Header() {
  const [isNavopen, setIsNavopen] = useState(false);
  return (
    <header>
      <div className="container max-w-screen-lg mx-auto nav ">
        <nav
          className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-3
          px-4
          text-lg text-gray-700
          bg-white
        "
        >
          <div>
            <Link href="/" onClick={() => setIsNavopen(false)}>
              <span className="text-2xl">LiFri Draws</span>
            </Link>
          </div>
          <VscThreeBars
            className=" cursor-pointer lg:hidden block"
            size={30}
            id="menu-button"
            onClick={() => setIsNavopen(!isNavopen)}
          />

          <div
            className={` w-full lg:flex lg:items lg:w-auto ${
              isNavopen ? "" : "hidden"
            }`}
            id="menu"
          >
            <ul
              className="
              pt-4
              text-lg text-gray-700
              lg:flex
              lg:justify-between 
              lg:pt-0"
            >
              {NavLinks.map(({ href, title }, index) => (
                <li key={index}>
                  <Link
                    className="lg:p-4 py-2 block  hover:text-slate-400 transition-colors"
                    href={href}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
