import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiPlaceLogo from "../images/MiPlace - Logo.png";

import Icon from "react-icons-kit";
import { ic_menu } from "react-icons-kit/md/ic_menu";
import { androidFavoriteOutline } from "react-icons-kit/ionicons/androidFavoriteOutline";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { NavbarPropertyFilter, NavbarRangeFilter } from ".";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchKeyword: "",
    };
  }

  navbarToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const menu = [
      { id: 0, title: "buy", path: "/buy" },
      { id: 1, title: "rent", path: "/rent" },
      { id: 2, title: "sold", path: "/sold" },
      { id: 3, title: "find agent", path: "/agent" },
      { id: 4, title: "news", path: "/news" },
    ];

    console.log(menu[this.props.tabIndex].path);

    return (
      <div className="general-navbar shadow-sm">
        <div className="top-nav container d-flex justify-content-between py-4">
          <div className="d-flex align-items-center">
            {!this.props.filters && (
              <Link
                to={menu[this.props.tabIndex].path}
                className="btn go-back-btn"
              >
                <div className="back-btn-icon">
                  <Icon icon={ic_keyboard_backspace} />
                </div>
                Go back
              </Link>
            )}
            <button
              onClick={this.navbarToggle}
              className={
                this.state.isOpen ? "menu-btn menu-btn-active" : "menu-btn"
              }
            >
              <div className="menu-btn-icon">
                <Icon icon={ic_menu} size={20} />
              </div>
              Menu
            </button>
          </div>
          <Link to="/" className="navbar-logo">
            <img src={MiPlaceLogo} alt="" />
          </Link>
          <div className="user-session">
            <button type="button" className="btn fav-icon">
              <Icon icon={androidFavoriteOutline} size={20} />
            </button>
            <button type="button" className="btn sign-in-btn mr-2">
              Sign In
            </button>
            <button
              type="button"
              className="btn join-btn rounded mr-2 pl-4 pr-4"
            >
              Join
            </button>
          </div>
        </div>
        <div className={this.state.isOpen ? "menu menu-open" : "menu"}>
          <div className="container h-100 d-flex justify-content-center align-items-center">
            {menu.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={
                  this.state.isOpen
                    ? "menu-link mx-3 menu-link-visible"
                    : "menu-link mx-3"
                }
              >
                <button
                  className={`navbar-link-btn btn ${
                    this.props.tabIndex === index && "navbar-link-btn-active"
                  }`}
                  onClick={() => {
                    this.props.changeLink(index, this.state.searchKeyword);
                  }}
                >
                  {link.title}
                </button>
              </Link>
            ))}
          </div>
        </div>
        {this.props.filters && (
          <div className="filter-bar border-top">
            <div className="container">
              <div className="row">
                <div className="col-4 border-right d-flex align-items-center">
                  <ion-icon name="search-outline"></ion-icon>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search by state, suburb or postcode"
                    className="col pl-1 py-4 pr-0"
                    value={this.props.search}
                    onChange={(e) => this.props.searchKeyword(e.target.value)}
                  />
                </div>
                <div className="col-6 navbar navbar-expand-lg p-0">
                  <div className="collapse navbar-collapse h-100">
                    <NavbarPropertyFilter
                      title={"All property type"}
                      list={this.props.propertyTypes}
                      multiSelect
                    />
                    <NavbarRangeFilter
                      title={"Beds"}
                      filterType={"bedrooms"}
                      list={this.props.bedrooms}
                    />
                    <NavbarRangeFilter
                      title={"Price"}
                      filterType={"price"}
                      list={this.props.priceList}
                    />
                  </div>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center">
                  <button
                    className="btn filter-btn w-100 mr-2"
                    onClick={() => this.props.onClick(this.state.searchKeyword)}
                  >
                    update
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
