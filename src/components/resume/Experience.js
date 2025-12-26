import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Quality Assurance Engineer"
            subTitle="Aya Healthcare - (2025 - Present)"
            result="San Diego, USA"
            des="Developed and maintained customized UI and mobile test scenarios for a distributed 
            healthcare SaaS platform, performing manual, exploratory, and regression testing. 
            Led test automation initiatives using Cypress and Appium, 
            ensuring quality across web and mobile applications."
          />
          <ResumeCard
            title="Senior Quality Assurance Engineer / QA Lead"
            subTitle="Tateeda Global - (2023 - 2025)"
            result="San Diego, USA"
            des="Led the creation and evolution of E2E and mobile test automation, including API 
            validations, test planning, and user experience improvements. Reviewed pull requests, 
            evaluated automation solutions, and mentored the team on best practices, 
            establishing a strong feedback loop with clients. Achieved significant impact 
            by increasing automation pass rate from 38% to 98%, expanding test coverage by 250%, 
            and upskilling the entire team in Cypress."
          />
          <ResumeCard
            title="Software Quality Analyst"
            subTitle="Thomson Reuters - (2018 - 2023)"
            result="Juiz de Fora, Brazil"
            des="End-to-end quality assurance role, focused on designing and evolving manual and 
            automated testing strategies (unit, integration, API, E2E, and synthetic tests). 
            Responsible for mentoring QAs, reviewing pull requests, evaluating automation 
            solutions, and driving continuous improvements in quality processes."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
