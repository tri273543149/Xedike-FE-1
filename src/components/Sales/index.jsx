import React from "react";
import "./index.css";
import GiftImage from "./gift.png";
import { useDispatch } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_OPEN } from "../../store/constants/modal";

const Sales = () => {
  const dispatch = useDispatch();
  return (
    <section className="sales">
      <div className="container">
        <div className="content_box">
          <div className="item">
            <img src={GiftImage} alt="/" />
          </div>
          <div className="item">
            <p className="title">
              Hoàn thành chuyến xe để nhận ưu đãi cho các chuyến đi sau.
            </p>
            <p className="body">
              Hãy click HOÀN THÀNH và để lại những đánh giá của bạn về chuyến đi
              của mình để nhận những điểm tích lũy.
            </p>
          </div>
          <div className="item">
            <button
              className="btn btn-light"
              onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignUp"))}
            >
              Đăng nhập ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
