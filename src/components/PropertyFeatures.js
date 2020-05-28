import React from "react";

import Bed from "../icons/bed.svg";
import Bathtub from "../icons/bathtub.svg";
import Car from "../icons/car.svg";

const PropertyFeatures = ({ property }) => {
  return (
    <div className="d-flex align-items-center">
      {property.bedrooms > 0 ? (
        <div className="property-features d-flex align-items-end mr-3">
          <img src={Bed} alt="" />
          {property.bedrooms}
        </div>
      ) : null}
      {property.bathroom > 0 ? (
        <div className="property-features d-flex align-items-end mr-3">
          <img src={Bathtub} alt="" />
          {property.bathroom}
        </div>
      ) : null}
      {property.carPark > 0 ? (
        <div className="property-features d-flex align-items-end mr-3">
          <img src={Car} alt="" />
          {property.carPark}
        </div>
      ) : null}
      <div className="property-features">
        <span className="mr-3">|</span>
        {property.propertyType}
      </div>
    </div>
  );
};

export default PropertyFeatures;
