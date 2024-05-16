import React, {useState, useRef} from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import exportedData from '../Global/AccordionData';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef();
    return (
      <div className="wrapper">
        <button
          className={`question-container sm:!p-3 sm:!py-5 sm:flex sm:gap-3 ${isOpen ? "active" : ""}`}
          onClick={onClick}
        >
          <p className="question-content lg:text-base sm:text-sm font-bold">{question}</p>
          <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""} sm:scale-[1.3] sm:w-[50px] `} />
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
          <p className="answer-content ml-[30px] sm:ml-0 lg:!text-base lg:text-left sm:!text-sm">{answer}</p>
        </div>
      </div>
    );
  };
const HomeAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
}
return (
    <div className="container w-[60%] lg:w-[100%] lg:mx-auto lg:mt-[80px]">
      {exportedData.HomeData.map((item, index) => (
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
}
export default HomeAccordion