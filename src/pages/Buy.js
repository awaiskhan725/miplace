import React, { Component } from "react";
import { Navbar, Footer, Loading, PropertyCardView } from "../components";
import { MyContext } from "../context";

export default class Buy extends Component {
  static contextType = MyContext;

  render() {
    const {
      filteredList,
      loading,
      getFilterOptions,
      filterProperty,
    } = this.context;

    let buy = filteredList.map((item) => (
      <PropertyCardView key={item.id} property={item} />
    ));

    let priceList = getFilterOptions(0, "price");
    let propertyTypes = getFilterOptions(0, "propertyType");
    let bedrooms = getFilterOptions(0, "bedrooms");

    return (
      <div className="web-page">
        <Navbar
          tabIndex={0}
          propertyTypes={propertyTypes}
          bedrooms={bedrooms}
          priceList={priceList}
          onClick={(searchKeyword) => filterProperty(searchKeyword, 0)}
          filters
        />
        <section className="buy-section m-5">
          <div className="container text-center">
            <h5>Real Estate &amp; Property for sale in Australia</h5>
            {loading ? (
              <Loading />
            ) : (
              <div>
                {/* <div className="row my-5">{featured}</div> */}
                <div className="row my-5">{buy}</div>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
