
import React, {useState} from 'react'
import logo from "../../Assets/Group 43.png";
import { Link } from 'react-router-dom';
import DropdownMenu from "./DropdownMenu"

const Nav = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
      };
    
      const handleMouseLeave = () => {
        setDropdownVisible(false);
      };
      

  return (
    <>
    <header className='flex justify-between py-9 w-[90%] mx-auto'>
      <Link to="/">  <img src={logo} alt="logo" /></Link>
        <ul className='flex my-auto gap-12'>
            <li>
                <Link to="/" className='font-medium text-xl text-white'>Home</Link>
            </li>
            <li>
                <Link to="/about" className='font-medium text-xl text-white'>About us</Link>
            </li>
            <li className='relative' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
                <Link to="/services" className='font-medium text-xl text-white flex'><span className='my-auto'>Services</span> <svg className='my-auto ml-2' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.15179 6.42898C6.07684 6.42989 6.00254 6.41511 5.93365 6.38559C5.86476 6.35606 5.80281 6.31245 5.75179 6.25755L0.608929 1.11469C0.380357 0.886122 0.380357 0.531836 0.608929 0.303265C0.8375 0.0746931 1.19179 0.0746931 1.42036 0.303265L6.16321 5.04612L10.8946 0.314693C11.1232 0.0861216 11.4775 0.0861216 11.7061 0.314693C11.9346 0.543265 11.9346 0.89755 11.7061 1.12612L6.56321 6.26898C6.44893 6.38327 6.30036 6.44041 6.16321 6.44041L6.15179 6.42898Z" fill="white"/>
</svg> </Link>
                {/* {isDropdownVisible && <div className='w-[76px] h-[5px] bg-[#71FF87] absolute'></div>} */}
                {isDropdownVisible && <DropdownMenu />}
            </li>
            <li>
                <Link to="/partners" className='font-medium text-xl text-white'>Partners</Link>
            </li>
            <li>
                <Link to="/contact" className='font-medium text-xl text-white'>Contact us</Link>
            </li>
        </ul>
        <section>
            <button className='bg-[#1E772C] text-white w-[106px] h-[47px]'>Register</button>
        </section>
    </header>
    
    </>
  )
}

export default Nav