import React from "react";
import "./index.css";
import PersonImage from "./obj-2.png";

const Numbers = () => {
  return (
    <section className="numbers">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={PersonImage} alt="/" />
          </div>
          <div className="col-8">
            <div className="grid_system">
              <div className="item">
                <p className="title">364</p>
                <p className="subtitle">Hành khách</p>
                <p className="body">Hàng trăm lượt khách tin tưởng chúng tôi để tìm chuyến xe với chất lượng tốt nhất.</p>
              </div>
              <div className="item">
                <p className="title">292</p>
                <p className="subtitle">Tài xế</p>
                <p className="body">Hệ thống của chúng tôi kết nối hàng trăm tài xế sẵn sàng phục vụ nhu cầu đi lại mỗi ngày.</p>
              </div>
              <div className="item">
                <p className="title">183</p>
                <p className="subtitle">Chuyến xe</p>
                <p className="body">Số liệu này cho chúng tôi biết bạn đã hoàn thành chuyến xe một cách an toàn.</p>
              </div>
              <div className="item">
                <p className="title">869.76</p>
                <p className="subtitle">Khí CO2 giảm (kg)</p>
                <p className="body">Chúng ta đã góp phần giảm lượng khí CO2 trung bình mỗi ngày. Trái Đất sẽ rất biết ơn về điều này.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
