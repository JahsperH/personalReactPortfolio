import React from 'react';

const Home = () => {
  return (
    <section id="home" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Jahsper Harrell</h1>
        <p className="text-lg mt-4">
          I'm a passionate frontend developer with a love for creating beautiful
          and functional web experiences.
        </p>
        <a
          href="#contact"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mt-4 inline-block"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
