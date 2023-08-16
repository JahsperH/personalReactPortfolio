import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    link: 'https://project1.example.com'
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    link: 'https://project2.example.com'
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
