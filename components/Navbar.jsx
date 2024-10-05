import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gdsclogoDark from "../assets/GDSC Logo Long Dark.png";
import ThemeButton from "./ThemeButton";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  // useState hook to toggle the menu button
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the menu button
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const inactiveLink =
    "button hover:scale-105 transition hover:border hover:border-red-400 rounded-full py-1 px-2 font-normal";
  const activeLink =
    inactiveLink +
    " border text-green-500 border-green-500 rounded-full py-1 px-2 font-normal hover:border-green-500";
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <nav className="sticky bg-white top-0 w-full left-0 z-40 backdrop-blur-md text-gray-600">
        <div className="container max-w-full px-4 md:px-8">
          <div className="flex items-center justify-between py-1 h-14 sm:h-20">
            <Link href="/" className="transform scale-75 ">
              <div className="flex items-center">
                <Image
                  src={gdsclogoDark}
                  alt="logo"
                  width={500}
                  prefetch={true}
                  className="left-0 p-1"
                />
              </div>
            </Link>

            {/* Menu button for mobile devices */}
            <div className="md:hidden">
              <button
                className="mobile-menu-button transform hover:scale-105 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  //
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Menu items */}
            <ul className="md:flex md:items-center md:gap-8 mx-2 font-light md:ml-4 hidden">
            <li
                className={
                  pathname.includes("/events") ? activeLink : inactiveLink
                }
              >
              </li>
              <li
                className={
                  pathname.includes("/events") ? activeLink : inactiveLink
                }
              >
                <Link href="/events">Events</Link>
              </li>
              <li
                className={
                  pathname.includes("/mentors") ? activeLink : inactiveLink
                }
              >
                <Link href="/mentors">Our Mentors</Link>
              </li>
              <li
                className={
                  pathname.includes("/team") ? activeLink : inactiveLink
                }
              >
                <Link href="/team">Team</Link>
              </li>
              <li
                className={
                  pathname.includes("/Contributors") ? activeLink : inactiveLink
                }
              >
                <Link href="/Contributors">Contributors</Link>
              </li>
              <li className="button hover:scale-105 transition border text-green-500 border-green-500 rounded-full py-1 px-2 font-normal">
                <Link href="/">Previous Sponsors</Link>
              </li>
            </ul>

            {/* mobile menu items */}
            <ul
              className={`${
                isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
              } absolute top-full text-left left-0 right-0 md:hidden transition-all duration-300 transform origin-top ease-in-out bg-white bg-opacity-90`}
            >
              <li className="border-y-2 pl-10 py-2">
                <Link href="/mentors">Mentors</Link>
              </li>
              <li className="border-b-2 pl-10 py-2">
                <Link href="/events">Event</Link>
              </li>
              <li className="border-b-2 pl-10 py-2">
                <Link href="/">Sponsors</Link>
              </li>
              <li className="border-b-2 pl-10 py-2">
                <Link href="/team">Team</Link>
              </li>
            </ul>
            {/* <ThemeButton /> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
