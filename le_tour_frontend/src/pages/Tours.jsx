import React, {useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection'
import { Container, Row , Col} from "reactstrap";
import SearchBar from "../shared/SearchBar"
import TourCard from "../shared/TourCard"
import tourData from "../assets/data/tours"
import Newsletter from "../shared/Newsletter"

function Tours() {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(5/ 8) // later we will use backend data count
    setPageCount(pages)
  }, [])

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar/> 
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              tourData?.map(tour => (
                <Col lg="3" key={tour.id}>
                  <TourCard tour={ tour} />
                </Col>
              ))
            }
             <Col lg="12" >
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span
                    key={number}
                    onclick={() => setPage(number)}
                    className={page ===number ? "active__page": ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      <Newsletter/>
     
    </>
  )
}

export default Tours