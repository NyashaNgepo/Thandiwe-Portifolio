import React from "react";
import {
  
  FaGithub,
  
  FaLinkedinIn,
  
} from "react-icons/fa";
import profile from "../../../images/profile.png";

const socials = [
  
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/NyashaNgepo?tab=repositories",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/thandiwe-marewangepo-b36793201/",
  },
  
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Thandiwe Marewangepo</h1>
        <p className="text-sm text-gray-400 mb-3">
          Frontend Web Developer
        </p>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
       A front-end junior developer who is a highly motivated, confident individual with exceptional multi-tasking capabilities and the ability to work in a target-driven and busy environment. Hard-working with excellent attendance and punctuality who can work equally well alone or as part of a team. Can communicate effectively with people from diverse backgrounds and would be an asset to any employer who respects loyalty and responsibility. Keen to find a challenging position within an ambitious employer where I will be able to continue to contribute to the success of the company at the same time increasing my work experience and developing my abilities.</p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
