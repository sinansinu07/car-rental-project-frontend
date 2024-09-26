import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import { useSelector } from "react-redux";

const CarListing = () => {
  const companies = useSelector((state) => {
    return state.companies.data
  })
  const cars = useSelector((state) => {
    return state.cars.data
  })

  // const dispatch = useDispatch()
  const [filterBy, setFilterBy] = useState("")
  const [search, setSearch] = useState("")

  // console.log(search)
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By Companies
                </span>

                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                >
                  <option>Select</option>
                  {companies.map((company) => {
                    return (
                      <option value={company._id} key={company.id}>{company.name}</option>
                    )
                  })}
                </select>
              </div>
            </Col>
            <Col lg="6">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                <i class="ri-search-line"></i>
                </span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                 />
              </div>
            </Col>
            

            {cars.filter((ele) => {
              return ele.company._id.includes(filterBy)
            }).filter((ele) => {
              return ele.company.name.includes(search)
            }).map((item) => (
              <CarItem item={item} key={item._id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
