import React from 'react';
import { Link } from 'react-scroll';
import { Nav, NavItem } from 'react-bootstrap';

const NavBar = () => {
  return(
    <Nav pullRight>
      <NavItem>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
          CONTACT
        </Link>
      </NavItem>
      <NavItem>
        <Link activeClass="active" to="skillset" spy={true} smooth={true} offset={0} duration={500}>
          SKILLSET
        </Link>
      </NavItem>
      <NavItem>
        <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
          PORTFOLIO
        </Link>
      </NavItem>
      <NavItem>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
          ABOUT
        </Link>
      </NavItem>
      <NavItem>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
          HOME
        </Link>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
