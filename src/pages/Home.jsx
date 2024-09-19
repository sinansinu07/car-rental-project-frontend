import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import CarItem from "../components/UI/CarItem";
import { useSelector } from "react-redux";

const Home = () => {

  const cars = useSelector((state) => state.cars.data)
  return (
    <Helmet title="Home">
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {cars?.slice(0, 6).filter((ele) => {
                return ele.company.name.includes("Mercedes-Benz")
            }).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
            {/* {cars?.slice(0, 3).filter((ele) => {
                return ele.company.name.includes("BMW")
            }).map((item) => (
              <CarItem item={item} key={item.id} />
            ))} */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
