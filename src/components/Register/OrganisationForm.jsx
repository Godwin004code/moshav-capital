import React from "react";

export default function OrganisationForm() {
  const stateArr = [
    "United States",
    "Canada",
    "Brazil",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Japan",
    "China",
    "India",
    "Australia",
    "South Africa",
    "Mexico",
    "Russia",
    "Spain",
  ];
  return (
    <form className="flex flex-col gap-8 register-form max-w-[1000px]">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="company-name" className="flex items-start">
          Company Name
          <span className="text-[red] text-xs items-start inline">*</span>
        </label>
        <input type="text" name="company-name" id="company-name" />
      </div>

      <div className="flex sm:flex-col items-center gap-3">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="company-type" className="flex items-start">
            Company Type
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input type="text" name="company-type" id="company-type" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="company-email" className="flex items-start">
            Company Email Address
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input type="text" name="company-email" id="company-email" />
        </div>
      </div>

      <div className="flex sm:flex-col items-center gap-3">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="country" className="flex items-start">
            Country
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input type="text" name="country" id="country" />
        </div>
        <div className="flex w-full gap-3 mt-5">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="state" className="flex items-start">
              State
              <span className="text-[red] text-xs items-start inline">*</span>
            </label>
            <select name="" id="state">
              {stateArr.map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="city" className="flex items-start">
              City
              <span className="text-[red] text-xs items-start inline">*</span>
            </label>
            <select name="" id="city">
              {stateArr.map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-col items-center gap-3">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="tel-number" className="flex items-start">
            Tel/Ph Number
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input type="text" name="tel-number" id="tel-number" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="url" className="flex items-start">
            Website URL (Optional)
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input type="text" name="url" id="url" />
        </div>
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
          <input type="text" name="confirm-password" id="confirm-password" />
        </div>
      </div>

      <div className="flex gap-2">
        <input
          type="checkbox"
          className="checkbox w-full !max-w-[15px]"
          name=""
          id=""
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
