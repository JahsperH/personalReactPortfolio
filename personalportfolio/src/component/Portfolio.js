import React from 'react';

const projects = [
  {
    title: 'Brrdi',
    description: 'Welcome to Brrdi! Brrdi is a minimal social media application for the needs of anyone and everyone.',
    link: 'https://brrdi-aeb82933537b.herokuapp.com/login'
  },
  {
    title: 'SleepShop',
    description: 'SleepShop is a quick and easy way to get rewarded for sleep! Log your sleep and get paid to do it.',
    link: 'https://sleepshop.herokuapp.com/login'
  },
  {
    title: 'On Demand Book Search',
    description: 'This application allows you to search for books and save them to your profile.',
    link: 'https://ondemandbooksearch-9340aefb8990.herokuapp.com/'
  },
  {
    title: 'Code Editor',
    description: 'This application allows you to write and save code in a variety of languages.',
    link: 'https://personalcodeeditor-21330447922a.herokuapp.com/'
  },
  {
    title: 'Code Quiz',
    description: 'This application allows you to take a timed quiz on coding fundamentals.',
    link: 'https://jahsperh.github.io/code-quiz/'
  }
  
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
