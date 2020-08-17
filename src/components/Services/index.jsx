import React from "react";
import "./index.css";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <i className="fa fa-heart"></i>
            <p className="title">Tin tưởng</p>
            <p className="body">
              Bạn sẽ biết tài xế và bạn đồng hành là ai trước khi bắt đầu chuyến
              đi. Điều đó giúp trải nghiệm của bạn tốt hơn trên hành trình của
              mình.
            </p>
          </div>
          <div className="col-4">
            <i className="fa fa-shield-alt"></i>
            <p className="title">Chủ động</p>
            <p className="body">
              Thời gian chờ, số ghế trống, giá cả, chất lượng tài xế, các đánh
              giá..., tất cả sẽ được hiển thị rõ ràng để bạn yên tâm hơn với
              chuyến đi.
            </p>
          </div>
          <div className="col-4">
            <i className="fa fa-globe-asia"></i>
            <p className="title">Môi trường</p>
            <p className="body">
              Mỗi hai người đi chung trên một chuyến xe tương đương với việc
              trồng 4 cây xanh cho việc hấp thụ khí CO2 trong vòng 1 năm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
