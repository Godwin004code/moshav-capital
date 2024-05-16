import React from "react";
import whyOne from "../../Assets/whyone.jpeg";
import whyTwo from "../../Assets/whytwo.jpeg";
import whyThree from "../../Assets/whythree.jpeg";
import whyFour from "../../Assets/whyfour.jpeg";

const Why = () => {
  return (
    <section className="py-12 why-moshav">
      <h1 className="text-[#000000] text-4xl sm:hidden sm:text-3xl font-bold text-center sm:text-left w-[90%] mx-auto">
        Why choose Moshav Capital
      </h1>
      <h1 className="text-[#000000] sm:block hidden text-4xl sm:text-3xl font-bold text-center sm:text-left w-[90%] mx-auto">
        Why Choose Us
      </h1>
      <p className="text-[#000000] text-2xl sm:text-lg text-center sm:text-left w-[90%] mx-auto mt-4">
        We offer exceptional services ranging from
      </p>

      <div className="flex justify-between w-[90%] mt-10 mb-32 md-2:mb-16 mx-auto md-2:flex-col-reverse">
        <div className=" ml-16 lg:ml-8 mr-7 mt-10 md-2:m-0">
          <h2 className="font-extrabold text-[32px] sm:text-[20px]">01</h2>
          <h2 className="text-[#1E772C] font-semibold text-3xl sm:text-2xl">
            Financial intermediary services
          </h2>
          <img
            className="w-full md-2:max-w-[500px] hidden md-2:block"
            src={whyOne}
            alt="why one"
          />
          <p className="font-medium text-lg mt-6 sm:text-sm">
            Moshav Capital facilitates access to innovative financial products
            and services designed specifically for micro, small, and medium
            enterprises (MSMEs) in the agribusiness sector. This includes loans,
            credit facilities, and investment opportunities tailored to the
            unique needs of agribusiness entrepreneurs.
          </p>
          <button className="bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl sm:text-base sm:w-[130px] sm:h-[50px]">
            Learn more
          </button>
        </div>

        <div className="my-auto md-2:hidden">
          <img
            className="w-full md-2:max-w-[500px]"
            src={whyOne}
            alt="why one"
          />
        </div>
      </div>

      <div className="flex justify-between w-[90%] mt-10 mb-32 md-2:mb-16 mx-auto md-2:flex-col">
        <h2 className="font-extrabold text-[32px] mt-10 md-2:block hidden sm:text-[20px]">
          02
        </h2>
        <h2 className="text-[#1E772C] font-semibold text-3xl hidden md-2:block mb-4 sm:text-2xl">
          Commodity warehousing & collateral Management
        </h2>

        <div className="my-auto">
          <img
            className="w-full md-2:max-w-[500px]"
            src={whyTwo}
            alt="why one"
          />
        </div>
        <div className="ml-32 mr-7 lg:ml-16 md-2:ml-4 md-2:mt-8  mt-24 sm:m-0">
          <h2 className="text-[#1E772C] font-semibold text-3xl md-2:hidden">
            Commodity warehousing & collateral Management
          </h2>
          <p className="font-medium text-lg mt-6 sm:text-sm">
            We offers secure commodity warehousing facilities and collateral
            management services, enabling MSMEs to leverage their produce and
            assets to access financing and mitigate risks.
          </p>
          <button className="bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl sm:text-base sm:w-[130px] sm:h-[50px]">
            Learn more
          </button>
        </div>
        <h2 className="font-extrabold text-[32px] mt-10 md-2:hidden">02</h2>
      </div>

      <div className="flex justify-between w-[90%] mt-10 mb-32 md-2:mb-16 mx-auto md-2:flex-col-reverse">
        <h2 className="font-extrabold text-[32px] mt-10 md-2:hidden">03</h2>
        <div className=" ml-16 lg:ml-8 mr-7 mt-24 md-2:ml-4 md-2:mt-8 sm:m-0">
          <h2 className="font-extrabold text-[32px] mt-10 md-2:block sm:text-[20px]  hidden">
            03
          </h2>

          <h2 className="text-[#1E772C] font-semibold text-3xl mb-4 sm:text-2xl">
            Cluster marketing support & Brokerage Services
          </h2>
          <img
            className="w-full md-2:max-w-[500px] hidden md-2:block"
            src={whyThree}
            alt="why one"
          />
          <p className="font-medium text-lg mt-6 sm:text-sm">
            By fostering collaboration among enterprises in specific geographic
            areas or sectors, we facilitate joint promotion, distribution, and
            market penetration strategies. This approach boosts visibility,
            expands customer reach, and drives sales growth for participating
            businesses, ultimately strengthening the agribusiness ecosystem.
          </p>
          <button className="bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl sm:text-base sm:w-[130px] sm:h-[50px]">
            Learn more
          </button>
        </div>
        <div className="my-auto hidden">
          <img
            className="w-full md-2:max-w-[500px]"
            src={whyThree}
            alt="why one"
          />
        </div>
      </div>

      <div className="flex justify-between w-[90%] mt-10 mb-32 md-2:mb-16 mx-auto md-2:flex-col">
        <h2 className="font-extrabold text-[32px] mt-10 hidden sm:text-[20px] md-2:block">
          04
        </h2>
        <h2 className="text-[#1E772C] font-semibold text-3xl md-2:block hidden mb-4 sm:text-2xl">
          Infrastructure as-a-service
        </h2>

        <div className="my-auto">
          <img
            className="w-full md-2:max-w-[500px]"
            src={whyFour}
            alt="why one"
          />
        </div>
        <div className="ml-32 lg:ml-16 mr-7 md-2:ml-4 md-2:mt-8  mt-24 sm:m-0">
          <h2 className="text-[#1E772C] font-semibold text-3xl md-2:hidden">
            Infrastructure as-a-service
          </h2>
          <p className="font-medium text-lg mt-6 sm:text-sm">
            Infrastructure-as-a-Service (IaaS) by Moshav Capital offers
            agribusinesses scalable computing resources, cloud-based
            applications, and digital tools to optimize operations and enhance
            efficiency without upfront infrastructure investments. Leverage
            modern technology to streamline processes and adapt to market
            demands effectively.
          </p>
          <button className="bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl sm:text-base sm:w-[130px] sm:h-[50px]">
            Learn more
          </button>
        </div>
        <h2 className="font-extrabold text-[32px] mt-10 md-2:hidden">04</h2>
      </div>
    </section>
  );
};

export default Why;
