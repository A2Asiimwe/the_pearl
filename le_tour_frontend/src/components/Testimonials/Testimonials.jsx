import React from 'react'
import Slider from "react-slick"
//import "slick-carousel/slick/slick-theme.css";
//import 'react-slick/dist/react-slick.css';
import  ava01 from "../../assets/img/ava-1.jpg"
import ava02 from "../../assets/img/ava-2.jpg"
import ava03 from "../../assets/img/ava-3.jpg"

const Testimonials = () => {
    const settings = {
        dots: true,
        infiniteL: true,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slideToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slideesToScroll: 1,
                    infinete: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 1,
                    slideesToScroll: 1,
                    infinete: true,
                    dots: true,
                }
                }
                
                
            ]
    }
  return (
      <Slider {...settings}>
          <div className="testimonial py-4 px-3">
              <p>
                  “I had an amazing experience booking
                  my vacation through this website.
                  The process was easy and straightforward,
                  and I was able to find exactly what I was
                  looking for.”
              </p>
              <div className="d-flex align-items-center gap-4 mt-3">
                  <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                  <div>
                      <h5 className="mb-0 mt-3"> Kalange simon</h5>
                      <p>Customer</p>
                  </div>
              </div>
          </div>
          <div className="testimonial py-4 px-3">
              <p>
                  “I had an amazing experience booking
                  my vacation through this website.
                  The process was easy and straightforward,
                  and I was able to find exactly what I was
                  looking for.”
              </p>
              <div className="d-flex align-items-center gap-4 mt-3">
                  <img src={ava02} className="W-25 H-25 rounded-2" alt="" />
                  <div>
                      <h5 className="mb-0 mt-3"> Kalange simon</h5>
                      <p>Customer</p>
                  </div>
              </div>
          </div>
          <div className="testimonial py-4 px-3">
              <p>
                  “I had an amazing experience booking
                  my vacation through this website.
                  The process was easy and straightforward,
                  and I was able to find exactly what I was
                  looking for.”
              </p>
              <div className="d-flex align-items-center gap-4 mt-3">
                  <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                  <div>
                      <h5 className="mb-0 mt-3"> Kalange simon</h5>
                      <p>Customer</p> 
                  </div>
              </div>
          </div>

    </Slider>
  )
}

export default Testimonials