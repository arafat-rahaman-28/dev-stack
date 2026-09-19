import { useState } from "react";
import logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center md:container md:mx-auto mt-5 max-w-85 mx-auto">
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu />
      </button>

      <div className="left-logo">
        <img className="w-22" src={logo} alt="" />
      </div>

      <div className="center-links hidden md:block">
        <ul className="flex items-center gap-6">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div className="right-buttons flex gap-4">
        <button className="text-[12px] md:text-xl font-semibold">
          Sign In
        </button>
        <button className="bg-[#D91B7E] px-3 md:px-5 py-1.5 text-[12px] md:py-2.5 text-white font-semibold rounded-full md:text-xl">
          Sign Up
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 z-10 mt-4 w-full rounded-xl bg-white p-5 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
