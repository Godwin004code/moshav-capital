import React, { useState } from "react";
import individual from "../../Assets/individual.svg";
import organisation from "../../Assets/organisation.svg";
import OrganisationForm from "./OrganisationForm";
import IndividualForm from "./IndividualForm";

const Register = () => {
  const [formType, setFormType] = useState("individual");

  return (
    <div>
      {/* Container for image with slider */}
      <div></div>

      {/* right side with form and title*/}
      <div className="flex flex-col gap-8 font-medium w-[50%] md-2:w-[100%] md-2:p-4 py-[50px]">
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

        {formType == "individual" ? <IndividualForm />  : <OrganisationForm />}
      </div>
    </div>
  );
};

export default Register;
