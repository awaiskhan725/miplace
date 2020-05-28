import React, { Component } from "react";
import { MyContext } from "../context";
import { Navbar, Footer } from "../components";

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
    const { getSoldProperty } = this.context;
    const SoldProperty = getSoldProperty(this.state.slug);
    console.log(SoldProperty);

    return (
      <div className="web-page">
        <Navbar />
        {!SoldProperty ? (
          <div className="container text-center">
            <h5 className="p-5">No Property Found</h5>
          </div>
        ) : (
          <div>{SoldProperty.heading}</div>
        )}
        <Footer />
      </div>
    );
  }
}
