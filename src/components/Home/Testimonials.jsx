import React, { useEffect, useRef, useState } from "react";
import arrowLeft from "../../Assets/arrowLeft.svg";
import arrowRight from "../../Assets/arrowRight.svg";
import quote from "../../Assets/quote.svg";
import Jessica from "../../Assets/Jessica.png";
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
      title: "Achieving Growth with Moshav Capital",
      para: `Moshav Capital's services transformed our business, driving growth
            with tailored financing, secure warehousing, and effective marketing
            support. Highly recommended for agribusiness scaling and success.`,
      name: "Jessica Davis",
      profession: "Farmer",
      image: Jessica,
    },
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
      title: "Achieving Growth with Moshav Capital",
      para: `Moshav Capital's services transformed our business, driving growth
            with tailored financing, secure warehousing, and effective marketing
            support. Highly recommended for agribusiness scaling and success.`,
      name: "Jessica Davis",
      profession: "Farmer",
      image: Jessica,
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
      });
    });
  }, []);

  return (
    <section className="flex flex-col gap-4 py-[100px] bg-[#FAFFF5] overflow-hidden">
      {/* Title */}
      <h2 className="text-4xl font-semibold text-center">Testimonials</h2>

      {/* div for icon on the left and arrow buttons */}
      <div className="justify-between w-[90%] mx-auto flex items-center]">
        <img className="w-[100px]" src={quote} alt="" />

        <span className="flex items-center gap-3">
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
      <div className="w-[80%] mx-auto flex justify-between">
        {/* testimonial content */}
        <div className="flex flex-col gap-3 max-w-[600px]">
          <h3 className="text-3xl font-semibold mb-3">
            Achieving Growth with Moshav Capital
          </h3>

          <p className="mb-4 leading-8">
            Moshav Capital's services transformed our business, driving growth
            with tailored financing, secure warehousing, and effective marketing
            support. Highly recommended for agribusiness scaling and success.
          </p>

          <span className="flex flex-col gap-2">
            <p className="text-2xl font-medium">Jessica Davis</p>
            <p>Farmer</p>
          </span>
        </div>

        {/* testimonial cards. */}
        <div className="flex relative mr-[100px]">
          <div className="rounded-xl opacity-0">
            <img src={Jessica} alt="" />
          </div>
          <div className="absolute flex h-full w-[300%]">
            {testimonials.map((testimonial) => {
              return (
                <div className="rounded-xl testimonial-cards">
                  <img src={testimonial.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
