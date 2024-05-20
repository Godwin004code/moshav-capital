import React, { useRef, useState } from "react";
import exportedData from "./AccordionData";
import { RiArrowDropDownLine } from "react-icons/ri";

//  accordionitem component

const AccordionItem = ({ question, listOne, listTwo, listThree, listfour, icon, isOpen, onClick }) => {
   // console.log(listOne)
  const contentHeight = useRef();
  return (
    <div className="wrapper hidden sm:block about" style={{boxShadow: '2px 2px 10 0 #0000001A'}}>
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      > <span dangerouslySetInnerHTML={{ __html: icon }} /> 
        <p className="question-content ml-4 w-[80%]">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
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
        <div className="answer-content w-[100%]">
            <li>{listOne}</li>
            <li>{listTwo}</li>
            {listfour != "" && <li>{listThree}</li>}
            {listfour != "" && <li>{listfour}</li>}
          
        </div>
      </div>
    </div>
  );
};

const AboutAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };



  return (
    <div className=" w-[95%] mx-auto">
      {exportedData.AboutData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
          listOne={item.listOne}
          listTwo={item.listTwo}
          listThree={item.listThree}
          listfour={item.listfour}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default AboutAccordion;
