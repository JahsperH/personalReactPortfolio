import React, { useState } from 'react';
import Nav from './component/Nav';
import About from './component/About';
// import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Resume from './component/Resume';
import Home from './component/Home';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  let displayedSection;

  switch (currentSection) {
    case 'home':
      displayedSection = <Home />;
      break;
    case 'about':
      displayedSection = <About />;
      break;
    // case 'portfolio':
    //   displayedSection = <Portfolio />;
    //   break;
    case 'contact':
      displayedSection = <Contact />;
      break;
    case 'resume':
      displayedSection = <Resume />;
      break;
    default:
      displayedSection = <Home />;
  }

  return (
    <div className="App">
      <header className="bg-gray-800 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Jahsper Harrell</h1>
      </header>
      <Nav onSectionChange={handleSectionChange} currentSection={currentSection} />
      {displayedSection}
    </div>
  );
};

export default App;
