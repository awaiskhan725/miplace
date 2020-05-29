import React, { Component } from "react";
import { Navbar, Footer, Loading, PropertyCardView } from "../components";
import { MyContext } from "../context";

export default class Rent extends Component {
  static contextType = MyContext;

  render() {
    const {
      filteredList,
      loading,
      search,
      getFilterOptions,
      filterProperty,
      handleFilterChange,
    } = this.context;

    let rent = filteredList.map((item) => (
      <PropertyCardView key={item.id} property={item} />
    ));

    let priceList = getFilterOptions(1, "price");
    let propertyTypes = getFilterOptions(1, "propertyType");
    let bedrooms = getFilterOptions(1, "bedrooms");

    return (
      <div className="web-page">
        <Navbar
          tabIndex={1}
          search={search}
          searchKeyword={(search) => handleFilterChange(search, "search")}
          propertyTypes={propertyTypes}
          bedrooms={bedrooms}
          priceList={priceList}
          onClick={(searchKeyword) => filterProperty(searchKeyword, 1)}
          changeLink={(tabIndex, searchKeyword) => {
            handleFilterChange([{ id: 1, value: "Any" }], "minPrice");
            handleFilterChange([{ id: 1, value: "Any" }], "maxPrice");
            filterProperty(searchKeyword, tabIndex);
          }}
          filters
        />
        <section className="buy-section m-5">
          <div className="container text-center">
            <h5>Rental Properties &amp; Real Estate in Australia</h5>
            {loading ? (
              <Loading />
            ) : (
              <div>
                {/* <div className="row my-5">{featured}</div> */}
                <div className="row my-5">{rent}</div>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
