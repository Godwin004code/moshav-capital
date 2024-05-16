import React from "react";
import Hero from "./Hero";
import Whoweare from "./Whoweare";
import Why from "./Why";
import OurPartners from "./OurPartners";
import DoYouHaveAnyQuestions from "../Global/DoYouHaveAnyQuestions";
import Newsletter from "../Global/Newsletter";
import Footer from "../Global/Footer";
import OurStrongSides from "./OurStrongSides";
import HomeAccordion from "./HomeAccordion";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurPartners />
      <Whoweare />
      <Why />
      <Testimonials />
      <OurStrongSides />
      <section className="flex w-[90%] mx-auto justify-between py-16 pb-28 lg:flex-col lg:text-center">
        <div>
          <h2 className="text-[#1E772C] font-medium text-[18px]">Support</h2>
          <h2 className="font-bold text-5xl my-6">FAQ</h2>
          <h2 className="text-[#000] font-medium text-[18px]">
            Have a question and don’t see an answer below?
          </h2>
          <h2 className="text-[#000] font-medium text-[18px]">
            Feel free to reach out to us at{" "}
          </h2>
          <h2 className="text-[#1E772C] font-medium text-[18px]">
            contact@moshavcapital.com
          </h2>
        </div>
        <HomeAccordion />
      </section>
      <DoYouHaveAnyQuestions />

      <Newsletter />
       <Footer />
    </>
  );
};

export default HomePage;
