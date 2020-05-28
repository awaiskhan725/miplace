import React, { Component } from "react";
import { Navbar, Footer, Loading, PropertyCardView } from "../components";
import { MyContext } from "../context";

export default class Sold extends Component {
  static contextType = MyContext;

  render() {
    const {
      filteredList,
      loading,
      getFilterOptions,
      filterProperty,
    } = this.context;

    let sold = filteredList.map((item) => (
      <PropertyCardView key={item.id} property={item} />
    ));

    let priceList = getFilterOptions(2, "price");
    let propertyTypes = getFilterOptions(2, "propertyType");
    let bedrooms = getFilterOptions(2, "bedrooms");

    return (
      <div className="web-page">
        <Navbar
          tabIndex={2}
          propertyTypes={propertyTypes}
          bedrooms={bedrooms}
          priceList={priceList}
          onClick={(searchKeyword) => filterProperty(searchKeyword, 2)}
          filters
        />
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
