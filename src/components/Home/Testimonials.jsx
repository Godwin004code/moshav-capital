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
      title: "Getting Money with Moshav Capital",
      para: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur `,
      name: "Henry Jefferson",
      profession: "Investor",
      image: Jessica,
    },
    {
      title: "Obtaining Goods with Moshav Capital",
      para: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itsel`,
      name: "John Doe",
      profession: "Accountant",
      image: Jessica,
    },
    {
      title: "Achieving Goals with Moshav Capital",
      para: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness `,
      name: "Maria Johnson",
      profession: "Marketer",
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
          filter: idx == count.current ? "brightness(100%)" : "brightness(50%)",
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
        filter: idx == count.current ? "brightness(100%)" : "brightness(50%)",
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
        {testimonials.map((testi, idx) => {
          return (
            <div
              className={`${
                idx == count.current ? "block" : "hidden"
              } flex flex-col gap-3 max-w-[600px] testimonial-content`}
            >
              <h3 className="text-3xl font-semibold mb-3">{testi.title}</h3>

              <p className="mb-4 leading-8">{testi.para}</p>

              <span className="flex flex-col gap-2">
                <p className="text-2xl font-medium">{testi.name}</p>
                <p>{testi.profession}</p>
              </span>
            </div>
          );
        })}

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
