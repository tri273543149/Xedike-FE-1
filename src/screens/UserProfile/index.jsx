import React, { useState, useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import UserImage from "./user.jpg";
import Moment from "react-moment";
import { uploadAvatarUser } from "../../store/actions/user";
import { Redirect } from "react-router-dom";
import { createAction } from "../../store/actions";
import { IS_MODAL_OPEN } from "../../store/constants/modal";
import { getUserById } from "../../store/actions/user";
import { getPassengerTrips, getDriverTrips } from "../../store/actions/trip";
import {
  createDriverProfile,
  getDriverProfile,
} from "../../store/actions/driver";
import { logout } from "../../store/actions/user";
import { domain } from "../../config";
import _ from "lodash";
import ChangePassword from "../../auth/ChangePassword";
import UserTrip from "../../layouts/UserTrip";
import DriverProfile from "../../layouts/DriverProfile";

const UserProfile = ({ match }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.auth.profile);
  const driverProfile = useSelector((state) => state.driver.driverProfile);
  const [fileImage, setFileImage] = useState(null);
  const handleOnChangeFile = (e) => {
    let fileImage = e.target.files && e.target.files[0];
    setFileImage(fileImage);
  };
  useEffect(() => {
    if (fileImage !== null) {
      let { _id } = profile;
      const formData = new FormData();
      formData.append("avatar", fileImage);
      dispatch(uploadAvatarUser(_id, formData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileImage]);
  useEffect(() => {
    const { userId } = match.params;
    dispatch(getUserById(userId));
    dispatch(getPassengerTrips(userId));
    if (_.isEqual(driverProfile, {})) {
      dispatch(createDriverProfile());
    }
    dispatch(getDriverProfile(userId));
    dispatch(getDriverTrips(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let {
    email,
    fullName,
    phone,
    registerDate,
    avatar,
    sex,
    address,
    userType,
  } = profile;
  let gioiTinh = "";
  switch (sex) {
    case "male":
      gioiTinh = "Nam";
      break;
    case "female":
      gioiTinh = "Nữ";
      break;
    default:
      gioiTinh = "Chưa cập nhật";
      break;
  }
  let loaiNguoiDung = "";
  switch (userType) {
    case "passenger":
      loaiNguoiDung = "Hành khách";
      break;
    case "driver":
      loaiNguoiDung = "Tài xế";
      break;
    default:
      loaiNguoiDung = "Quản trị";
      break;
  }
  if (!localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
  return (
    <section className="user_profile">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="content_left">
              <div className="item_top">
                <div className="img_box">
                  <input
                    type="file"
                    name="fileImage"
                    onChange={handleOnChangeFile}
                  />
                  <div className="hoverlay">
                    <i className="fa fa-image"></i>
                  </div>
                  <img src={avatar ? domain + avatar : UserImage} alt="/" />
                </div>
                <div className="user_info">
                  <p className="username">{fullName}</p>
                  <p className="font-weight-bold">Chức vụ</p>
                  <p className="userType">
                    <i className="fa fa-user mr-2"></i>
                    {loaiNguoiDung}
                  </p>
                  <p className="font-weight-bold">Giới tính</p>
                  <p className="sex">
                    <i className="fa fa-venus-mars mr-2"></i>
                    {sex ? gioiTinh : "Nam"}
                  </p>
                </div>
              </div>
              <div className="item_bot">
                <p>
                  <i className="fa fa-user-check mr-3"></i>
                  <span
                    onClick={() =>
                      dispatch(createAction(IS_MODAL_OPEN, "UpdateInfo"))
                    }
                  >
                    Cập nhật thông tin cá nhân
                  </span>
                </p>
                <p>
                  <i className="fa fa-history mr-3"></i>
                  <span>Xem lịch sử chuyến đi</span>
                </p>
                <p>
                  <i className="fa fa-cog mr-3"></i>
                  <span>Cài đặt hồ sơ</span>
                </p>
                <p>
                  <i className="fa fa-power-off mr-3"></i>
                  <span onClick={() => dispatch(logout())}>Đăng xuất</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="content_right">
              <p className="title">Thông tin cá nhân</p>
              <div className="user_more">
                <p className="font-weight-bold">Ngày sinh</p>
                <p>
                  <i className="fa fa-birthday-cake mr-2"></i>
                  <span>22/07/1989</span>
                </p>
                <p></p>
                <p className="font-weight-bold">Dân tộc</p>
                <p>
                  <i className="fa fa-adjust mr-2"></i>
                  <span>Kinh</span>
                </p>
                <p></p>
                <p className="font-weight-bold">Ngày đăng ký</p>
                <p>
                  <i className="fa fa-calendar-alt mr-2"></i>
                  <span className="registerDate">
                    <Moment format="DD/MM/YYY HH:mm">{registerDate}</Moment>
                  </span>
                </p>
                <p></p>
                <p className="font-weight-bold">Email đăng ký</p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>
                  <span className="email">{email}</span>
                </p>
                <p className="text-right">
                  <span
                    className="spanCapNhat"
                    onClick={() =>
                      dispatch(createAction(IS_MODAL_OPEN, "UpdateInfo"))
                    }
                  >
                    Cập nhật
                  </span>
                </p>
                <p className="font-weight-bold">Số điện thoại</p>
                <p>
                  <i className="fa fa-phone mr-2"></i>
                  <span className="phone">{phone}</span>
                </p>
                <p className="text-right">
                  <span
                    className="spanCapNhat"
                    onClick={() =>
                      dispatch(createAction(IS_MODAL_OPEN, "UpdateInfo"))
                    }
                  >
                    Cập nhật
                  </span>
                </p>
                <p className="font-weight-bold">Địa chỉ</p>
                <p className="address">
                  <i className="fa fa-address-card mr-2"></i>
                  <span>{address ? address : "Chưa đăng ký địa chỉ"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-8">
            <UserTrip userType={userType} />
          </div>
          <div className="col-12 col-md-4">
            <ChangePassword />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            {userType !== "passenger" ? <DriverProfile /> : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
