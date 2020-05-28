import React, { Component } from "react";
import { MyContext } from "../context";
import { Navbar, Footer } from "../components";

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
    const { getRentalProperty } = this.context;
    const RentalProperty = getRentalProperty(this.state.slug);
    console.log(RentalProperty);

    return (
      <div className="web-page">
        <Navbar />
        {!RentalProperty ? (
          <div className="container text-center">
            <h5 className="p-5">No Property Found</h5>
          </div>
        ) : (
          <div>{RentalProperty.heading}</div>
        )}
        <Footer />
      </div>
    );
  }
}
