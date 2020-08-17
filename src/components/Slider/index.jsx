import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <section className="slider">
      <div className="overlay"></div>
      <div className="content_box">
        <div className="text_box">
          <p className="title">Bắt đầu chuyến đi của bạn!</p>
          <p className="body">
            Đã có hơn 665 thành viên sử dụng dịch vụ trên toàn quốc.
          </p>
          <Link to="trips" className="btn btn-warning">
            Tham gia ngay
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Slider;
