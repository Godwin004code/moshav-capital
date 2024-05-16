import React, { useState } from "react";
import { Link } from "react-router-dom";
import individual from "../../Assets/individual.svg";
import organisation from "../../Assets/organisation.svg";
import bg from "../../Assets/afad8786512d39ebdfd7620ce7def7c5.jpeg";
import bg2 from "../../Assets/64d3e0194639eb0ba2a94c689cae43d7.jpeg";
import logo from "../../Assets/Group 43.png";
import RegisterArrow from "./RegisterArrow";
import Nav from "../Global/AboutNav";

import OrganisationForm from "./OrganisationForm";
import IndividualForm from "./IndividualForm";

const Register = () => {
  const [formType, setFormType] = useState("individual");
  const [active, setActive] = useState(0);
  const Data = [
    {
      img: bg,
      text: "Grow Your Agribusiness with Us",
      paragraph:
        "Sign in to continue your journey. Access exclusive features and persinalized experiences",
    },
    {
      img: bg2,
      text: "Grow Your Agribusiness with Moshav",
      paragraph:
        "Sign in to continue your journey. Access exclusive features and persinalized experiences",
    },
  ];
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
      <div
        className=" h-[100vh] w-[50%] md-2:hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
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
                <RegisterArrow
                  next={nextSlide}
                  prev={prevSlide}
                  active={active}
                  setActive={setActive}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* right side with form and title*/}
      <div className="flex flex-col px-20 pt-16 gap-8 font-medium w-[50%] md-2:w-[100%] md-2:p-4 py-[50px]">
        <div className="hidden md-2:block">
          {" "}
          <Nav />
        </div>
        <h1 className="text-4xl font-bold text-center">Register</h1>

        {/* Container to choose type of form */}
        <div className="flex justify-center items-center gap-4 sm:text-sm sm:gap-2 xs:text-xs">
          <span
            onClick={() => {
              setFormType("individual");
            }}
            className={`duration-300 register-type cursor-pointer flex justify-center items-center gap-3 xs:gap-1 max-w-[300px] ${
              formType == "individual"
                ? "bg-[#1E772C] text-white"
                : "border-2 border-[#1E772C] active"
            } p-3 px-6 sm:px-3 rounded-md`}
          >
            <img src={individual} alt="individual-icon" /> As an individual
          </span>
          <span
            onClick={() => {
              setFormType("organisation");
            }}
            className={`duration-300 register-type cursor-pointer flex justify-center items-center gap-3 xs:gap-1 max-w-[300px] ${
              formType == "organisation"
                ? "bg-[#1E772C] text-white active"
                : "border-2 border-[#1E772C]"
            } p-3 px-6 sm:px-3 rounded-md`}
          >
            <img src={organisation} alt="organisation-icon" /> As an
            organisation
          </span>
        </div>

        {formType == "individual" ? <IndividualForm /> : <OrganisationForm />}
      </div>
    </div>
  );
};

export default Register;
