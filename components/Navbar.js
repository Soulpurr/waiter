import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import React from "react";
// import logo from "../../images/logo.png";

const Navbar = () => {
  const [profile, setprofile] = useState([{}]);

  let user = false;

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="bg-black w-full flex  md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <h1 className="w-32 text-2xl font-extrabold text-white cursor-pointer">
          YourHr
        </h1>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <Link href={"/"} className="mx-4 cursor-pointer text-white">
          Home
        </Link>
        <Link
          href={`/reception`}
          className="mx-4 cursor-pointer text-white"
        >
          Reception
        </Link>
        <Link href={"/waiter"} className="mx-4 cursor-pointer text-white">
          Waiter
        </Link>
      </ul>

      <div className="flex relative ">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed bg-black -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>

            <Link href={"/"} className="mx-4 cursor-pointer text-white">
              Home
            </Link>
            <Link
              href={`/reception`}
              className="mx-4 cursor-pointer text-white"
            >
              Reception
            </Link>
            <Link href={"/waiter"} className="mx-4 cursor-pointer text-white">
              Waiter
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
