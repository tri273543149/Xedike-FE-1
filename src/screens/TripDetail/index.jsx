import React, { useState, useEffect } from "react";
import "./index.css";
import { tripService } from "../../services";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import UserImage from "./user.jpg";
import { domain } from "../../config";
// import components
import BookTrip from "../../auth/BookTrip";

const TripDetail = ({ match, history }) => {
  const userList = useSelector((state) => state.user.userList);
  const [tripDetail, setTripDetail] = useState({});
  useEffect(() => {
    let { tripId } = match.params;
    tripService
      .getTripById(tripId)
      .then((res) => {
        setTripDetail(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let {
    locationFrom,
    locationTo,
    startTime,
    fee,
    availableSeats,
    passengerIds,
    _id,
    driverId,
  } = tripDetail;
  let driverInfo = {};
  if (driverId) {
    let index = userList.findIndex((user) => user._id === driverId);
    if (index !== -1) {
      driverInfo = userList[index];
    }
  }
  let userArray = [];
  if (passengerIds) {
    for (let user of userList) {
      for (let i in passengerIds) {
        if (passengerIds[i] === user._id) {
          userArray = [...userArray, user];
        }
      }
    }
  }

  const renderPassenger = () => {
    return userArray.map((user, key) => (
      <div className="passenger_info" key={key}>
        <img src={user.avatar ? domain + user.avatar : UserImage} alt="/" />
        <div className="gridsystem">
          <p>Họ tên</p>
          <p>{user.fullName}</p>
          <p>Số điện thoại</p>
          <p>{user.phone}</p>
        </div>
      </div>
    ));
  };
  let { phone, fullName, sex, avatar } = driverInfo;
  let gioiTinh = "Chưa cập nhật";
  if (sex) {
    if (sex === "male") {
      gioiTinh = "Nam";
    } else {
      gioiTinh = "Nữ";
    }
  }
  return (
    <section className="tripdetail">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="left_content">
              <div className="item_top">
                <p className="mb-0">
                  <span className="locationFrom">{locationFrom}</span>
                  <i className="fa fa-long-arrow-alt-right mx-2 icon"></i>
                  <span className="locationTo">{locationTo}</span>
                </p>
                <p className="mb-0">
                  <i className="fa fa-truck mr-2 text-success"></i>
                  <span>Đưa đón tận nơi</span>
                </p>
              </div>
              <div className="item_mid">
                <p className="font-weight-bold">Thời gian</p>
                <p>
                  <i className="fa fa-calendar-alt mr-2"></i>
                  <span>
                    <Moment format="DD/MM/YYYY HH:mm">{startTime}</Moment>
                  </span>
                </p>
                <p>Thời gian xe chờ 15 phút.</p>
                <p className="font-weight-bold">Phí vận chuyển</p>
                <p>
                  <i className="fa fa-money-bill mr-2"></i>
                  <span>{fee ? fee.toLocaleString() : ""}</span> VND
                </p>
                <p>Áp dụng cho mỗi ghế.</p>
                <p className="font-weight-bold">Số ghế trống</p>
                <p>
                  <i className="fa fa-chair mr-2"></i>
                  <span>Còn {availableSeats} ghế</span>
                </p>
                <p>Mỗi ghế chỉ đi được 1 trẻ em. Chiều cao dưới 1m3</p>
                <p className="font-weight-bold">Thông tin xe</p>
                <p>
                  <i className="fa fa-car mr-2"></i>
                  <span>Toyota Innova</span>
                </p>
                <p>Cỡ vừa (xanh - đen).</p>
                <p className="font-weight-bold">Ghi chú</p>
                <p>
                  <i className="fa fa-clock mr-2"></i>
                  <span>Có thể muộn 15 phút.</span>
                </p>
                <p>Tối đa 30 phút đón khách.</p>
              </div>
              <div className="item_bot">
                <p className="font-weight-bold">Dịch vụ</p>
                <p>
                  <i className="fa fa-wifi mr-2"></i>
                  <i className="fa fa-wine-bottle mr-2"></i>
                  <i className="fa fa-music mr-2"></i>
                  <i className="fa fa-film mr-2"></i>
                  <i className="fa fa-utensils mr-2"></i>
                </p>
                <p>Có thê yêu cầu trực tiếp.</p>
                <p className="font-weight-bold">Hành lý</p>
                <p>
                  <i className="fa fa-suitcase-rolling mr-2"></i>
                  <span>Tối đa 10 kg.</span>
                </p>
                <p>Không quá cồng kềnh.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="right_content">
              <div className="driver_content">
                <img src={avatar ? domain + avatar : UserImage} alt="/" />
                <div className="driver_info">
                  <p className="name">{fullName}</p>
                  <p className="font-weight-bold">Tài xế</p>
                  <p className="star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                  </p>
                  <p className="font-weight-bold">Giới tính</p>
                  <p className="sex">{gioiTinh}</p>
                  <p className="font-weight-bold">Số điện thoại</p>
                  <p className="phone">{phone}</p>
                  <p className="font-weight-bold">Mạng xã hội</p>
                  <p className="social">
                    <i className="fab fa-facebook text-primary mr-2"></i>
                    <i className="fab fa-twitter text-info mr-2"></i>
                    <i className="fab fa-viber text-warning mr-2"></i>
                  </p>
                </div>
              </div>
              <div className="passenger_content">
                <p className="subtitle">Hành khách đi cùng chuyến xe</p>
                {renderPassenger()}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <BookTrip tripId={_id} availableSeats={availableSeats} fee={fee} history={history} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripDetail;
