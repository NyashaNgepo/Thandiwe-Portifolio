import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Html, Css",
    percentage: "90%",
  },
  {
    id: 2,
    title: "Bootstrap",
    percentage: "90%",
  },
  
  {
    id: 4,
    title: "Javascript",
    percentage: "50%",
  },
  {
    id: 5,
    title: "ReactJS",
    percentage: "50%",
  },
  
  {
    id: 8,
    title: " Github",
    percentage: "80%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
