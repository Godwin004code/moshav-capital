import React, { useEffect, useRef, useState } from "react";
import arrowLeft from "../../Assets/arrowLeft.svg";
import arrowRight from "../../Assets/arrowRight.svg";
import quote from "../../Assets/quote.svg";
import Jessica from "../../Assets/Jessica.png";
import david from "../../Assets/david.png";
import Aishat from "../../Assets/Aishat.png";
import mohammad from "../../Assets/mohammad.png";
import gsap from "gsap";

export default function Testimonials() {
  const count = useRef(0);
  const [control, setControl] = useState(0);

  const testimonials = [
    {
      title: "Achieving Growth with Moshav Capital",
      para: `Moshav Capital's services transformed our business, driving growth
            with tailored financing, secure warehousing, and effective marketing
            support. Highly recommended for agribusiness scaling and success.`,
      name: "Jessica Davis",
      profession: "Farmer",
      image: Jessica,
    },
    {
      title: " Empowering my businesswith Moshav Capital",
      para: `Moshav Capital's tailored financial solutions helped me expand my farm operations and increase productivity. Their support was instrumental in achieving sustainable growth in the agribusiness sector. `,
      name: "Mohammed Alake",
      profession: "Agricultural Entrepreneur",
      image: mohammad,
    },
    {
      title: "Transforming Agribusiness with Moshav Capital",
      para: `Moshav Capital's services transformed our business, driving growth with tailored financing, secure warehousing, and effective marketing support. Highly recommended for agribusiness scaling and success.`,
      name: "David Banjo",
      profession: "Farm owner",
      image: david,
    },
    {
      title: "Driving Agribusiness Success",
      para: `With Moshav Capital's infrastructure-as-a-service solutions, we modernized our agribusiness operations and increased productivity. Their technology tools have been instrumental in streamlining processes.`,
      name: "Aishat Ishola",
      profession: "Agribusiness Trader",
      image: Aishat,
    },
  ];

  function moveCard(direction) {
    setControl(control + 1);

    const testiCards = gsap.utils.toArray(".testimonial-cards");

    if (direction == "left") {
      if (count.current == 0) return;
      count.current = count.current - 1;

      testiCards.forEach((card, idx) => {
        gsap.to(card, {
          x: `${count.current * -100}%`,
          scale: idx == count.current ? 1 : 0.8,
          opacity: idx < count.current ? 0 : 1,
          filter: idx == count.current ? "brightness(100%)" : "brightness(50%)",
        });
      });
    }

    if (direction == "right") {
      if (count.current == 3) return;

      count.current = count.current + 1;

      testiCards.forEach((card, idx) => {
        gsap.to(card, {
          x: `${count.current * -100}%`,
          scale: idx == count.current ? 1 : 0.8,
          opacity: idx < count.current ? 0 : 1,
          filter: idx == count.current ? "brightness(100%)" : "brightness(40%)",
        });
      });
    }
  }

  useEffect(() => {
    const testiCards = gsap.utils.toArray(".testimonial-cards");

    testiCards.forEach((card, idx) => {
      gsap.to(card, {
        scale: idx == count.current ? 1 : 0.8,
        opacity: idx < count.current ? 0 : 1,
        filter: idx == count.current ? "brightness(100%)" : "brightness(40%)",
      });
    });
  }, [control]);

  return (
    <section className="flex flex-col gap-4 py-[100px] bg-[#FAFFF5] overflow-hidden">
      {/* Title */}
      <h2 className="text-4xl sm:text-3xl font-semibold text-center">
        Testimonials
      </h2>

      {/* div for icon on the left and arrow buttons */}
      <div className="justify-between w-[90%] mx-auto flex items-center lg:hidden">
        <img className="w-[100px]" src={quote} alt="" />

        <span className="flex items-center gap-3 ">
          <img
            onClick={() => {
              moveCard("left");
            }}
            className="w-[40px] cursor-pointer"
            src={arrowLeft}
            alt=""
          />

          {testimonials.map((dot, idx) => {
            return (
              <span
                className={`h-[5px] w-[5px] ${
                  idx == count.current ? "bg-[#1E772C]" : "bg-[#D9D9D9]"
                } rounded-[50%] duration-300`}
              ></span>
            );
          })}
          <img
            onClick={() => {
              moveCard("right");
            }}
            className="w-[40px] cursor-pointer"
            src={arrowRight}
            alt=""
          />
        </span>
      </div>

      {/* div for testimonial content and cards */}
      <div className="w-[80%] mx-auto flex justify-between relative lg:flex-col lg:mt-[60px]">
        {/* testimonial content */}
        {testimonials.map((testi, idx) => {
          return (
            <div
              className={`${
                idx == count.current ? "block" : "hidden"
              } flex flex-col gap-3 max-w-[580px] testimonial-content pointer-events-none h-full w-full`}
            >
              <h3 className="text-3xl sm:text-xl font-semibold mb-3">
                {testi.title}
              </h3>

              <p className="mb-4 leading-8 sm:text-base">{testi.para}</p>

              <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={testi.image}
                    className="hidden lg:block w-[100px] h-[100px] object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl sm:text-lg font-medium">
                    {testi.name}
                  </p>
                  <p>{testi.profession}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* testimonial cards. */}
        <div className="flex relative mr-[60px] lg:hidden">
          <div className="rounded-xl opacity-0 min-w-[300px]">
            <img src={Jessica} alt="" />
          </div>
          <div className="absolute flex h-full w-[300%] ml-[50px]">
            {testimonials.map((testimonial) => {
              return (
                <div className="rounded-md overflow-hidden testimonial-cards max-h-[300px]">
                  <img
                    className="w-full h-full"
                    src={testimonial.image}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>

        <span className="items-center gap-3 hidden lg:flex mx-auto mt-10">
          <img
            onClick={() => {
              moveCard("left");
            }}
            className="w-[40px] cursor-pointer"
            src={arrowLeft}
            alt=""
          />

          {testimonials.map((dot, idx) => {
            return (
              <span
                className={`h-[5px] w-[5px] ${
                  idx == count.current ? "bg-[#1E772C]" : "bg-[#D9D9D9]"
                } rounded-[50%] duration-300`}
              ></span>
            );
          })}
          <img
            onClick={() => {
              moveCard("right");
            }}
            className="w-[40px] cursor-pointer"
            src={arrowRight}
            alt=""
          />
        </span>
      </div>
    </section>
  );
}
