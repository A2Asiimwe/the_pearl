import React from 'react'
import '../styles/home.css' 
import 'remixicon/fonts/remixicon.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/img/hero-img01.jpg';
import heroImg02 from '../assets/img/hero-img02.jpg';
import heroVideo from '../assets/img/hero-video.mp4';
import worldImg from '../assets/img/world.png'
import Subtitle from '../shared/Subtitle';


import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
function Home() {
  return (
    <>
      <section>
         <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle Subtitle={'know before you Go'} />
                  <img src={worldImg} alt='' />
                </div>
                <h1>
                  Find all your destinations in Africa 
                  <span className='highlight'>
                        Today 
                  </span>
                </h1>
                <p>
                  Do you need to reset?, we a your Travel buddy.
                  Make the next Trip to that unknown destination
                </p>
              </div>
              </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt=""/>
              </div>
            </Col>
             <Col lg='2'>
              <div className="hero__img-box mt-4">
                <img src={heroVideo} alt="" contals/>
              </div>
            </Col>
             <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt=""/>
              </div>
            </Col>

            <SearchBar/>
          </Row>
      </Container>
    
      </section>
      {/** ====== ========= Hero sections starts from here ================= */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle"> What we serve</h5>
              <h2 className="services__title"> We offer</h2>
              </Col>
            <ServiceList/> 
          </Row>
        </Container>
     </section>
    </>
  )
}

export default Home