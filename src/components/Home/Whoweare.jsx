import React from "react";
import img from "../../Assets/moshav-who-we-are.jpeg";

const Whoweare = () => {
  return (
    <section className="w-full bg-[#FAFFF5] py-10">
      <h2 className="text-[#000000] text-4xl sm:text-3xl w-[90%] mx-auto font-bold md-2:mb-10">
        Who We Are
      </h2>
      <div className="flex justify-between w-[90%] mx-auto md-2:flex-col-reverse">
        <div className="w-[45%] md-2:w-[90%] sm:w-[100%] my-auto">
          <p className="text-lg sm:text-base mt-8">
            <span className="text-[#1E772C]">Moshav Capital Ltd</span> is an
            economic empowerment platform, provisioning innovative financial
            intermediary, commodity warehousing, collateral management, cluster
            marketing support, brokerage and infrastructure-as-a-service
            offerings to micro, small, and medium enterprises (MSMEs) within the
            Agribusiness sector.
          </p>
          <button className="bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl sm:text-base sm:w-[130px] sm:h-[50px] rounded-xl">
            Learn more
          </button>
        </div>
        <div className="w-[40%] md-2:w-[90%] sm:w-[100%] md-2:max-w-[500px]">
          <img
            src={img}
            className="w-full h-[600px] md-2:max-h-[400px] rounded-[5px] object-cover"
            alt="who we are"
          />
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
