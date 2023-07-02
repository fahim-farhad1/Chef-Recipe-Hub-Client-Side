import React from "react";
import myimage from '../../assets/IMG_0775.png';

const About = () => {
  return (
    <div>
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row">
          <img
            src={myimage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className=" md:ml-20">
          <h1 className="text-3xl mt-5 text-blue-700 font-semibold">
        About Me_
      </h1>
            <p className="py-6  text-lg">
            My name is Fahim Farhad, and I am currently pursuing a diploma in Engineering in Computer Science and Engineering (CSE) at Shyamoli Ideal Polytechnic Institute. I recently completed a comprehensive Full Stack Web Development course on the MERN (MongoDB, Express, React, Node.js) stack through Programming Hero. With a passion for coding and a strong foundation in web development, I am equipped with the skills to design and develop dynamic and responsive websites. I am eager to contribute to the tech industry and continue expanding my knowledge in the field of computer science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
