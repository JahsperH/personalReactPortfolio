import React, { useState } from 'react';
import Nav from './component/Nav';
import About from './component/About';
import Contact from './component/Contact';

const App = () => {

  return (
    <body>
    <main class="container">
    <div class="grid">
    <div className="App">
      <h1>Jahsper Harrell</h1>
      {/* add any extra text you need using <p></p> */}
      <Nav />
      
      {/* Add your other sections/components here */}
    </div>
    <div>
    <About />
    </div>
    <div>
    <Contact />
    </div>
    </div>
    </main>
    </body>
  );
};

export default App;
