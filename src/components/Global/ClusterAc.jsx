import React, { useRef, useState } from "react";
import exportedData from "./AccordionData";
import { RiArrowDropDownLine } from "react-icons/ri";

//  accordionitem component

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper sm:mt-16">
      <button
        className={`question-container ${isOpen ? "active " : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active w-[40px] ml-auto" : "w-[40px] ml-auto"}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content ml-[30px] sm:ml-[0] sm:text-base">{answer}</p>
      </div>
    </div>
  );
};

const ClusterAc = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };



  return (
    <div className="sm:w-[100%] w-[60%]">
      {exportedData.ClusterData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default ClusterAc;
