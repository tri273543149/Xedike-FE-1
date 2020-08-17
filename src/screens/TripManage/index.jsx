import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import TripItem from "./TripItem";
import ControlBar from "./ControlBar";

const TripManage = () => {
  const tripList = useSelector((state) => state.trip.tripList);
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

      default:
        temptArray = [...tripList];
    }
    return temptArray.map((trip, key) => (
      <tr key={key}>
        <TripItem trip={trip} index={key + 1} />
      </tr>
    ));
  };
  return (
    <section className="tripmanage">
      <div className="container">
        <ControlBar />
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Điểm đón</th>
                  <th>Điểm đến</th>
                  <th>Ngày khởi hành</th>
                  <th>Phí vận chuyển</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>{renderTripItem()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripManage;
