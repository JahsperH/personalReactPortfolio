import React from 'react';

const Nav = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => scrollToSection('About')}>About Me</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('resume')}>Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;


