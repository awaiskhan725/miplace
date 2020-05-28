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

export default class BuyPropertyPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  static contextType = MyContext;

  render() {
    const { getBuyProperty } = this.context;
    const BuyProperty = getBuyProperty(this.state.slug);
    console.log(BuyProperty);

    return (
      <div className="web-page bg-white">
        <Navbar tabIndex={0} />
        {!BuyProperty ? (
          <div className="container text-center">
            <h5 className="p-5">No Property Found</h5>
          </div>
        ) : (
          <>
            <PropertyImagesCarousel images={BuyProperty.images} />
            <section className="container my-5">
              <div className="border-bottom pb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>{`${BuyProperty.address}, ${BuyProperty.suburb}, ${BuyProperty.state} ${BuyProperty.postCode}`}</h4>
                  <div className="d-flex">
                    <button type="button" className="btn fav-icon mr-1">
                      <Icon icon={share} size={32} />
                    </button>
                    <button type="button" className="btn fav-icon">
                      <Icon icon={androidFavoriteOutline} size={28} />
                    </button>
                  </div>
                </div>
                <PropertyFeatures property={BuyProperty} />
              </div>
            </section>
            <section className="container">
              <div className="row mb-5">
                <div className="col-8 pr-4">
                  <h5>About the property</h5>
                  <p>{BuyProperty.description}</p>
                  {BuyProperty.extra ? (
                    <ul className="extra-info">
                      {BuyProperty.extra.map((list, index) => {
                        return <li key={index}>{list}</li>;
                      })}
                    </ul>
                  ) : null}
                  {BuyProperty.strataInfo ? (
                    <div className="strata-info">
                      {BuyProperty.strataInfo.strata ? (
                        <p>Strata ${BuyProperty.strataInfo.strata}pq approx.</p>
                      ) : null}
                      {BuyProperty.strataInfo.council ? (
                        <p>
                          Council ${BuyProperty.strataInfo.council}pq approx.
                        </p>
                      ) : null}
                      {BuyProperty.strataInfo.water ? (
                        <p>Water ${BuyProperty.strataInfo.water}pq approx.</p>
                      ) : null}
                    </div>
                  ) : null}
                  {BuyProperty.propertyInfo ? (
                    <div className="strata-info">
                      {BuyProperty.propertyInfo.area ? (
                        <p>
                          {BuyProperty.propertyType}:{" "}
                          {BuyProperty.propertyInfo.area}sqm
                        </p>
                      ) : null}
                      {BuyProperty.propertyInfo.parking ? (
                        <p>
                          Parking:
                          {BuyProperty.propertyInfo.parking}sqm
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
                          src={BuyProperty.userPhoto}
                          alt=""
                          className="get-in-touch-agent-photo m-1"
                        />
                        <div className="ml-4">
                          <h6 className="text-primary mb-2">
                            {BuyProperty.user}
                          </h6>
                          <p className="border px-2 rounded mb-0">
                            {BuyProperty.userContact}
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
