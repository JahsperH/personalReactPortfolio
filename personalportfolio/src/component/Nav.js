import React from 'react';

const Nav = ({ onSectionChange, currentSection }) => {
  return (
    <nav className="mt-4 flex justify-center">
      <ul>
        <li>
          <button
            onClick={() => onSectionChange('home')}
            className={currentSection === 'home' ? 'active' : ''}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => onSectionChange('about')}
            className={currentSection === 'about' ? 'active' : ''}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => onSectionChange('contact')}
            className={currentSection === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => onSectionChange('resume')}
            className={currentSection === 'resume' ? 'active' : ''}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            onClick={() => onSectionChange('portfolio')}
            className={currentSection === 'portfolio' ? 'active' : ''}
          >
            Projects
          </button>
        </li>
      </ul>
      {/* <img
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          /> */}
    </nav>
  );
};

export default Nav;
