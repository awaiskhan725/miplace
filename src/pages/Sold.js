import React, { Component } from "react";
import { Navbar, Footer, Loading, PropertyCardView } from "../components";
import { MyContext } from "../context";

export default class Buy extends Component {
  static contextType = MyContext;
  render() {
    const { soldList, loading } = this.context;

    let sold = soldList.map(item => (
      <PropertyCardView key={item.id} property={item} />
    ));

    return (
      <div className="web-page">
        <Navbar />
        <section className="buy-section m-5">
          <div className="container text-center">
            <h5>Sold Real Estate &amp; Property in Australia</h5>
            {loading ? (
              <Loading />
            ) : (
              <div>
                {/* <div className="row my-5">{featured}</div> */}
                <div className="row my-5">{sold}</div>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
