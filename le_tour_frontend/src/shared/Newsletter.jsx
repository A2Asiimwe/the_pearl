import React from 'react'
import './newsletter.css'

import { Container, Row, Col} from 'reactstrap'
import maleTourist from '../assets/img/male-tourist.png'

const Newsletter = () => {
   
  return (
      <section>
          <Container>
              <Row>
                  <Col lg="6">
                      <div className="newletter__content">
                          <h2>
                              Subscribe now to get useful traveling
                              information around the world. budget treaps and more.
                          </h2>
                          <div className="newsletter__input">
                              <input type="email" placeholder="Enter your Email" />
                              <button className='btn newsleter__btn'>Subscribe</button>
                          </div>
                          <p>
                              
                          </p>
                      </div>
                  
                  </Col>
                  <Col lg="6">
                      <div className="newletter__img">
                          <img src={maleTourist} alt=""/>
                      </div>
</Col>

              </Row>
          </Container>
    </section>
  )
}

export default Newsletter