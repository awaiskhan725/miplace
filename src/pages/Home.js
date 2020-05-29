import React, { Component } from "react";
import {
  HomePageNav,
  HomePageServices,
  FeaturedNews,
  Footer,
} from "../components";

// services icon
import Buy_Col_1_Icon from "../icons/houses.png";
import Buy_Col_2_Icon from "../icons/dollar.png";
import Buy_Col_3_Icon from "../icons/track.png";
import Rent_Col_1_Icon from "../icons/form.png";
import Rent_Col_2_Icon from "../icons/utilities.png";
import Rent_Col_3_Icon from "../icons/flatmates.png";
import Sold_Col_1_Icon from "../icons/auction.png";
import Sold_Col_2_Icon from "../icons/sell.png";
import Sold_Col_3_Icon from "../icons/guides.png";

// home navbar background
import BuyBG from "../images/home-nav-buy-bg.jpg";
import RentBG from "../images/home-nav-rent-bg.png";
import SoldBG from "../images/home-nav-sold-bg.jpg";
import AgentBG from "../images/home-nav-agent-bg.jpeg";

import { MyContext } from "../context";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }

  static contextType = MyContext;

  render() {
    const tabs = [
      {
        id: 0,
        title: "buy",
        caption: "Search properties for sale",
        path: "/buy",
        background: BuyBG,
      },
      {
        id: 1,
        title: "rent",
        caption: "Search rental properties",
        path: "/rent",
        background: RentBG,
      },
      {
        id: 2,
        title: "sold",
        caption: "Search sold properties",
        path: "/sold",
        background: SoldBG,
      },
      {
        id: 3,
        title: "find agent",
        caption: "Search real estate agents",
        path: "/agent",
        background: AgentBG,
      },
    ];

    const services = [
      {
        id: 0,
        col_1_title: "Research suburbs",
        col_1_caption:
          "Find your place with our local lifestyle, demographics and market info.",
        col_1_icon: Buy_Col_1_Icon,
        col_1_button: "research now",
        col_2_title: "We do home loans",
        col_2_caption:
          "We'll help you find the right home loan at a great rate.",
        col_2_button: "learn more",
        col_2_icon: Buy_Col_2_Icon,
        col_3_title: "Track your property",
        col_3_caption:
          "Track the estimated value of your home and stay in touch with your local market.",
        col_3_button: "recieve updates",
        col_3_icon: Buy_Col_3_Icon,
      },
      {
        id: 1,
        col_1_title: "Apply with 1 form",
        col_1_caption:
          "Set up your tenant profile to apply online when you find your new place.",
        col_1_icon: Rent_Col_1_Icon,
        col_1_button: "create profile",
        col_2_title: "Organise utilities",
        col_2_caption:
          "We can help set up internet, electricity, gas and more - online and in-advance.",
        col_2_button: "get connected",
        col_2_icon: Rent_Col_2_Icon,
        col_3_title: "Find a flatmate",
        col_3_caption:
          "Find a place or a flatmate on Australia's biggest share accommodation website.",
        col_3_button: "get sharing",
        col_3_icon: Rent_Col_3_Icon,
      },
      {
        id: 2,
        col_1_title: "Latest auction & sales results",
        col_1_caption:
          "Stay in the loop with Australia's most comprehensive weekly auction and sales results.",
        col_1_icon: Sold_Col_1_Icon,
        col_1_button: "see this week's results",
        col_2_title: "Sell or stay?",
        col_2_caption:
          "Decide if it's time for you to sell with our expert advice and market insights.",
        col_2_button: "explore options",
        col_2_icon: Sold_Col_2_Icon,
        col_3_title: "Property how-to guides",
        col_3_caption:
          "Access expert tips & guides to help you with all your property needs.",
        col_3_button: "get advice",
        col_3_icon: Sold_Col_3_Icon,
      },
      {
        id: 3,
        col_1_title: "Sell or stay?",
        col_1_caption:
          "Decide if it's time for you to sell with our expert advice and market insights.",
        col_1_icon: Sold_Col_2_Icon,
        col_1_button: "explore options",
        col_2_title: "Guide to selling",
        col_2_caption:
          "Get tips and advice on staging your home, opening for inspection and more.",
        col_2_button: "get advice",
        col_2_icon: Sold_Col_3_Icon,
        col_3_title: "Get property updates",
        col_3_caption:
          "Track the estimated value of your home and local sales in your area.",
        col_3_button: "recieve updates",
        col_3_icon: Buy_Col_3_Icon,
      },
    ];

    const {
      loading,
      search,
      handleFilterChange,
      filterProperty,
      getFilterOptions,
    } = this.context;

    let priceList;
    let propertyTypes;
    let bedrooms;

    priceList = getFilterOptions(this.state.tabIndex, "price");
    propertyTypes = getFilterOptions(this.state.tabIndex, "propertyType");
    bedrooms = getFilterOptions(this.state.tabIndex, "bedrooms");

    return (
      <>
        <HomePageNav
          tabIndex={this.state.tabIndex}
          tabs={tabs}
          tabChange={(tabIndex) => {
            this.setState({ tabIndex });
          }}
          search={search}
          searchKeyword={(search) => handleFilterChange(search, "search")}
          propertyType={(propertyType) =>
            handleFilterChange(propertyType, "propertyType")
          }
          allPropertyTypes={propertyTypes}
          bedrooms={bedrooms}
          minBeds={(minBeds) => handleFilterChange(minBeds, "minBeds")}
          maxBeds={(maxBeds) => handleFilterChange(maxBeds, "maxBeds")}
          price={priceList}
          minPrice={(minPrice) => handleFilterChange(minPrice, "minPrice")}
          maxPrice={(maxPrice) => handleFilterChange(maxPrice, "maxPrice")}
          onSearch={() => filterProperty(this.state.tabIndex)}
        />
        <HomePageServices tabIndex={this.state.tabIndex} services={services} />
        <FeaturedNews />
        <Footer />
      </>
    );
  }
}
