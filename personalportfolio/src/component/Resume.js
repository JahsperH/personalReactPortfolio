import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="text-md font-semibold">Bachelor of Science in Computer Science</h4>
            <p className="text-gray-700">University Name, Graduation Year</p>
          </div>

          <h3 className="text-lg font-semibold mb-4">Work Experience</h3>
          <div className="mb-4">
            <h4 className="text-md font-semibold">Frontend Developer</h4>
            <p className="text-gray-700">Company Name, Start Date - End Date</p>
            <ul className="list-disc ml-6">
              <li>Developed and maintained user interfaces for web applications using React.</li>
              <li>Collaborated with design and back-end teams to implement features.</li>
              <li>Optimized web applications for performance and responsiveness.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
