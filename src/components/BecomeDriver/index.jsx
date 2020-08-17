import React from "react";
import "./index.css";

const BecomeDriver = () => {
  return (
    <section className="becomedriver">
      <div className="container">
        <p className="title">Tài xế hàng đầu</p>
        <div className="row">
          <div className="col-8">
            <div className="content_box">
              <div className="item">
                <img src="./images/d1.jpg" alt="/" />
                <div className="text">
                  <p className="name">Nguyễn Tiến Đạt</p>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="item">
                <img src="./images/d4.jpg" alt="/" />
                <div className="text">
                  <p className="name">Lê Duy Ân</p>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="item">
                <img src="./images/d3.jpg" alt="/" />
                <div className="text">
                  <p className="name">Trần Ngọc Sơn</p>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="item">
                <img src="./images/d2.jpg" alt="/" />
                <div className="text">
                  <p className="name">Lý Lệ Trinh</p>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <p className="subtitle">Trở thành đối tác với chúng tôi.</p>
            <p className="body">
              Là người sẽ mang lại những chuyến xe cũng như những trải nghiệm
              cho hành khách. Các tài xế luôn là những người hiểu rõ khách hàng
              cần những gì là tốt nhất. Tuy nhiên, chũng tôi có quy định cụ thể
              để đảm bảo những lỡi ích lớn nhất cho các bên.
            </p>
            <button className="btn btn-primary">Trở thành tài xế</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeDriver;
