import React from "react";

const IntroItem = (props) => {
  const { src, title, desc, itemUrl } = props;
  return (
    <li className="introduce__item">
      <div className="introduce__item-wrap">
        <div className="img">
          <img src={src} alt="" className="introduce__item-wrap__bg" />
        </div>
        <div className="introduce__item-wrap__content">
          <div className="introduce__item-top">
            <div className="introduce__item-wrap__title">{title}</div>
            <div className="introduce__item-wrap__desc">{desc}</div>
          </div>
          <div className="introduce__item-wrap__btn">
            Learn More{" "}
            <span>
              <img src="/arrow.svg" alt="" />
            </span>{" "}
          </div>
        </div>
        <div className="introduce__img">
          <img src={itemUrl} alt="" />
        </div>
      </div>
    </li>
  );
};

export default IntroItem;
