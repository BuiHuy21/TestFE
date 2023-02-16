import React from "react";
import IntroItem from "./IntroItem";
import { item } from "../services/data";

const Intro = () => {
  return (
    <div className="introduce">
      <div className="introduce__top">
        <h3 className="introduce__heading">Features</h3>
        <p className="introduce__desc">
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </div>
      <div className="introduce__content">
        <ul className="introduce__list">
          {item.map((item) => (
            <IntroItem
              src={item.src}
              title={item.title}
              desc={item.desc}
              itemUrl={item.itemUrl}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Intro;
