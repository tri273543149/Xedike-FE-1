import React from "react";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTrip } from "../../../store/actions/trip";
import Swal from "sweetalert2";

const TripItem = ({ trip, index }) => {
  const dispatch = useDispatch();
  let { locationFrom, locationTo, startTime, fee, _id } = trip;
  const handelOnDeleteTrip = () => {
    Swal.fire({
      title: "Bạn muốn xóa chuyến đi này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteTrip(_id));
        Swal.fire("Đã xóa!", "success");
      }
    });
  };
  return (
    <>
      <td>{index}</td>
      <td>{locationFrom}</td>
      <td>{locationTo}</td>
      <td>
        <Moment format="DD/MM/YYYY">{startTime}</Moment>
      </td>
      <td>{fee.toLocaleString()}VND</td>
      <td>
        <NavLink to={`/trip/${_id}`} className="btn btn-primary mr-1">
          Chi tiết
        </NavLink>
        <button className="btn btn-danger" onClick={handelOnDeleteTrip}>
          Xóa
        </button>
      </td>
    </>
  );
};

export default TripItem;
