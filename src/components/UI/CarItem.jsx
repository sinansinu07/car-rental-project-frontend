import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { _id, carImage, company, name, color, price, transmissions } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5" key={_id}>
      <div className="car__item">
        <div className="car__img">
          <img src={carImage?.image_url} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {company?.name}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {transmissions}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-palette-line"></i> {color}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to="https://w.app/MohamedSinan">Book Now</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${_id}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
