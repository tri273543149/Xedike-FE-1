import React from "react";
import "./index.css";
import img1 from "./dalat.jpg";
import img2 from "./danang.jpg";
import img3 from "./hainoi.jpg";
import img4 from "./haiphong.jpg";
import img5 from "./hcm.jpg";
import img6 from "./vungtau.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="title">Dixeke.vn</p>
            <p className="body">
              Cùng nhau chia sẻ và trải nghiệm những chuyến đi thú vị. Mỗi hai
              người đi chung trên một chuyến xe tương đương với việc trồng 4 cây
              xanh cho việc hấp thụ khí CO2 trong vòng 1 năm.
            </p>
            <p className="sub_body">Điện thoại: 1800 1199 (Hỗ trợ 24/07)</p>
          </div>
          <div className="col-6">
            <p className="sub_title">Bộ sưu tập hình ảnh</p>
            <div className="footer_content">
              <img src={img1} alt="/" />
              <img src={img2} alt="/" />
              <img src={img3} alt="/" />
              <img src={img4} alt="/" />
              <img src={img5} alt="/" />
              <img src={img6} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
