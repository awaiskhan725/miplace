import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// miplace logo
import MiPlaceLogo from "../images/Logo-Inverted.png";
import PropertyTypeFilter from "./PropertyTypeFilter";

import styled from "styled-components";

const HomeNavContainer = styled.div`
  background: url(${(props) => props.image}) center/cover no-repeat;
`;

const HomePageNav = ({
  tabIndex,
  tabs,
  tabChange,
  search,
  searchKeyword,
  propertyType,
  allPropertyTypes,
  bedrooms,
  minBeds,
  maxBeds,
  price,
  minPrice,
  maxPrice,
  onSearch,
}) => {
  // const [searchKeyword, setSearchKeyword] = useState("");
  let history = useHistory();
  return (
    <HomeNavContainer image={tabs[tabIndex].background}>
      <div className="homeNav jumbotron jumbotron-fluid position-relative text-light mb-0">
        <div className="container">
          <div className="navbar navbar-expand-md mb-2 px-0">
            <Link to="/" className="navbar-brand">
              <img src={MiPlaceLogo} alt="" />
            </Link>
            <div className="collapse navbar-collapse ml-2">
              <ul className="navbar-nav">
                {tabs.map((tab, key) => (
                  <li
                    key={tab.id}
                    className={
                      tabIndex === tab.id ? "nav-item active" : "nav-item"
                    }
                  >
                    <button
                      type="button"
                      className="nav-link"
                      onClick={() => tabChange(tab.id)}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
                <li className="nav-item">
                  <Link to="/news" className="nav-link">
                    News
                  </Link>
                </li>
              </ul>
              <div className="ml-auto">
                <button type="button" className="btn mr-2 text-light">
                  Sign In
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light mr-2 pl-4 pr-4"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home-page-tab-comp row d-flex justify-content-center pb-5 mr-1">
            <div className="col-10 pr-1">
              <div className="tabs rounded p-3">
                <h1 className="pt-0 mt-0 mb-3">{tabs[tabIndex].caption}</h1>
                <div className="d-flex mb-0">
                  {tabs.map((tab, key) => (
                    <button
                      key={tab.id}
                      onClick={() => tabChange(tab.id)}
                      className={
                        tabIndex === tab.id
                          ? "tab-btn col-2 p-2 mr-1 text-center rounded-top tab-btn-active"
                          : "tab-btn col-2 p-2 mr-1 text-center rounded-top"
                      }
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
                <div className="d-flex mt-0">
                  <div className="search-bar col-10 p-3 text-dark">
                    <ion-icon name="search-outline"></ion-icon>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search by state, suburb or postcode"
                      className="pl-3 col-11"
                      autoFocus
                      value={search}
                      onChange={(e) => {
                        searchKeyword(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    className="search-btn col-2 p-3 text-light"
                    onClick={() => {
                      onSearch(searchKeyword);
                      history.push(tabs[tabIndex].path);
                    }}
                  >
                    Search
                  </button>
                </div>
                {tabIndex !== 3 ? (
                  <div className="d-flex">
                    <PropertyTypeFilter
                      title={"All property type"}
                      list={allPropertyTypes}
                      filterList={"propertyType"}
                      selectedOption={(option) => propertyType(option)}
                      multiSelect
                    />
                    <PropertyTypeFilter
                      title={"Beds (min)"}
                      list={bedrooms}
                      filterList={"minBeds"}
                      selectedOption={(option) => minBeds(option)}
                    />
                    <PropertyTypeFilter
                      title={"Beds (max)"}
                      list={bedrooms}
                      filterList={"maxBeds"}
                      selectedOption={(option) => maxBeds(option)}
                    />
                    <PropertyTypeFilter
                      title={tabIndex === 1 ? "Rent/week (min)" : "Price (min)"}
                      list={price}
                      filterList={"minPrice"}
                      selectedOption={(option) => minPrice(option)}
                    />
                    <PropertyTypeFilter
                      title={tabIndex === 1 ? "Rent/week (max)" : "Price (max)"}
                      list={price}
                      filterList={"maxPrice"}
                      selectedOption={(option) => maxPrice(option)}
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="home-loan-container d-flex flex-column justify-content-between col-2 rounded p-3">
              <div className="container-fluid m-0 p-0">
                <h1>Home loans</h1>
                <p>
                  Finally, there's one place to look for your home and your
                  loan.
                </p>
              </div>
              <button className="btn btn-outline-light container-fluid">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </HomeNavContainer>
  );
};

export default HomePageNav;
