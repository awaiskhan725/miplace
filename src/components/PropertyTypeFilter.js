import React, { Component } from "react";
import onclickOutside from "react-onclickoutside";

import { Icon } from "react-icons-kit";
import { chevronDown } from "react-icons-kit/feather/chevronDown";

import { MyContext } from "../context";

class PropertyTypeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selection: [this.props.list[0]] || [],
      firstRun: true,
    };
  }

  static contextType = MyContext;

  componentDidMount() {
    if (!this.state.firstRun) {
      let tempSelection;
      switch (this.props.filterList) {
        case "propertyType":
          const { propertyType } = this.context;
          tempSelection = this.setSelection(propertyType, this.props.list);
          break;
        case "minBeds":
          const { minBeds } = this.context;
          tempSelection = this.setSelection(minBeds, this.props.list);
          break;
        case "minPrice":
          const { minPrice } = this.context;
          tempSelection = this.setSelection(minPrice, this.props.list);
          break;
        case "maxPrice":
          const { maxPrice } = this.context;
          tempSelection = this.setSelection(maxPrice, this.props.list);
          break;
      }
      // const { propertyType } = this.context;
      // let tempSelection = this.setSelection(propertyType, this.props.list);
      let selectionMatch = true;
      tempSelection.forEach((option) => {
        if (!this.state.selection.some((current) => current.id === option.id)) {
          selectionMatch = false;
          return;
        }
      });
      if (!selectionMatch) {
        this.setState({ selection: tempSelection });
      }
    } else {
      this.setState({ firstRun: false });
    }
  }

  componentDidUpdate() {
    let tempSelection;
    switch (this.props.filterList) {
      case "propertyType":
        const { propertyType } = this.context;
        tempSelection = this.setSelection(propertyType, this.props.list);
        break;
      case "minBeds":
        const { minBeds } = this.context;
        tempSelection = this.setSelection(minBeds, this.props.list);
        break;
      case "maxBeds":
        const { maxBeds } = this.context;
        tempSelection = this.setSelection(maxBeds, this.props.list);
        break;
      case "minPrice":
        const { minPrice } = this.context;
        tempSelection = this.setSelection(minPrice, this.props.list);
        break;
      case "maxPrice":
        const { maxPrice } = this.context;
        tempSelection = this.setSelection(maxPrice, this.props.list);
        break;
    }
    let selectionMatch = true;
    tempSelection.forEach((option) => {
      if (!this.state.selection.some((current) => current.id === option.id)) {
        selectionMatch = false;
        return;
      }
    });
    if (!selectionMatch) {
      this.setState({ selection: tempSelection });
    }
  }

  toggleDropDown = () => {
    this.setState({ open: !this.state.open });
  };

  handleOnClick = (option) => {
    if (option.id !== 1) {
      if (!this.state.selection.some((current) => current.id === option.id)) {
        if (!this.props.multiSelect) {
          this.setState({ selection: [option] });
          this.props.selectedOption([option]);
        } else {
          let selectionAfterRemoval = this.state.selection;
          selectionAfterRemoval = selectionAfterRemoval.filter(
            (current) => current.id !== 1
          );
          this.setState({ selection: [...selectionAfterRemoval, option] });
          this.props.selectedOption([...selectionAfterRemoval, option]);
        }
      } else {
        let selectionAfterRemoval = this.state.selection;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          (current) => current.id !== option.id
        );
        if (selectionAfterRemoval.length === 0) {
          this.setState({ selection: [this.props.list[0]] });
          this.props.selectedOption([this.props.list[0]]);
        } else {
          this.setState({ selection: [...selectionAfterRemoval] });
          this.props.selectedOption([...selectionAfterRemoval]);
        }
      }
    } else {
      this.setState({ selection: [option] });
      this.props.selectedOption([option]);
    }
  };

  handleClickOutside = (evt) => {
    this.setState({ open: false });
  };

  setSelection = (options, list) => {
    let tempSelection = [];
    options.map(
      (item) =>
        (tempSelection = [
          ...tempSelection,
          list.find((option) => option.value === item),
        ])
    );
    return tempSelection;
  };

  render() {
    return (
      <div className="filter-wrapper">
        <div
          className={`filter-select-container ${
            this.state.open && "filter-select-open"
          }`}
          // tabIndex={0}
          // role="button"
          onClick={this.toggleDropDown}
        >
          <span>
            {this.props.filterList === "minPrice" ||
            this.props.filterList === "maxPrice"
              ? this.state.selection[0].id !== this.props.list[0].id
                ? "$"
                : null
              : null}
            {this.state.selection[0].id === this.props.list[0].id
              ? this.props.title
              : this.state.selection.length < 2
              ? this.props.filterList === "minPrice" ||
                this.props.filterList === "maxPrice"
                ? this.state.selection[0].value.toLocaleString()
                : this.state.selection[0].value
              : `${this.state.selection.length} options selected`}
            {this.props.filterList === "minBeds" ||
            this.props.filterList === "maxBeds"
              ? isNaN(this.state.selection[0].value)
                ? null
                : " Beds"
              : null}
            {this.state.selection[0].id === this.props.list[0].id
              ? null
              : this.props.filterList === "minBeds" ||
                this.props.filterList === "minPrice"
              ? " (min)"
              : this.props.filterList === "maxBeds" ||
                this.props.filterList === "maxPrice"
              ? " (max)"
              : null}
          </span>
          <div className="filter-select-icon">
            <Icon icon={chevronDown} />
          </div>
        </div>
        {this.state.open && (
          <ul className="filter-options-list rounded shadow-sm">
            {this.props.list.map((option) => (
              <li key={option.id}>
                {this.props.multiSelect ? (
                  <input
                    type="checkbox"
                    id={`${option.id}`}
                    onChange={() => this.handleOnClick(option)}
                    checked={this.state.selection.some(
                      (current) => current.id === option.id
                    )}
                  />
                ) : (
                  <input
                    type="radio"
                    id={`${option.id}`}
                    onChange={() => this.handleOnClick(option)}
                    checked={this.state.selection.some(
                      (current) => current.id === option.id
                    )}
                  />
                )}
                <label htmlFor={`${option.id}`}>
                  {isNaN(option.value)
                    ? option.value
                    : `${
                        this.props.filterList === "minPrice" ||
                        this.props.filterList === "maxPrice"
                          ? "$"
                          : ""
                      }${option.value.toLocaleString()}`}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default onclickOutside(PropertyTypeFilter);
