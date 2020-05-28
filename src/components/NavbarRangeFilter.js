import React, { Component } from "react";
import onclickOutside from "react-onclickoutside";

import { Icon } from "react-icons-kit";
import { chevronDown } from "react-icons-kit/feather/chevronDown";

import { MyContext } from "../context";
import { RangeFilter } from ".";

class NavbarRangeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      minSelection: [this.props.list[0]] || [],
      maxSelection: [this.props.list[0]] || [],
      selection: "",
      firstRun: true,
    };
  }

  static contextType = MyContext;

  componentDidMount() {
    const { minBeds, maxBeds, minPrice, maxPrice } = this.context;
    let selection;

    if (this.props.filterType === "bedrooms") {
      if (minBeds[0] === "Any" && maxBeds[0] === "Any") {
        selection = "Any";
      } else if (!isNaN(minBeds[0]) && maxBeds[0] === "Any") {
        selection = `${minBeds[0]}+`;
      } else if (!isNaN(minBeds[0]) && !isNaN(maxBeds[0])) {
        if (minBeds[0] === maxBeds[0]) {
          selection = `${minBeds[0]}`;
        } else {
          selection = `${minBeds[0]} - ${maxBeds[0]}`;
        }
      } else {
        if (maxBeds[0] === this.props.list[1].value) {
          selection = maxBeds[0];
        } else {
          selection = `${this.props.list[1].value} - ${maxBeds[0]}`;
        }
      }
    }

    if (this.props.filterType === "price") {
      if (minPrice[0] === "Any" && maxPrice[0] === "Any") {
        selection = "Any";
      } else if (!isNaN(minPrice[0]) && maxPrice[0] === "Any") {
        selection = `${minPrice[0]}+`;
      } else if (!isNaN(minPrice[0]) && !isNaN(maxPrice[0])) {
        if (minPrice[0] === maxPrice[0]) {
          selection = `${minPrice[0]}`;
        } else {
          selection = `${minPrice[0]} - ${maxPrice[0]}`;
        }
      } else {
        if (maxPrice[0] === this.props.list[1].value) {
          selection = maxPrice[0];
        } else {
          selection = `${this.props.list[1].value} - ${maxPrice[0]}`;
        }
      }
    }

    this.setState({ selection });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.minSelection[0].id !== this.state.minSelection[0].id ||
      prevState.maxSelection[0].id !== this.state.maxSelection[0].id ||
      this.state.firstRun
    ) {
      const { minBeds, maxBeds, minPrice, maxPrice } = this.context;
      let selection;

      if (this.props.filterType === "bedrooms") {
        if (minBeds[0] === "Any" && maxBeds[0] === "Any") {
          selection = "Any";
        } else if (!isNaN(minBeds[0]) && maxBeds[0] === "Any") {
          selection = `${minBeds[0]}+`;
        } else if (!isNaN(minBeds[0]) && !isNaN(maxBeds[0])) {
          if (minBeds[0] === maxBeds[0]) {
            selection = `${minBeds[0]}`;
          } else {
            selection = `${minBeds[0]} - ${maxBeds[0]}`;
          }
        } else {
          if (maxBeds[0] === this.props.list[1].value) {
            selection = maxBeds[0];
          } else {
            selection = `${this.props.list[1].value} - ${maxBeds[0]}`;
          }
        }
      }

      if (this.props.filterType === "price") {
        if (minPrice[0] === "Any" && maxPrice[0] === "Any") {
          selection = "Any";
        } else if (!isNaN(minPrice[0]) && maxPrice[0] === "Any") {
          selection = `${minPrice[0]}+`;
        } else if (!isNaN(minPrice[0]) && !isNaN(maxPrice[0])) {
          if (minPrice[0] === maxPrice[0]) {
            selection = `${minPrice[0]}`;
          } else {
            selection = `${minPrice[0]} - ${maxPrice[0]}`;
          }
        } else {
          if (maxPrice[0] === this.props.list[1].value) {
            selection = maxPrice[0];
          } else {
            selection = `${this.props.list[1].value} - ${maxPrice[0]}`;
          }
        }
      }
      this.setState({ selection, firstRun: false });
    }
  }

  handleClickOutside = (evt) => {
    this.setState({ open: false });
  };

  toggleDropDown = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const {
      minBeds,
      maxBeds,
      minPrice,
      maxPrice,
      handleFilterChange,
    } = this.context;

    return (
      <div className="nav-filter-wrapper col border-right h-100 d-flex align-items-center">
        <div
          className={`p-0 w-100 h-100 d-flex align-items-center ${
            this.state.open && "filter-select-open"
          }`}
          onClick={this.toggleDropDown}
        >
          {`${this.props.title}: ${this.state.selection}`}
          <div className="filter-select-icon">
            <Icon icon={chevronDown} />
          </div>
        </div>
        {this.state.open && (
          <div className="range-container shadow-sm">
            <div className="min-range-container py-4 px-3">
              {`Min ${this.props.filterType}`}
              <RangeFilter
                title={"Any"}
                selected={
                  this.props.filterType === "bedrooms" ? minBeds : minPrice
                }
                list={this.props.list}
                selection={(option) => {
                  this.setState({ minSelection: option });
                  handleFilterChange(
                    option,
                    `${
                      this.props.filterType === "bedrooms"
                        ? "minBeds"
                        : "minPrice"
                    }`
                  );
                }}
              />
            </div>
            <div className="max-range-container py-4 px-3">
              {`Max ${this.props.filterType}`}
              <RangeFilter
                title={"Any"}
                selected={
                  this.props.filterType === "bedrooms" ? maxBeds : maxPrice
                }
                list={this.props.list}
                selection={(option) => {
                  this.setState({ maxSelection: option });
                  handleFilterChange(
                    option,
                    `${
                      this.props.filterType === "bedrooms"
                        ? "maxBeds"
                        : "maxPrice"
                    }`
                  );
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default onclickOutside(NavbarRangeFilter);
