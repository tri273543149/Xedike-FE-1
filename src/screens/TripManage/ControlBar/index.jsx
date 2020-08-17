import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterAction } from "../../../store/actions";
import { FILTER } from "../../../store/constants/filter";

const ControlBar = () => {
  const dispatch = useDispatch();
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");

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

  const handleOnSearchLocationFrom = (e) => {
    setLocationFrom(e.target.value);
  };
  const handleOnSearchLocationTo = (e) => {
    setLocationTo(e.target.value);
  };
  return (
    <div className="control_bar">
      <p className="title">Quản lý chuyến đi</p>
      <input
        type="text"
        placeholder="Điểm đón"
        onKeyUp={handleOnSearchLocationFrom}
      />
      <input
        type="text"
        placeholder="Điểm đến"
        onKeyUp={handleOnSearchLocationTo}
      />
    </div>
  );
};

export default ControlBar;
