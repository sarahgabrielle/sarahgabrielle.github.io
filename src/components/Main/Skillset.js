import React from 'react';
import { Element } from 'react-scroll';
import { Grid, Row, Col } from 'react-bootstrap';

const Skillset = () => {
  return(
    <Grid className="skillsPage">
      <Element name="skillset" className="element">
        <Row className="show-grid title">
          <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
            <h2>SARAH.GABRIELLE</h2>
          </Col>
        </Row>
        <Row className="box">
          <Col className="textSkills" lg={12}>
            <i className="devicon-angularjs-plain"></i>
            <i className="devicon-atom-original"></i>
            <i className="devicon-babel-plain"></i>
            <i className="devicon-bootstrap-plain"></i>
            <i className="devicon-bower-line"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-express-original"></i>
          </Col>
          <Col className="textSkills" lg={12}>
            <i className="devicon-git-plain"></i>
            <i className="devicon-github-plain"></i>
            <i className="devicon-gulp-plain"></i>
            <i className="devicon-html5-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-jquery-plain"></i>
            <i className="devicon-mocha-plain"></i>
          </Col>
          <Col className="textSkills" lg={12}>
            <i className="devicon-mongodb-plain"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-postgresql-plain"></i>
            <i className="devicon-rails-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-ruby-plain"></i>
            <i className="devicon-sass-original"></i>
          </Col>
        </Row>
      </Element>
    </Grid>
  );
};

export default Skillset;
