import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import TripItem from "./TripItem";
import ControlBar from "./ControlBar";

const AllTrip = () => {
  const tripList = useSelector((state) => state.trip.tripList);
  const userList = useSelector((state) => state.user.userList);
  const filter = useSelector((state) => state.filter);

  const renderTripItem = () => {
    let temptArray = [];
    switch (filter.filterType) {
      case "locationFrom":
        temptArray = tripList.filter((trip) => {
          return (
            trip.locationFrom
              .trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/đ/g, "d")
              .replace(/Đ/g, "D")
              .indexOf(
                filter.filterValue
                  .trim()
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/đ/g, "d")
                  .replace(/Đ/g, "D")
              ) !== -1
          );
        });
        break;
      case "locationTo":
        temptArray = tripList.filter((trip) => {
          return (
            trip.locationTo
              .trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/đ/g, "d")
              .replace(/Đ/g, "D")
              .indexOf(
                filter.filterValue
                  .trim()
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/đ/g, "d")
                  .replace(/Đ/g, "D")
              ) !== -1
          );
        });
        break;
      case "fee":
        if (filter.filterValue === "all") {
          temptArray = [...tripList];
        } else {
          for (let trip of tripList) {
            if (trip.fee === parseInt(filter.filterValue, 10)) {
              temptArray = [...temptArray, trip];
            }
          }
        }
        break;
      default:
        temptArray = [...tripList];
    }
    return temptArray.map((trip, key) => {
      let driverInfo = {};
      let { driverId } = trip;
      for (let user of userList) {
        if (user._id === driverId) {
          driverInfo = user;
        }
      }
      return (
        <TripItem
          key={key}
          trip={trip}
          driverInfo={driverInfo}
          index={key + 1}
        />
      );
    });
  };
  return (
    <section className="alltrip">
      <div className="container">
        <div className="row">
          <div className="col-9 trip_content">{renderTripItem()}</div>
          <div className="col-3">
            <ControlBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTrip;
