import React from 'react'
import "../styles/tours-details.css"
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from 'react-router-dom';
import tourData from "../assets/data/tours.js"
import calculateAvgRating from '../utils/avgRating';

function Tourdetails() {
  const {id} = useParams()
  // this is static data,
  //later we shall call our API to load from the database
  
  const tour = tourData.find(tour => tour.id === id)
  const {photo, title, desc, price, reviews, address, city,distance,maxGroupSize} = tour
 const{totalRating,  avgRating} = calculateAvgRating
   return (
     <><section>
     
       <Container>
         <Row> 
           <Col lg="8">
             <img src={photo} alt="" />
             <div className="tour_info">
               <h2>{ title}</h2>
             </div>
             <div className="d-flex align-items-ceenter gap-5"></div>
             <span className="d-flex align-items-center gap-1">
               <i class="ri-start-s-fill" style={{"color": "var(--secondar-color)"}}></i>
              
               {calculateAvgRating === 0 ? null : avgRating}
               {totalRating === 0 ? (
                 "Not rated"
               ) : (
                   <span>({reviews.length})</span>
               )}
             </span>
             <span> <i class="ri-map-pin-fill"></i>
                {address}
             </span>
             

           </Col>
         </Row>
        </Container>
     </section></>
  )
}

export default Tourdetails