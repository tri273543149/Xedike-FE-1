import React, { useState } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { pageSize } from "../../config";
// import components
import ShowPagination from "./ShowPagination";
import TripItem from "./TripItem";

const Trips = () => {
  const tripList = useSelector((state) => state.trip.tripList);
  const userList = useSelector((state) => state.user.userList);
  const [currentPage, setCurrentPage] = useState(1);
  const handleOnChangePage = (page) => {
    setCurrentPage(page);
  };
  let length = tripList.length;
  const totalPages = Math.ceil(length / pageSize);
  let startPage = (currentPage - 1) * pageSize;
  let endPage = currentPage * pageSize;
  if (length < endPage) {
    endPage = length;
  }
  const renderTripItem = () => {
    let temptArray = [];
    let jsxTemplate;
    for (let i = startPage; i < endPage; i++) {
      let trip = tripList[i];
      let driverInfo = {};
      if (trip !== undefined) {
        let { driverId } = trip;
        for (let user of userList) {
          if (user._id === driverId) {
            driverInfo = user;
          }
        }
        jsxTemplate = (
          <div className="col-12" key={i}>
            <TripItem trip={trip} index={i + 1} driverInfo={driverInfo} />
          </div>
        );
      }
      temptArray = [...temptArray, jsxTemplate];
    }
    return temptArray;
  };

  return (
    <section className="tripscomponent">
      <p className="title">Chuyến đi sắp tới</p>
      <div className="container">
        <div className="row">{renderTripItem()}</div>
        <div className="row">
          <div className="col-12">
            <ShowPagination
              handleOnChangePage={handleOnChangePage}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trips;
