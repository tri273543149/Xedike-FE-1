import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { createAction } from "../../store/actions";
import { IS_MODAL_OPEN } from "../../store/constants/modal";
import { Link } from "react-router-dom";
import TripItem from "./TripItem";

const UserTrip = ({ userType }) => {
  const dispatch = useDispatch();
  const userTrips = useSelector((state) => state.trip.userTrips);
  const renderTripItem = () => {
    return userTrips.map((trip, key) => (
      <TripItem trip={trip} key={key} index={key + 1} />
    ));
  };
  return (
    <section className="user_trip">
      <div className="top_content">
        <p className="title">Chuyến đi của bạn</p>
        {userType !== "passenger" ? (
          <button
            className="btn btn-primary"
            onClick={() => dispatch(createAction(IS_MODAL_OPEN, "AddTrip"))}
          >
            Tạo chuyến đi mới
          </button>
        ) : (
          <Link to="/trips" className="btn btn-primary">
            Danh sách chuyến đi
          </Link>
        )}
      </div>
      <div className="mid_content">{renderTripItem()}</div>
    </section>
  );
};

export default UserTrip;
