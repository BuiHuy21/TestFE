import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllGalary } from "../services/Galary";

const Slider = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    getImg();
  }, []);
  const getImg = async () => {
    const res = await getAllGalary();
    if (res) setInfo(res);
  };
  console.log(info);
  return (
    <div className="slider">
      <h2 className="slider__title">Testimonials</h2>
      <Swiper
        style={{ maxHeight: "330px", height: "100%" }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
      >
        {info.map((item) => {
          return (
            <SwiperSlide>
              <div className="slider__wrap">
                <div className="slider__img">
                  <img src={item.imageUrl} alt="" />
                </div>
                <div className="slider__content">
                  <h2 className="slider__name">John Fang </h2>
                  <p className="slider__subTitle">wordfaang.com</p>
                  <p className="slider__desc">{item.desctiption}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
