import React, { Component } from "react";
import Data from "./data";

const MyContext = React.createContext();

class WebContext extends Component {
  state = {
    buyList: [],
    rentList: [],
    soldList: [],
    agentList: [],
    newsList: [],
    filteredList: [],
    featuredNews: [],
    search: "",
    propertyType: ["all"],
    minBeds: ["Any"],
    maxBeds: ["Any"],
    minPrice: ["Any"],
    maxPrice: ["Any"],
    nearbySuburbs: false,
    loading: true,
  };

  componentDidMount() {
    if (localStorage.getItem("context")) {
      let fetchedData = JSON.parse(localStorage.getItem("context"));
      this.setState({
        filteredList: fetchedData.filteredList,
        featuredNews: fetchedData.featuredNews,
        propertyType: fetchedData.propertyType,
        minBeds: fetchedData.minBeds,
        maxBeds: fetchedData.maxBeds,
        minPrice: fetchedData.minPrice,
        maxPrice: fetchedData.maxPrice,
        nearbySuburbs: fetchedData.nearbySuburbs,
        loading: false,
      });
    }
    let data = this.formatData(Data);
    console.log(data);
    let newsList = data.filter((item) => item.type === "news");
    let featuredNews = newsList.filter((news) => news.featured === true);
    let buyList = data.filter((item) => item.type === "buy");
    let rentList = data.filter((item) => item.type === "rent");
    console.log(rentList);
    // let bedroomsData = data.filter((item) => item.bedrooms);
    // let maxBeds = [Math.max(...bedroomsData.map((item) => item.bedrooms))];
    this.setState({
      featuredNews,
      newsList,
      buyList,
      rentList,
      loading: false,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("context", JSON.stringify(this.state));
  }

  formatData = (Data) => {
    let tempData = Data.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let data;
      if (item.fields.userPhoto) {
        let userPhoto = item.fields.userPhoto.map(
          (image) => image.fields.file.url
        );
        data = { ...item.fields, images, userPhoto, id };
      } else {
        data = { ...item.fields, images, id };
      }
      return data;
    });
    return tempData;
  };

  getFilterOptions = (tabIndex, type) => {
    let options,
      optionsList = [];

    if (tabIndex === 0) {
      options = [...new Set(this.state.buyList.map((item) => item[type]))];
    } else if (tabIndex === 1) {
      options = [...new Set(this.state.rentList.map((item) => item[type]))];
    } else if (tabIndex === 2) {
      options = [...new Set(this.state.soldList.map((item) => item[type]))];
    } else {
      options = [];
    }

    if (tabIndex === 0 || tabIndex === 1 || tabIndex === 2) {
      options.map(
        (option, index) =>
          (optionsList = [...optionsList, { id: index + 2, value: option }])
      );
    }

    //----- uptil now same for price type, now it changes
    if (type === "propertyType") {
      optionsList = [{ id: 1, value: "all" }, ...optionsList];
    } else if (type === "bedrooms") {
      optionsList = [{ id: 1, value: "Any" }, ...optionsList];
    } else if (type === "price") {
      optionsList = [];
      if (tabIndex === 1) {
        let i = 50,
          j = 2;
        while (i <= 5000) {
          optionsList = [...optionsList, { id: j, value: i }];
          if (i < 500) {
            i += 25;
          } else if (i < 1000) {
            i += 50;
          } else if (i < 2000) {
            i += 100;
          } else {
            i += 500;
          }
          j++;
        }
      } else {
        let maxPrice = Math.max(...optionsList.map((item) => item.value));
        if (isFinite(maxPrice)) {
          let i = 50000,
            j = 2;
          while (i <= maxPrice) {
            optionsList = [...optionsList, { id: j, value: i }];
            if (i < 500000) {
              i += 25000;
            } else if (i < 1000000) {
              i += 50000;
            } else if (i < 2000000) {
              i += 100000;
            } else {
              i += 500000;
            }
            j++;
          }
        }
      }
      optionsList = [{ id: 1, value: "Any" }, ...optionsList];
    } else {
      optionsList = [];
      console.log("getFilterOptions: type not match");
    }
    // console.log(optionsList);
    return optionsList;
  };

  handleFilterChange = (value, type) => {
    if (type === "search") {
      this.setState({ [type]: value });
    } else {
      let options = [...new Set(value.map((item) => item.value))];
      this.setState({ [type]: options });
    }
  };

