import React, { Component } from "react";
import onclickOutside from "react-onclickoutside";

import { Icon } from "react-icons-kit";
import { chevronDown } from "react-icons-kit/feather/chevronDown";

class RangeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selection: [this.props.list[0]] || [],
    };
  }

  componentDidMount() {
    let selection = this.setSelection(this.props.selected, this.props.list);
    this.setState({ selection });
  }

  handleOnClick = (option) => {
    this.setState({ selection: [option] });
    this.props.selection([option]);
  };

  setSelection = (option, list) => {
    let tempSelection = [];
    option.map(
      (item) =>
        (tempSelection = [
          ...tempSelection,
          list.find((option) => option.value === item),
        ])
    );
    return tempSelection;
  };

  handleClickOutside = (evt) => {
    this.setState({ open: false });
  };

  toggleDropDown = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="nav-filter-wrapper">
        <div
          className={`w-100 h-100 d-flex align-items-center p-2 border rounded ${
            this.state.open && "filter-select-open"
          }`}
          onClick={this.toggleDropDown}
        >
          {this.state.selection[0].value}
          <div className="filter-select-icon">
            <Icon icon={chevronDown} />
          </div>
        </div>
        {this.state.open && (
          <ul className="nav-filter-options-list shadow-sm">
            {this.props.list.map((option) => (
              <li key={option.id}>
                <input
                  type="radio"
                  id={`${option.id}`}
                  onChange={() => this.handleOnClick(option)}
                  checked={this.state.selection.some(
                    (current) => current.id === option.id
                  )}
                />
                <label htmlFor={`${option.id}`}>{option.value}</label>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default onclickOutside(RangeFilter);
