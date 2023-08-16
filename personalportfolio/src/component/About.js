import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            Welcome to my portfolio! I'm so glad you're here. My name is Jahsper Harrell and I'm a full-stack web developer with a passion for creating beautiful and functional web experiences and having fun while doing it!
          </p>
          <p className="text-gray-700 mt-4">
            I have a strong background in front-end development and enjoy
            working with modern technologies like React, HTML, CSS, and
            JavaScript. I also have experience working with back-end technologies like Node.js, Express.js, and MongoDb to create full-stack applications.
          </p>
          <p className="text-gray-700 mt-4">
            When I'm not coding, you'll find me exploring new technologies,
            experimenting with design, playing the numerous video games I have, watching any and all sports, and spending time with my family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
