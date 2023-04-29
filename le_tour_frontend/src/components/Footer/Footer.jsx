import React from 'react'
import { Container, Row, Col, ListGroup,  ListGroupItem } from 'reactstrap'

import { Link } from 'react-router-dom';
import log from "../../assets/img/logo.png"
const quick__links2 = [
  {
    path: "/gallery",
    display:"Gallery",
  },
  {
    path: "login",
    display:"Login",
  },
  {
    path: "/register",
  display:"Register",}
]




function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={log} alt="" />
              <p>
                We strive to meet, hit,
                and exceed your expectations.
                The world is your and ours to descover,
                we would like to be your journeys partner.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#"><i class="ri-youtube-line"></i> </Link>
                </span>
                <span>
                  <Link to="#"><i class="ri-instagram-line"></i> </Link>
                </span>
                <span>
                  <Link to="#"><i class="ri-Linkdin-line"></i> </Link>
                </span>
                <span>
                  <Link to="#"><i class="ri-twitter-line"></i> </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quicklinks">
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index } className="ps-0 border-0">
                    <Link to={item.path}>{ item.display}</Link>
                  </ListGroupItem>
                ))
                 }
            </ListGroup>
          </Col>
          <Col lg="3">
             <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quicklinks">
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index } className="ps-0 border-0">
                    <Link to={item.path}>{ item.display}</Link>
                  </ListGroupItem>
                ))
                 }  
            </ListGroup>
          </Col>
          <Col lg="3">
             <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quicklinks">
              
               
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                    Address:
                  </span>
                </h6>
                <p className="mb-0">Kampala, Uganda  </p>
            </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                    Address:
                  </span>
                </h6>
                <p className="mb-0">Kampala, Uganda  </p>
            </ListGroupItem>
                 <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                    Address:
                  </span>
                </h6>
                <p className="mb-0">Kampala, Uganda  </p>
            </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center">
            <p className="copyright">
              Copyright { year}, design and develop by per-hour
            </p>
          </Col>
        </Row>
          </Container>
    </footer>

    
  )
}

export default Footer