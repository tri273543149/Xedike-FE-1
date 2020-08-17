import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterAction } from "../../../store/actions";
import { FILTER } from "../../../store/constants/filter";

const ControlBar = () => {
  const dispatch = useDispatch();
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [fee, setFee] = useState("");
  useEffect(() => {
    if (locationFrom !== "") {
      dispatch(filterAction(FILTER, "locationFrom", locationFrom));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationFrom]);

  useEffect(() => {
    if (locationTo !== "") {
      dispatch(filterAction(FILTER, "locationTo", locationTo));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationTo]);

  useEffect(() => {
    if (fee !== "") {
      dispatch(filterAction(FILTER, "fee", fee));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fee]);

  const handleOnSearchLocationFrom = (e) => {
    setLocationFrom(e.target.value);
  };
  const handleOnSearchLocationTo = (e) => {
    setLocationTo(e.target.value);
  };
  const handleOnSearchFee = (e) => {
    setFee(e.target.value);
  };
  return (
    <div className="control_bar">
      <p className="title">Tìm kiếm chuyến đi</p>
      <div className="form-group">
        <label>Điểm đón</label>
        <input
          className="form-control"
          type="text"
          onKeyUp={handleOnSearchLocationFrom}
        />
      </div>
      <div className="form-group">
        <label>Điểm đến</label>
        <input
          className="form-control"
          type="text"
          onKeyUp={handleOnSearchLocationTo}
        />
      </div>
      <div className="form-group">
        <label>Giá vé</label>
        <select onClick={handleOnSearchFee} className="form-control">
          <option value="all">Tất cả</option>
          <option value="100000">100.000 VND</option>
          <option value="200000">200.000 VND</option>
          <option value="300000">300.000 VND</option>
          <option value="400000">400.000 VND</option>
          <option value="500000">500.000 VND</option>
        </select>
      </div>
      <div className="text_content">
        <p>
          <i className="fa fa-shield-alt mr-2"></i>Hãy tìm hiểu thật kỹ thông
          tin chuyến đi trước khi đặt chuyến để tránh những rủi ro không mong
          muốn!
        </p>
        <p>
          <i className="fa fa-leaf mr-2"></i>Bạn sẽ góp phần giảm thiểu 18.3 kg
          CO2 với mỗi chuyến đi. Bắt đầu hành trình của bạn.
        </p>
      </div>
    </div>
  );
};

export default ControlBar;
