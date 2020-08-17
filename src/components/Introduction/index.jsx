import React from "react";
import "./index.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

let data = [
  { id: 1, img: "./images/cantho.jpg", name: "Cần thơ" },
  { id: 2, img: "./images/dalat.jpg", name: "Đà lạt" },
  { id: 3, img: "./images/danang.jpg", name: "Đà nẵng" },
  { id: 4, img: "./images/hainoi.jpg", name: "Hà nội" },
  { id: 5, img: "./images/haiphong.jpg", name: "Hải phòng" },
  { id: 6, img: "./images/hcm.jpg", name: "Tp Hồ Chí Minh" },
  { id: 7, img: "./images/hue.jpg", name: "Huế" },
  { id: 8, img: "./images/vinh.jpg", name: "Vinh" },
  { id: 9, img: "./images/vungtau.jpg", name: "Bà Rịa - Vũng Tàu" },
];

const Introduction = () => {
  const renderSliderItem = () => {
    return data.map((item, key) => (
      <SwiperSlide key={key}>
        <div className="content_item">
          <div className="hoverlay">
            <div className="title">{item.name}</div>
          </div>
          <img src={item.img} alt="/" />
        </div>
      </SwiperSlide>
    ));
  };
  return (
    <div className="container">
      <section className="introduction">
        <Swiper
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ el: "none" }}
        >
          {renderSliderItem()}
        </Swiper>
      </section>
    </div>
  );
};

export default Introduction;
