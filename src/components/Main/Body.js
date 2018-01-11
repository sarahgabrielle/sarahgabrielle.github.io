import React from 'react';

import Navbar from './NavBar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Skillset from './Skillset';

const Body = () => {
  return(
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skillset />
      <Contact />
    </div>
  );
};

export default Body;
