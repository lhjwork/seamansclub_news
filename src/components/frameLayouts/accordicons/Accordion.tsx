// Accordion.tsx

import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className={`flex items-center justify-between p-4 bg-gray-200 cursor-pointer ${
              openIndex === index ? "rounded-t" : "rounded"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold">{item.title}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 0 1-1-1v-6.586L5.707 14.3a1 1 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414L11 10.414V17a1 1 0 0 1-1 1z"
              />
            </svg>
          </div>
          {openIndex === index && (
            <div className="p-4 bg-white rounded-b">
              <p className="text-gray-700">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
