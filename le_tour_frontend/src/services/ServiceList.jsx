import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"

import weatherImg from "../assets/img/weather.png"
import guideImg from "../assets/img/guide.png"
import customizationImg from "../assets/img/customization.png"

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "calculate Weather",
        desc: "The ideal time to see Lions in their natural Habitant"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc:"Professional tour guides, creating memories to last you a lifetime"
    },
     {
        imgUrl: customizationImg,
        title: "Customization",
        desc:"Every experience is yours, we dont assume, lets craft it together for your trip in the serengeti"
    }

]


const ServiceList = () => {
  return (
      <>
          {
              serviceData.map((item, index) => (
                  <Col lg='3' key={index}>
                      <ServiceCard item={item}/>
                  </Col>
              
              ))
        }
      </>
  )
}

export default ServiceList