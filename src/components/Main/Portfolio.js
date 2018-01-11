import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Grid, Row, Col } from 'react-bootstrap';

const Portfolio = () => {
  return(
    <Grid className="portfolioPage">
      <Element name="portfolio" className="element">
        <Row className="show-grid title">
          <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
            <h2>SARAH.GABRIELLE</h2>
          </Col>
        </Row>
        <Row className="show-grid portfolioTopTextBox">
          <Col className="col" md={6} lg={4} lgOffset={2}>
            <Link to="/Project1" id="outer-box">
              <img className="portfolioImage" src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"></img>
              <div id="inner-box">
                <p>SPACE WARS</p>
              </div>
            </Link>
          </Col>
          <Col lg={4}>
            <Link to="/Project2" id="outer-box">
              <img className="portfolioImage" src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"></img>
              <div id="inner-box">
                <p>OBSCOUTURE</p>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="show-grid portfolioBottomTextBox">
          <Col md={6} lg={4} lgOffset={2}>
            <Link to="/Project3" id="outer-box">
              <img className="portfolioImage" src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"></img>
              <div id="inner-box">
                <p>HAPPY CABBY</p>
              </div>
            </Link>
          </Col>
          <Col lg={4}>
            <Link to="/Project4" id="outer-box">
              <img className="portfolioImage" src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"></img>
              <div id="inner-box">
                <p>SKILØG</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Element>
    </Grid>
  );
};

export default Portfolio;
