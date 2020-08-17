import React from "react";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";
import UserImage from "../user.jpg";
import { domain } from "../../../config";

const TripItem = ({ trip, driverInfo, index }) => {
  let {
    locationFrom,
    locationTo,
    fee,
    startTime,
    _id,
    passengerIds,
    availableSeats,
  } = trip;
  let { avatar, fullName } = driverInfo;
  return (
    <div className={index % 2 === 0 ? "tripitem background2" : "tripitem background"}>
      <div className="item_content">
        <div className="item">
          <span className="locationFrom text-success">{locationFrom}</span>
          <i className="fa fa-long-arrow-alt-right mx-1"></i>
          <span className="locationTo text-primary">{locationTo}</span>
        </div>
        <div className="item">
          <i className="fa fa-car mr-1"></i>
          <span className="tenXe">
            {index % 2 !== 0 ? "Toyota Innova 2010" : "Isuzu Mu-X 2018"}
          </span>
        </div>
        <div className="item">
          <img src={avatar ? domain + avatar : UserImage} alt="/" />
          <span className="fullName text-info">{fullName}</span>
        </div>
        <div className="item text-right">
          <span className="phiVanChuyen">Giá vé: </span>
          <span className="money font-weight-bold text-danger">
            {fee.toLocaleString()}VND
          </span>
        </div>
        <div className="item">
          <i className="fa fa-calendar-alt mr-1"></i>
          <span className="startTime">
            <Moment format="DD/MM/YYY HH:mm">{startTime}</Moment>
          </span>
        </div>
        <div className="item">
          <i className="fa fa-users mr-1"></i>
          <span className="soHanhKhach">{passengerIds.length}</span>
          <i className="fa fa-chair ml-4 mr-1"></i>
          <span className="soGhe">{availableSeats}</span>
          <i className="fa fa-truck ml-4 mr-1"></i>
          <span className="tanNoi">Tận nơi</span>
        </div>
        <div className="item_star">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-alt"></i>
          <span className="rating">{index % 2 !== 0 ? "4.6" : "4.9"}</span>
          <span className="tot font-weight-bold text-success">
            {index % 2 !== 0 ? "Tiêu chuẩn" : "Tốt"}
          </span>
        </div>
        <div className="item text-right">
          <NavLink to={`/trip/${_id}`} className="btn btn-primary">
            Xem chi tiết
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TripItem;
