import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Test Strategy"
          des="Define and implement Test Strategy, including Test Plan design and Optimization."
        />
        <Card
          title="Automation Strategy"
          des="Define and implement Automation Strategy on all phases of the 
          Software Development Life Cycle."
          icon={<AiFillAppstore />}
        />
        <Card
          title="API & e2e Testing"
          des="Create and define automation projects on API and e2e testing 
          with many tools and languages."
          icon={<SiProgress />}
        />
        <Card
          title="Pipeline Design and Optimization"
          des="Design and optimize pipelines using YAML and Azure Devops. "
          icon={<FaMobile />}
        />
        <Card
          title="Synthetic and Monitoring"
          des="Create synthetic tests to improve monitoring with alerts and thresholds."
          icon={<SiAntdesign />}
        />
        <Card
          title="Mentorship"
          des="Mentored QA team members in e2e testing, system design, and quality best practices."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features