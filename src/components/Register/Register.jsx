import React, {useState} from "react";
import { Link } from "react-router-dom";
import individual from "../../Assets/individual.svg";
import organisation from "../../Assets/organisation.svg";
import bg from "../../Assets/afad8786512d39ebdfd7620ce7def7c5.jpeg"
import bg2 from "../../Assets/64d3e0194639eb0ba2a94c689cae43d7.jpeg"
import logo from "../../Assets/Group 43.png";
import RegisterArrow from "./RegisterArrow";


const Register = () => {
  const [active, setActive] = useState(0);
  const Data = [
    {
      img: bg,
      text: "Grow Your Agribusiness with Us",
      paragraph: "Sign in to continue your journey. Access exclusive features and persinalized experiences"
    },
    {
      img: bg2,
      text: "Grow Your Agribusiness with Moshav",
      paragraph: "Sign in to continue your journey. Access exclusive features and persinalized experiences"
    },

  ]
  const { text, img, paragraph } = Data[active];

  const nextSlide = () => {
    setActive(() => {
      let newIndex = active + 1;

      if (newIndex > Data.length - 1) {
        return 0;
      } else if (newIndex < 0) {
        return Data.length - 1;
      }

      return newIndex;
    });
  };

  const prevSlide = () => {
    setActive(() => {
      let newIndex = active - 1;

      if (newIndex < 0) {
        return Data.length - 1;
      } else if (newIndex > Data.length - 1) {
        return 0;
      }

      return newIndex;
    });
  };

  return (
    <div className="flex">
      {/* Container for image with slider */}
      <div   className=" h-[100vh] w-[50%] md-2:hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>

<section className="bg-[#00000080] w-full px-12 py-10 flex flex-col justify-between h-full">
<div>
<Link to="/">
          {" "}
          <img src={logo} alt="logo" />
        </Link>
</div>
<div className="mb-10">
  <h2 className="text-white font-semibold text-4xl mb-8">{text}</h2>
  <div className="flex justify-between">
  <p className="text-white text-[20px] w-[60%]">{paragraph}</p>
  <div className="flex w-fit">
    <RegisterArrow next={nextSlide} prev={prevSlide} active={active} setActive={setActive} />           
  </div>
  </div>
</div>
</section>
      </div>

      {/* right side with form and title*/}
      <div className="flex flex-col px-20 pt-16 gap-8 font-medium w-[50%] py-[50px]">
        <h1 className="text-4xl font-bold text-center">Register</h1>

        {/* Container to choose type of form */}
        <div className="flex justify-center items-center gap-4">
          <span className="cursor-pointer flex justify-center items-center gap-3 max-w-[300px] bg-[#1E772C] text-white p-3 px-6 rounded-md">
            <img src={individual} alt="individual-icon" /> As an individual
          </span>
          <span className="cursor-pointer flex justify-center items-center gap-3 max-w-[300px] border-2 border-[#1E772C] p-3 px-6 rounded-md">
            <img src={organisation} alt="organisation-icon" /> As an
            organisation
          </span>
        </div>

        <form
          action=""
          className="flex flex-col gap-8 register-form max-w-[1000px]"
        >
          {/* name */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="first-name" className="flex items-start">
                First Name{" "}
                <span className="text-[red] text-xs items-start inline">*</span>
              </label>
              <input type="text" name="first-name" id="first-name" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="last-name" className="flex items-start">
                Last Name{" "}
                <span className="text-[red] text-xs items-start inline">*</span>
              </label>
              <input type="text" name="last-name" id="last-name" />
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="flex items-start">
              Email Address{" "}
              <span className="text-[red] text-xs items-start inline">*</span>
            </label>
            <input type="text" name="email" id="email" />
          </div>

          {/* phone */}
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="flex items-start">
              Phone Number{" "}
              <span className="text-[red] text-xs items-start inline">*</span>
            </label>
            <input type="text" name="phone" id="phone" />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="password " className="flex items-start">
                Password{" "}
                <span className="text-[red] text-xs items-start inline">*</span>
              </label>
              <input type="text" name="password" id="password" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="confirm-password" className="flex items-start">
                Confirm Password{" "}
                <span className="text-[red] text-xs items-start inline">*</span>
              </label>
              <input
                type="text"
                name="confirm-password"
                id="confirm-password"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" className="max-w-[20px]" name="" id="" />
            <p>
              I accept the <span className="text-[#1E772C]">Terms of Service</span> as well as{" "}
              <span className="text-[#1E772C]">privacy policy.</span>
            </p>
          </div>

          <button className="font-bold bg-[#1E772C] p-3 text-white rounded-md w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
