import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
            My name is Thandiwe Marewangepo, I have recently completed my honours degree in Records and archives management. Currenttly l am learning web development with Ayoba & Digital Academy and  will be done in December.


            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
            I am interested to join software development at Sovtech because l have developed a passion in coding and l am a candidate who have a passion in technology. l've seen your company consistently listed as one of the top places to work, also reading employee testimonials and heard of your enthusiasm for encouraging employee growth through education, training, and vast resources. I would love to join your innovative team, continue to create great work, and grow within the company by learning new skills.
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
