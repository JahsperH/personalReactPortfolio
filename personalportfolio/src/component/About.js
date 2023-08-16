import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            Welcome to my portfolio! I'm passionate about creating beautiful and
            user-friendly web experiences.
          </p>
          <p className="text-gray-700 mt-4">
            I have a strong background in front-end development and enjoy
            working with modern technologies like React, HTML, CSS, and
            JavaScript.
          </p>
          <p className="text-gray-700 mt-4">
            When I'm not coding, you'll find me exploring new technologies,
            experimenting with design, and enjoying a good cup of coffee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
