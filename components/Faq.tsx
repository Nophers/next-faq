import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

interface DropDownList {
  [key: string]: boolean;
}

interface Faq {
  question: string;
  answer: string;
}

function Faq() {
  const [dropdownList, setDowndropList] = useState<DropDownList>({});

  const dropdownHandler = (label: string) => {
    setDowndropList((prevState: Record<string, boolean>) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const faqList: Faq[] = [
    {
      question:
        "What is the difference between a website and a web application?",
      answer:
        "A website is a collection of web pages that are linked together. A web application is a program that runs on a web server and is accessed through a web browser. A web application is a program that runs on a web server and is accessed through a web browser. A web application is a program that runs on a web server and is accessed through a web browser.",
    },
    {
      question: "What is r² x pi x h?",
      answer:
        "The volume of a cylinder is the area of the circular base (pi x r²) multiplied by the height (h).",
    },
    {
      question: "What is an IP address?",
      answer:
        "An IP address is a unique number assigned to each device connected to a network or the Internet. It is a 32-bit number written as four numbers separated by periods. For example,",
    },
    {
      question: "When was NextJS created?",
      answer:
        "NextJS was created in 2016 by Guillermo Rauch, a software engineer at Vercel. It was created to solve the problem of slow page loads in React applications.",
    },
    {
      question: "Why should you use TailwindCSS?",
      answer:
        "TailwindCSS is a utility-first CSS framework. It is a CSS framework that allows you to build custom designs without writing any CSS. It is a CSS framework that allows you to build custom designs without writing any CSS.",
    },
  ];

  return (
    <div className="p-5 py-12 md:p-12 lg:px-[10%]">
      <div className="clash text-[2rem] lg:text-[3rem] text-center md:text-start">
        FAQ
      </div>
      <div className="mt-5 flex flex-col space-y-12">
        {faqList?.map((x: Faq) => {
          return (
            <div key={x.question}>
              <div className="flex items-center space-x-5">
                <div onClick={() => dropdownHandler(x.question)}>
                  <ChevronRightIcon
                    className={`${
                      dropdownList[x.question] ? "rotate-[90deg]" : "rotate-0"
                    } transition-all h-[1.5rem] w-auto cursor-pointer`}
                  />
                </div>

                <div>{x.question}</div>
              </div>
              <div
                className={`${
                  dropdownList[x.question]
                    ? "max-h-[50rem]"
                    : "max-h-0 overflow-hidden"
                } transition-all`}
              >
                <div className="mt-5">{x.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
