import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PropertyFeatures } from ".";

const PropertyImage = styled.div`
  height: 250px;
  background: url(${(props) => props.image}) center/cover no-repeat;
  margin-top: 5px;
  overflow: hidden;
  position: relative;
`;

const PropertyCardView = ({ property }) => {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm mb-4">
        <PropertyImage image={property.images[0]}>
          {property.featured ? (
            <div className="featured-tag px-2 py-1 rounded">Featured</div>
          ) : null}
        </PropertyImage>
        <div className="card-body text-left">
          <h6 className="card-title mb-1">{property.heading}</h6>
          <p className="property-features">{`${property.address}, ${property.suburb}`}</p>
          <PropertyFeatures property={property} />
          <Link
            to={`/${property.type}/${property.slug}`}
            className="card-link"
          ></Link>
        </div>
        <div className="agent-container d-flex align-items-center card-img-top">
          {property.user}
          <img src={property.userPhoto} />
        </div>
      </div>
    </div>
  );
};

export default PropertyCardView;
