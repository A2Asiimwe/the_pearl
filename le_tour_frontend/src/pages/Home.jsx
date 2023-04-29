import React from 'react'
import '../styles/home.css' 
import 'remixicon/fonts/remixicon.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/img/hero-img01.jpg';
import heroImg02 from '../assets/img/hero-img02.jpg';
import heroVideo from '../assets/img/hero-video.mp4';
import worldImg from '../assets/img/world.png'
import experienceImg  from '../assets/img/experience.png'
import MansonaryImages from "../components/ImgGallery/MansonaryImages"

import Subtitle from '../shared/Subtitle';
import Newsletter from '../shared/Newsletter';


import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/FeaturedTours/FeaturedTourList';
import  Testimonials from "../components/Testimonials/Testimonials"
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
      
      {/* ===========FEATURED TOUR SECTION START ===================*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              <Subtitle susbtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured Tours</h2>
            </Col>
            <FeaturedTourList/>
          </Row>

        </Container>
      </section> 
      
      {/* ===========FEATURED TOUR SECTION END ===================*/}
    
      {/*experience Section start*/}
      <section>
        <Container>
          <Row>
          <Col lg="6">
            <div className="experiece__content">
              <Subtitle subtitle={'Experiece'} />
              <h2> with our all experience <br />  we will serve you</h2>
              <p>There is a life out there that is meant to take shape around you.<br />
              break the cycle, lets get you starded on that journey.
              </p> 
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>12k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>

            </div>
          </Col>
          <Col lg="6">
              <div className="experience_img">
                <img src={experienceImg } alt="eperience img missing"/>
              </div>
          </Col>
        </Row>
      
        </Container>
        </section>

      { /*=========================GALLERY SECTION START ===========================================*/}       
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Galler'} />
              <h2 className="gallery__title">Visit our customer Tour Gallery </h2>
            </Col>

            <Col lg="12">
              <MansonaryImages/>
            </Col>
          </Row>
        </Container>
          </section>
    
       { /*=========================GALLERY END ===========================================*/}       
      { /*=========================TESTIMONIAL SECTION START ===========================================*/}

          <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className="testimonial__title">What Clients Say About our Services </h2>
            </Col>

            <Col lg="12">
              <Testimonials/>
            </Col>
          </Row>
        </Container>
          </section>
   
      { /*=========================TESTIMONIAL SECTION END ===========================================*/} 
    
    <Newsletter/>
    </>
  )
}

export default Home