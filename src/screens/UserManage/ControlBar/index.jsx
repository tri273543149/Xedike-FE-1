import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterAction, createAction } from "../../../store/actions";
import { FILTER } from "../../../store/constants/filter";
import { IS_MODAL_OPEN } from "../../../store/constants/modal";

const ControlBar = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    if (searchName !== "") {
      dispatch(filterAction(FILTER, "searchName", searchName));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName]);

  useEffect(() => {
    if (searchEmail !== "") {
      dispatch(filterAction(FILTER, "searchEmail", searchEmail));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchEmail]);

  useEffect(() => {
    if (userType !== "") {
      dispatch(filterAction(FILTER, "userType", userType));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userType]);

  const handleOnSearchName = (e) => {
    setSearchName(e.target.value);
  };
  const handleOnSearchEmail = (e) => {
    setSearchEmail(e.target.value);
  };
  const handleOnFindUserType = (e) => {
    setUserType(e.target.value);
  };
  return (
    <div className="control_bar">
      <p className="title">Quản lý người dùng</p>
      <input type="text" placeholder="Họ tên" onKeyUp={handleOnSearchName} />
      <input type="text" placeholder="Email" onKeyUp={handleOnSearchEmail} />
      <select onClick={handleOnFindUserType}>
        <option value="all">Tất cả</option>
        <option value="driver">Tài xế</option>
        <option value="passenger">Hành khách</option>
        <option value="admin">Quản trị</option>
      </select>
      <button
        className="btn btn-success"
        onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignUp"))}
      >
        Thêm người dùng
      </button>
    </div>
  );
};

export default ControlBar;
