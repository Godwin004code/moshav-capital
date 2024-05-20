import React from "react";

export default function IndividualForm() {
  return (
    <form
      action=""
      className="flex flex-col gap-8 register-form max-w-[1000px]"
    >
      {/* name */}
      <div className="flex sm:flex-col items-center gap-3">
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
      <div className="flex sm:flex-col items-center gap-3">
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
          <input type="text" name="confirm-password" id="confirm-password" />
        </div>
      </div>

      <div className="flex gap-2">
        <input
          type="checkbox"
          className="checkbox w-full !max-w-[15px]"
          name=""
          id=""
          style={{borderColor: 'red !important'}}
        />
        <p>
          I accept the <span className="text-[#1E772C]">Terms of Service</span>{" "}
          as well as <span className="text-[#1E772C]">privacy policy.</span>
        </p>
      </div>

      <button className="font-bold bg-[#1E772C] p-3 text-white rounded-md w-full">
        Register
      </button>
    </form>
  );
}
