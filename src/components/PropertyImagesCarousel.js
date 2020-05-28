import React from "react";
import styled from "styled-components";

const CarouselImage = styled.div`
  display: block;
  width: 100vw;
  height: 60vh;
  background: url(${(props) => props.image}) center/cover no-repeat;
`;

const PropertyImagesCarousel = ({ images }) => {
  return (
    <div
      id="propertyImagesCarousel"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {images.map((item, key) => {
          if (key === 0) {
            return (
              <li
                data-target="#propertyImagesCarousel"
                data-slide-to={`${key}`}
                className="active"
              ></li>
            );
          } else {
            return (
              <li
                data-target="#propertyImagesCarousel"
                data-slide-to={`${key}`}
              ></li>
            );
          }
        })}
      </ol>
      <div className="carousel-inner">
        {images.map((item, key) => {
          if (key === 0) {
            return (
              <div className="carousel-item active">
                {/* <img className="d-block w-100" src={item} alt="" /> */}
                <CarouselImage image={item} />
              </div>
            );
          } else {
            return (
              <div className="carousel-item">
                {/* <img className="d-block w-100" src={item} alt="" /> */}
                <CarouselImage image={item} />
              </div>
            );
          }
        })}
      </div>
      <a
        href="#propertyImagesCarousel"
        className="carousel-control-prev"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        href="#propertyImagesCarousel"
        className="carousel-control-next"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default PropertyImagesCarousel;
