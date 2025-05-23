import { useState } from "react";

const FaqAccordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="bg-secondary rounded-[34px] mb-[18px]">
      <button
        className={`flex gap-4 justify-between items-center w-full px-11 pt-7 text-left ${isOpen ? "pb-0" : "pb-7"} text-lg font-medium`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-poppins font-bold text-[24px] text-brand-white">{title}</span>
        {isOpen ? <svg className="transition-all duration-300 shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="2.8"
      d="M14.844 1.4v25.2M26.6 13.845H1.4"
    ></path>
  </svg> : <svg className="transition-all duration-300 shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="3"
    fill="none"
    viewBox="0 0 28 3"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="2.8"
      d="M26.6 1.4H1.4"
    ></path>
  </svg>}
      </button>
      
        <div className={`font-poppins font-normal text-lg leading-[184%] px-11 text-brand-white transition-all duration-300 ${isOpen ? "h-auto pt-6 pb-7" : "h-0 overflow-hidden"}`}>
          {children}
        </div>
      
    </section>
  );
};

export default FaqAccordion;
