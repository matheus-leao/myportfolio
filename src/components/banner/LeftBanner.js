import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { SiSelenium, SiCypress, SiAzuredevops, SiPostman } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Quality Assurance Engineer.", "Quality Automation Engineer.", "Software Developer in Test."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Matheus Leão</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          With over 9 years of professional experience, I have dedicated the last 8 years to Software 
          Quality Testing and Automation. I specialize in End-to-End (E2E), Mobile, and API Testing, 
          utilizing Cypress, TypeScript, Selenium, C#, and various automation frameworks to ensure 
          high-quality software delivery
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/matheus-leao" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/matheus-leao-br/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiCypress />
            </span>
            <span className="bannerIcon">
              <SiSelenium />
            </span>
            <span className="bannerIcon">
              <SiPostman />
            </span>
            <span className="bannerIcon">
              <SiAzuredevops />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
