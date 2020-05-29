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

export default class SoldPropertyPage extends Component {
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
      getSoldProperty,
      handleFilterChange,
      filterProperty,
    } = this.context;
    const SoldProperty = getSoldProperty(this.state.slug);
    console.log(SoldProperty);

    return (
      <div className="web-page">
        <Navbar
          tabIndex={2}
          changeLink={(tabIndex, searchKeyword) => {
            handleFilterChange([{ id: 1, value: "Any" }], "minPrice");
            handleFilterChange([{ id: 1, value: "Any" }], "maxPrice");
            filterProperty(searchKeyword, tabIndex);
          }}
        />
        {!SoldProperty ? (
          <div className="container text-center">
            <h5 className="p-5">No Property Found</h5>
          </div>
        ) : (
          <>
            <PropertyImagesCarousel images={SoldProperty.images} />
            <section className="container my-5">
              <div className="border-bottom pb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>{`${SoldProperty.address}, ${SoldProperty.suburb}, ${SoldProperty.state} ${SoldProperty.postCode}`}</h4>
                  <div className="d-flex">
                    <button type="button" className="btn fav-icon mr-1">
                      <Icon icon={share} size={32} />
                    </button>
                    <button type="button" className="btn fav-icon">
                      <Icon icon={androidFavoriteOutline} size={28} />
                    </button>
                  </div>
                </div>
                <PropertyFeatures property={SoldProperty} />
              </div>
            </section>
            <section className="container">
              <div className="row mb-5">
                <div className="col-8 pr-4">
                  <h5>About the property</h5>
                  <p>{SoldProperty.description}</p>
                  {SoldProperty.extra ? (
                    <ul className="extra-info">
                      {SoldProperty.extra.map((list, index) => {
                        return <li key={index}>{list}</li>;
                      })}
                    </ul>
                  ) : null}
                  {SoldProperty.strataInfo ? (
                    <div className="strata-info">
                      {SoldProperty.strataInfo.strata ? (
                        <p>
                          Strata ${SoldProperty.strataInfo.strata}pq approx.
                        </p>
                      ) : null}
                      {SoldProperty.strataInfo.council ? (
                        <p>
                          Council ${SoldProperty.strataInfo.council}pq approx.
                        </p>
                      ) : null}
                      {SoldProperty.strataInfo.water ? (
                        <p>Water ${SoldProperty.strataInfo.water}pq approx.</p>
                      ) : null}
                    </div>
                  ) : null}
                  {SoldProperty.propertyInfo ? (
                    <div className="strata-info">
                      {SoldProperty.propertyInfo.area ? (
                        <p>
                          {SoldProperty.propertyType}:{" "}
                          {SoldProperty.propertyInfo.area}sqm
                        </p>
                      ) : null}
                      {SoldProperty.propertyInfo.parking ? (
                        <p>
                          Parking:
                          {SoldProperty.propertyInfo.parking}sqm
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
                          src={SoldProperty.userPhoto}
                          alt=""
                          className="get-in-touch-agent-photo m-1"
                        />
                        <div className="ml-4">
                          <h6 className="text-primary mb-2">
                            {SoldProperty.user}
                          </h6>
                          <p className="border px-2 rounded mb-0">
                            {SoldProperty.userContact}
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
