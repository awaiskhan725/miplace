import React from "react";

const HomePageServices = ({ tabIndex, services }) => {
  return (
    <section className="homeServices p-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center px-5">
            <img src={services[tabIndex].col_1_icon} alt="" />
            <h5>{services[tabIndex].col_1_title}</h5>
            <p>{services[tabIndex].col_1_caption}</p>
            <a href="#">{services[tabIndex].col_1_button}</a>
          </div>
          <div className="col-sm-4 text-center px-5">
            <img src={services[tabIndex].col_2_icon} alt="" />
            <h5>{services[tabIndex].col_2_title}</h5>
            <p>{services[tabIndex].col_2_caption}</p>
            <a href="#">{services[tabIndex].col_2_button}</a>
          </div>
          <div className="col-sm-4 text-center px-5">
            <img src={services[tabIndex].col_3_icon} alt="" />
            <h5>{services[tabIndex].col_3_title}</h5>
            <p>{services[tabIndex].col_3_caption}</p>
            <a href="#">{services[tabIndex].col_3_button}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageServices;
