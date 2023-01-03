import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        The benefit of using Tailwind CSS is that we don't have to write 
        any styles manually in a CSS stylesheet. 
        All we have to do is combine multiple classes to create the 
        appearance that we want.For example, to give our portfolio a dark 
        background with gray text applied to all of our child components, 
        you can add the following classes to our main element:
        </p>

        <br />

        <p className="text-xl">
        The benefit of using Tailwind CSS is that we don't have to write any styles 
        manually in a CSS stylesheet. All we have to do is combine multiple classes to create 
        the appearance that we want.For example, to give our portfolio a dark background
         with gray text applied to all of our child components, you can
          add the following classes to our main element:
        </p>
      </div>
    </div>
  );
};

export default About;
