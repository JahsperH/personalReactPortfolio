import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="text-md font-semibold">Full Stack Web Dev Bootcamp</h4>
            <p className="text-gray-700">University of Utah, 2023</p>
          </div>

          <h3 className="text-lg font-semibold mb-4">Work Experience</h3>
          <div className="mb-4">
            <h4 className="text-md font-semibold">To be updated</h4>
            <p className="text-gray-700">N/A</p>
            <ul className="list-disc ml-6">
              <li>Currently looking and applying to jobs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
