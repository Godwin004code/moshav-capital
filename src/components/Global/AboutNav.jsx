import React, { useState } from "react";
import logo from "../../Assets/Group 44nav2.svg";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import hamburger from "../../Assets/hamburger-black.svg";
import cross from "../../Assets/cross.svg";
import navLogo from "../../Assets/nav-logo.svg";

const Nav = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [mobileShown, setMobileShown] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  function toggleNav() {
    setMobileShown(!mobileShown);
  }

  return (
    <header className="flex justify-between  bg-white py-9 sm:py-3 w-[90%] mx-auto">
      <Link to="/">
        {" "}
        <img src={logo} className="sm:w-[100px]" alt="logo" />
      </Link>
      <ul className="flex my-auto gap-12 lg:hidden">
        <li>
          <Link to="/" className="font-medium text-xl text-black">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="font-medium text-xl text-black">
            About us
          </Link>
        </li>
        <li
          className="relative flex"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/services" className="font-medium text-xl text-black flex">
            {" "}
            <span>Services</span>{" "}
            <svg
              className="my-auto ml-2"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.15179 6.42898C6.07684 6.42989 6.00254 6.41511 5.93365 6.38559C5.86476 6.35606 5.80281 6.31245 5.75179 6.25755L0.608929 1.11469C0.380357 0.886122 0.380357 0.531836 0.608929 0.303265C0.8375 0.0746931 1.19179 0.0746931 1.42036 0.303265L6.16321 5.04612L10.8946 0.314693C11.1232 0.0861216 11.4775 0.0861216 11.7061 0.314693C11.9346 0.543265 11.9346 0.89755 11.7061 1.12612L6.56321 6.26898C6.44893 6.38327 6.30036 6.44041 6.16321 6.44041L6.15179 6.42898Z"
                fill="black"
              />
            </svg>
          </Link>
          {isDropdownVisible && <DropdownMenu />}
        </li>
        <li>
          <Link to="/partners" className="font-medium text-xl text-black">
            Partners
          </Link>
        </li>
        <li>
          <Link to="/contact" className="font-medium text-xl text-black">
            Contact us
          </Link>
        </li>
      </ul>
      <section>
        <Link to="/register">
          <button className="bg-[#1E772C] text-white w-[106px] h-[47px] lg:hidden">
            Register
          </button>
        </Link>
      </section>

      <button onClick={toggleNav} className="hidden lg:block w-[50px]">
        <img src={hamburger} className="hidden lg:block w-[50px] sm:w-[30px]" alt="" />
      </button>

      {/* container for mobile navigation */}
      <div
        className={`${
          mobileShown
            ? "left-[0%] pointer-events-auto"
            : "left-[100%] pointer-events-none"
        } fixed bg-white h-full w-full z-[100] overflow-auto left-0 top-0 text-black duration-500 ease-in-out`}
      >
        {/* Container for logo and cross button */}
        <div className="w-[90%] mx-auto py-10 mb-[40px] flex justify-between">
          <Link to="/">
            {" "}
            <img src={navLogo} className="w-[150px]" alt="logo" />
          </Link>
          <button onClick={toggleNav}>
            <img className="w-[50px]" src={cross} alt="" />
          </button>
        </div>

        <ul className="flex my-auto gap-16 w-[90%] mx-auto flex-col text-3xl sm:text-xl sm:gap-8">
          <li>
            <Link to="/" className="font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-medium">
              About us
            </Link>
          </li>
          <li className="relative flex items-center gap-3">
            <Link to="/services" className="font-medium flex">
              <span className="my-auto">Services</span>{" "}
            </Link>
            <svg
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="my-auto ml-2 scale-[1.3]"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.15179 6.42898C6.07684 6.42989 6.00254 6.41511 5.93365 6.38559C5.86476 6.35606 5.80281 6.31245 5.75179 6.25755L0.608929 1.11469C0.380357 0.886122 0.380357 0.531836 0.608929 0.303265C0.8375 0.0746931 1.19179 0.0746931 1.42036 0.303265L6.16321 5.04612L10.8946 0.314693C11.1232 0.0861216 11.4775 0.0861216 11.7061 0.314693C11.9346 0.543265 11.9346 0.89755 11.7061 1.12612L6.56321 6.26898C6.44893 6.38327 6.30036 6.44041 6.16321 6.44041L6.15179 6.42898Z"
                fill="black"
              />
            </svg>
            {/* {isDropdownVisible && <div className='w-[76px] h-[5px] bg-[#71FF87] absolute'></div>} */}
            {isDropdownVisible && <DropdownMenu />}
          </li>
          <li>
            <Link to="/partners" className="font-medium">
              Partners
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-medium">
              Contact us
            </Link>
          </li>

          <Link to="/register">
            <button className="bg-[#1E772C] text-white w-full mt-[80px] rounded-md py-4 px-10">
              Register
            </button>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
