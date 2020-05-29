import React, { Component } from "react";
import { MyContext } from "../context";
import {
  Navbar,
  Footer,
  PropertyImagesCarousel,
  PropertyFeatures,
} from "../components";

import Icon from "react-icons-kit";
import { share } from "react-icons-kit/ionicons/share";
import { androidFavoriteOutline } from "react-icons-kit/ionicons/androidFavoriteOutline";

export default class RentalPropertyPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  static contextType = MyContext;

  render() {
    const {
      getRentalProperty,
      handleFilterChange,
      filterProperty,
    } = this.context;
    const RentalProperty = getRentalProperty(this.state.slug);
    console.log(RentalProperty);

    return (
      <div className="web-page">
        <Navbar
          tabIndex={1}
          changeLink={(tabIndex, searchKeyword) => {
            handleFilterChange([{ id: 1, value: "Any" }], "minPrice");
            handleFilterChange([{ id: 1, value: "Any" }], "maxPrice");
            filterProperty(searchKeyword, tabIndex);
          }}
        />
        {!RentalProperty ? (
          <div className="container text-center">
            <h5 className="p-5">No Property Found</h5>
          </div>
        ) : (
          <>
            <PropertyImagesCarousel images={RentalProperty.images} />
            <section className="container my-5">
              <div className="border-bottom pb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>{`${RentalProperty.address}, ${RentalProperty.suburb}, ${RentalProperty.state} ${RentalProperty.postCode}`}</h4>
                  <div className="d-flex">
                    <button type="button" className="btn fav-icon mr-1">
                      <Icon icon={share} size={32} />
                    </button>
                    <button type="button" className="btn fav-icon">
                      <Icon icon={androidFavoriteOutline} size={28} />
                    </button>
                  </div>
                </div>
                <PropertyFeatures property={RentalProperty} />
              </div>
            </section>
            <section className="container">
              <div className="row mb-5">
                <div className="col-8 pr-4">
                  <h5>About the property</h5>
                  <p>{RentalProperty.description}</p>
                  {RentalProperty.extra ? (
                    <ul className="extra-info">
                      {RentalProperty.extra.map((list, index) => {
                        return <li key={index}>{list}</li>;
                      })}
                    </ul>
                  ) : null}
                  {RentalProperty.strataInfo ? (
                    <div className="strata-info">
                      {RentalProperty.strataInfo.strata ? (
                        <p>
                          Strata ${RentalProperty.strataInfo.strata}pq approx.
                        </p>
                      ) : null}
                      {RentalProperty.strataInfo.council ? (
                        <p>
                          Council ${RentalProperty.strataInfo.council}pq approx.
                        </p>
                      ) : null}
                      {RentalProperty.strataInfo.water ? (
                        <p>
                          Water ${RentalProperty.strataInfo.water}pq approx.
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                  {RentalProperty.propertyInfo ? (
                    <div className="strata-info">
                      {RentalProperty.propertyInfo.area ? (
                        <p>
                          {RentalProperty.propertyType}:{" "}
                          {RentalProperty.propertyInfo.area}sqm
                        </p>
                      ) : null}
                      {RentalProperty.propertyInfo.parking ? (
                        <p>
                          Parking:
                          {RentalProperty.propertyInfo.parking}sqm
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                  <p>
                    Disclaimer:
                    <br />
                    All information contained herein is gathered from third
                    party sources we deem to be reliable. However, we cannot
                    guarantee its accuracy and interested persons should rely on
                    their own independent enquiries and not on the information
                    contained herein. Figures and details are subject to change
                    without further notice.
                  </p>
                </div>
                <div className="col-4">
                  <div className="card">
                    <div className="card-img-top">
                      <div className="get-in-touch">
                        <h5 className="mb-0">Get in touch</h5>
                      </div>
                    </div>
                    <div className="card-body get-in-touch-body">
                      <div className="d-flex align-items-center">
                        <img
                          src={RentalProperty.userPhoto}
                          alt=""
                          className="get-in-touch-agent-photo m-1"
                        />
                        <div className="ml-4">
                          <h6 className="text-primary mb-2">
                            {RentalProperty.user}
                          </h6>
                          <p className="border px-2 rounded mb-0">
                            {RentalProperty.userContact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        <Footer />
      </div>
    );
  }
}
