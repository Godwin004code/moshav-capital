import React from "react";
import partnerOne from "../../Assets/Afreximbank-logo 1.svg";
import partnerTwo from "../../Assets/african-development-bank-group-logo-vector_c91e91ee77e8009313ee809ab792c4e9 1.svg";
import partnerThree from "../../Assets/bank-of-agriculture-BOA 2.svg";
import partnerFour from "../../Assets/boi-header 1.svg";
import partnerFive from "../../Assets/logo-NEPC-left-res2-1 1.svg";

const OurPartners = () => {
  return (
    <section className="pt-10 pb-14">
      <h2 className="font-semibold text-black text-4xl text-center mb-10">
        Our Partners
      </h2>
      <marquee
        behavior=""
        direction="right"
        className="inline w-full md:hidden"
      >
        <section className="flex w-full justify-between">
          <img src={partnerOne} alt="partner one" />
          <img src={partnerTwo} alt="partner one" />
          <img src={partnerThree} alt="partner one" />
          <img src={partnerFour} alt="partner one" />
          <img src={partnerFive} alt="partner one" />
        </section>
      </marquee>

      <section className="w-full hidden md:flex flex-wrap gap-8 justify-center items-center">
        <img src={partnerThree} alt="partner one"   className="max-w-[180px]"/>
        <img src={partnerFour} alt="partner one"   className="max-w-[180px]"/>
        <img src={partnerOne} alt="partner one"   className="max-w-[180px]"/>
        <img src={partnerTwo} alt="partner one"   className="max-w-[180px]"/>
        <img src={partnerFive} alt="partner one"   className="max-w-[180px]"/>
      </section>
    </section>
  );
};

export default OurPartners;
