import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__tittle">Save your data storage here.</div>
        <div className="banner__desc">
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </div>
        <button className="btn banner__learnMore">Learn More</button>
      </div>
      <div className="banner__img">
        <img src="/banner.png" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
