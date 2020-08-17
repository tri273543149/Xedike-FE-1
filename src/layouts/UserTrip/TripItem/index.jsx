import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cancelTrip, deleteTrip } from "../../../store/actions/trip";
import { createAction } from "../../../store/actions";
import { IS_MODAL_OPEN } from "../../../store/constants/modal";
import { FIND_TRIP } from "../../../store/constants/trip";
import Swal from "sweetalert2";

const TripItem = ({ trip, index }) => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.auth.profile.userType);
  let {
    _id,
    locationFrom,
    locationTo,
    startTime,
    availableSeats,
    fee,
    passengerIds,
  } = trip;

  const handleOnCancelTrip = () => {
    Swal.fire({
      title: "Bạn muốn hủy chuyến đi nay?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
    }).then((result) => {
      if (result.value) {
        dispatch(cancelTrip(_id));
        Swal.fire("Hủy thành công!", "success");
      }
    });
  };
  const handleOnDeleteTrip = () => {
    Swal.fire({
      title: "Bạn muốn xóa chuyến đi này",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteTrip(_id));
        Swal.fire("Hủy thành công!", "success");
      }
    });
  };
  const handleOnFindTrip = () => {
    dispatch(createAction(FIND_TRIP, _id));
    dispatch(createAction(IS_MODAL_OPEN, "UpdateTrip"));
  };

  const renderButton = () => {
    if (userType === "passenger") {
      return (
        <button className="btn btn-danger ml-1" onClick={handleOnCancelTrip}>
          Hủy
        </button>
      );
    } else {
      return (
        <>
          <button className="btn btn-info ml-1" onClick={handleOnFindTrip}>
            <i className="fa fa-cog"></i>
          </button>
          <button className="btn btn-danger ml-1" onClick={handleOnDeleteTrip}>
            <i className="fa fa-trash-alt"></i>
          </button>
        </>
      );
    }
  };
  return (
    <div className={index % 2 !== 0 ? "tripitem background" : "tripitem"}>
      <p>
        <span className="locationFrom">{locationFrom}</span>
        <i className="fa fa-long-arrow-alt-right mx-2"></i>
        <span className="locationTo">{locationTo}</span>
      </p>
      <p>
        <i className="fa fa-car mr-2"></i>
        <span className="car">
          {index % 2 === 0 ? "Toyota Innova 2010" : "Isuzu Mu_X 2018"}
        </span>
      </p>
      <p className="text-right">
        <i className="fa fa-money-bill mr-2"></i>
        <span className="money">Giá: </span>
        <span className="fee">{fee.toLocaleString()} VND</span>
      </p>
      <p>
        <i className="fa fa-calendar-alt mr-2"></i>
        <span className="startTime">
          <Moment format="DD/MM/YYYY HH:mm">{startTime}</Moment>
        </span>
      </p>
      <p>
        <i className="fa fa-users mr-2"></i>
        <span className="passenger">
          {passengerIds ? passengerIds.length : "0"}
        </span>
        <i className="fa fa-chair mr-2 ml-4"></i>
        <span className="availableSeats">{availableSeats}</span>
        <i className="fa fa-truck mr-2 ml-4"></i>
        <span>Tận nơi</span>
      </p>
      <p className="text-right">
        <Link to={`/trip/${_id}`} className="btn btn-success">
          Xem chi tiết
        </Link>
        {renderButton()}
      </p>
    </div>
  );
};

export default TripItem;
