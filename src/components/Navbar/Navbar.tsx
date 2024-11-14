"use client";
import { navItems } from "./components/itemLink";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ToggleButtonComponent from "./components/toggleButton";
import Image from "next/image";
import { Images } from "../../../public/assets/Images";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={` hidden md:flex justify-around flex-row items-center h-16 bg-primaryDark z-30 text-white`}
      >
        <div className="">
          <Image src={Images.logo} alt="ShwraLogo" width={100} />
        </div>
        <div className=" flex  flex-row gap-12">
          {navItems?.map((item, index: number) => {
            const isActive = pathname === item.url;

            return (
              <Link
                className={`text-[16px] font-normal border-b-2 transition-all duration-300 ease-in-out ${
                  isActive
                    ? "text-primaryLight border-primaprimaryLightryActive"
                    : "border-transparent hover:text-primaryLight hover:border-primaryLight"
                }`}
                key={index}
                href={item.url}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex md:hidden items-center justify-between w-full px-4 py-3 bg-primaryDark z-20 text-white ">
        <div>DIY</div>
        <button onClick={toggleMenu} className="text-darkBlue">
          <ToggleButtonComponent isOpen={isOpen} handleToggle={toggleMenu} />
        </button>
      </div>

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primaryLight shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex items-center justify-between px-4 py-3">DIY</div>
        <div className="flex flex-col gap-10 px-4 justify-center mt-16 font-semibold">
          {navItems?.map((item, index) => {
            const isActive = pathname === item.url;

            return (
              <Link
                className={`text-[20px]   border-b-2 transition-all duration-300 ease-in-out ${
                  isActive
                    ? "text-primaryDark border-primaryDark"
                    : "border-transparent hover:text-primaryDark hover:border-primaryDark"
                }`}
                key={index}
                href={item.url}
              >
                <span className="flex justify-center items-center">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 "
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;
