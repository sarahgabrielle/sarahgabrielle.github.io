import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import NavBar from './components/Main/NavBar';
import Routes from './components/Utility/Routes';

import './scss/style.scss';

class App extends React.Component {

  state = { showNav: false }

  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            {/* <NavBar
              scrollToTop={this.scrollToTop}
              scrollTo={this.scrollTo}
            /> */}
          </header>
          <main>
            {/* <Home />
            <About />
            <Portfolio />
            <Skillset />
            <Contact /> */}
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
