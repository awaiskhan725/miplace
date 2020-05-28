import React, { Component } from "react";
import onclickOutside from "react-onclickoutside";

import { Icon } from "react-icons-kit";
import { chevronDown } from "react-icons-kit/feather/chevronDown";

import { MyContext } from "../context";

class NavbarPropertyFilter extends Component {
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
      console.log("component mount");
      let tempSelection;
      const { propertyType } = this.context;
      tempSelection = this.setSelection(propertyType, this.props.list);

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

    const { propertyType } = this.context;
    tempSelection = this.setSelection(propertyType, this.props.list);

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

  handleClickOutside = (evt) => {
    this.setState({ open: false });
  };

  toggleDropDown = () => {
    this.setState({ open: !this.state.open });
  };

  handleOnClick = (option) => {
    const { handleFilterChange } = this.context;
    if (option.id !== 1) {
      if (!this.state.selection.some((current) => current.id === option.id)) {
        if (!this.props.multiSelect) {
          this.setState({ selection: [option] });
          handleFilterChange([option], "propertyType");
        } else {
          let selectionAfterRemoval = this.state.selection;
          selectionAfterRemoval = selectionAfterRemoval.filter(
            (current) => current.id !== 1
          );
          this.setState({ selection: [...selectionAfterRemoval, option] });
          handleFilterChange(
            [...selectionAfterRemoval, option],
            "propertyType"
          );
        }
      } else {
        let selectionAfterRemoval = this.state.selection;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          (current) => current.id !== option.id
        );
        if (selectionAfterRemoval.length === 0) {
          this.setState({ selection: [this.props.list[0]] });
          handleFilterChange([this.props.list[0]], "propertyType");
        } else {
          this.setState({ selection: [...selectionAfterRemoval] });
          handleFilterChange([...selectionAfterRemoval], "propertyType");
        }
      }
    } else {
      this.setState({ selection: [option] });
      handleFilterChange([option], "propertyType");
    }
  };

  setSelection = (options, list) => {
    let tempSelection = [];
    options.map((item) => {
      tempSelection = [
        ...tempSelection,
        ...list.filter((option) => option.value === item),
      ];
    });
    return tempSelection;
  };

  render() {
    return (
      <div className="nav-filter-wrapper col border-right h-100 d-flex align-items-center">
        <div
          className={`p-0 w-100 h-100 d-flex align-items-center ${
            this.state.open && "filter-select-open"
          }`}
          onClick={this.toggleDropDown}
        >
          {this.state.selection[0].id === this.props.list[0].id
            ? this.props.title
            : this.state.selection.length < 2
            ? this.state.selection[0].value
            : `${this.state.selection.length} options selected`}
          <div className="filter-select-icon">
            <Icon icon={chevronDown} />
          </div>
        </div>
        {this.state.open && (
          <ul className="nav-filter-options-list shadow-sm">
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
                <label htmlFor={`${option.id}`}>{option.value}</label>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default onclickOutside(NavbarPropertyFilter);