  filterProperty = (tabIndex) => {
    let {
      buyList,
      rentList,
      soldList,
      agentList,
      search,
      propertyType,
      minBeds,
      maxBeds,
      minPrice,
      maxPrice,
    } = this.state;

    console.log(this.state);
    // preparing data to be filtered according to the tab
    let tempData;
    if (tabIndex === 0) {
      tempData = [...buyList];
    } else if (tabIndex === 1) {
      tempData = [...rentList];
    } else if (tabIndex === 2) {
      tempData = [...soldList];
    } else {
      tempData = [...agentList];
    }

    // splitting search field into suburb, states and postcodes
    let searchKeyword = [];
    if (search.length > 0) {
      searchKeyword = search
        .split(";")
        .join(",")
        .split(".")
        .join(",")
        .split("/")
        .join(",")
        .split(":")
        .join(",")
        .split(/[\s, ]+/);
    }

    // if user entered string in a search field
    if (searchKeyword.length > 0) {
      let states = ["nsw", "vic", "qld", "act", "sa", "wa", "nt", "tas"];
      let statesCheck = [];

      // separate states from suburbs and postcode
      searchKeyword.forEach((item) => {
        let stateExist = false;
        states.forEach((state) => {
          if (state === item.toLowerCase()) {
            statesCheck = [...statesCheck, state];
            stateExist = true;
          }
        });
        if (stateExist) {
          searchKeyword = [
            ...searchKeyword.filter((current) => current !== item),
          ];
        }
      });

      let filteredList = [];

      // filtered data according to the states
      if (statesCheck.length > 0) {
        tempData.forEach((property) => {
          statesCheck.forEach((item) => {
            if (item === property.state.toLowerCase()) {
              filteredList = [...filteredList, property];
            }
          });
        });
        tempData = [...filteredList];
      }

      // filtered data according to the suburbs and postcode
      if (searchKeyword.length > 0) {
        filteredList = [];
        tempData.forEach((property) => {
          searchKeyword.forEach((item) => {
            if (item.toLowerCase() === property.suburb.toLowerCase()) {
              filteredList = [...filteredList, property];
            } else if (parseInt(item) === property.postCode) {
              filteredList = [...filteredList, property];
            } else {
              filteredList = [...filteredList];
            }
          });
        });
        tempData = [...filteredList];
      }
    }

    let filteredList = [];
    if (tabIndex !== 3) {
      if (propertyType[0] !== "all") {
        propertyType.forEach((value) => {
          filteredList = [
            ...filteredList,
            ...tempData.filter((property) => property.propertyType === value),
          ];
        });
      } else {
        filteredList = [...tempData];
      }

      if (minBeds[0] !== "Any") {
        if (maxBeds[0] !== "Any") {
          filteredList = filteredList.filter(
            (property) =>
              property.bedrooms >= minBeds[0] && property.bedrooms <= maxBeds[0]
          );
        } else {
          filteredList = filteredList.filter(
            (property) => property.bedrooms >= minBeds[0]
          );
        }
      } else {
        if (maxBeds[0] !== "Any") {
          filteredList = filteredList.filter(
            (property) => property.bedrooms <= maxBeds[0]
          );
        }
      }

      if (minPrice[0] !== "Any") {
        if (maxPrice[0] !== "Any") {
          filteredList = filteredList.filter(
            (property) =>
              property.price >= minPrice[0] && property.price <= maxPrice[0]
          );
        } else {
          filteredList = filteredList.filter(
            (property) => property.price >= minPrice[0]
          );
        }
      } else {
        if (maxPrice[0] !== "Any") {
          filteredList = filteredList.filter(
            (property) => property.price <= maxPrice[0]
          );
        }
      }
    }

    this.setState({ filteredList });
  };

  getBuyProperty = (slug) => {
    let tempData = [...this.state.buyList];
    const property = tempData.find((property) => property.slug === slug);
    return property;
  };

  getRentalProperty = (slug) => {
    let tempData = [...this.state.rentList];
    const property = tempData.find((property) => property.slug === slug);
    return property;
  };

  getSoldProperty = (slug) => {
    let tempData = [...this.state.soldList];
    const property = tempData.find((property) => property.slug === slug);
    return property;
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          getBuyProperty: this.getBuyProperty,
          getRentalProperty: this.getRentalProperty,
          getSoldProperty: this.getSoldProperty,
          handleFilterChange: this.handleFilterChange,
          filterProperty: this.filterProperty,
          getFilterOptions: this.getFilterOptions,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { WebContext, MyContext };
