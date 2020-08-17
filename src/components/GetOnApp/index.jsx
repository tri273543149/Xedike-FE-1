import React from "react";
import "./index.css"

const GetOnApp = () => {
  return (
    <section className="getonapp">
      <div className="content_box">
        <p className="title">Ứng dụng trên di động</p>
        <p className="body">
          Hỗ trợ hành khách và tài xế trên cả Android và IOS
        </p>
        <div className="gridsystem">
          <div className="item">
            <img src="./images/user-appstore.png" alt="/" />
          </div>
          <div className="item">
            <img src="./images/user-playstore.png" alt="/" />
          </div>
          <div className="item">
            <img src="./images/provider-appstore.png" alt="/" />
          </div>
          <div className="item">
            <img src="./images/provider-playstore.png" alt="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetOnApp;
