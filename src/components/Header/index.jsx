import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_OPEN } from "../../store/constants/modal";
import { logout } from "../../store/actions/user";
import UserImage from "./user.jpg";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  let { isAuthenticated, profile } = auth;
  const renderOnSignIn = () => {
    return (
      <div className="onsignin">
        <NavLink
          to="/admin"
          className={profile.userType === "admin" ? "admin_signin" : "d-none"}
        >
          <i className="fa fa-cog mr-3"></i>
        </NavLink>
        <NavLink to={`/profile/${profile._id}`} className="user_name">
          <span>{profile.fullName}</span>
          <img
            src={
              profile.avatar
                ? `http://localhost:4000/${profile.avatar}`
                : UserImage
            }
            alt="/"
          />
        </NavLink>
        <p className="user_logout" onClick={() => dispatch(logout())}>
          <i className="fa fa-power-off"></i>
        </p>
      </div>
    );
  };
  const renderOnSignOut = () => {
    return (
      <>
        <button
          className="btn_signUp"
          onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignUp"))}
        >
          Đăng ký
        </button>
        <button
          className="btn_signIn"
          onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignIn"))}
        >
          Đăng nhập
        </button>
      </>
    );
  };
  return (
    <header>
      <div className="header_content">
        <div className="logo_content">
          <NavLink to="/">
            <i className="fa fa-car mr-2"></i>
            <span>XEDIKE</span>
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Trang chủ</NavLink>
            </li>
            <li>
              <NavLink to="/trips">Danh sách chuyến đi</NavLink>
            </li>
          </ul>
        </nav>
        <div className="search_content">
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
        <div className="login_content">
          {isAuthenticated ? renderOnSignIn() : renderOnSignOut()}
        </div>
      </div>
    </header>
  );
};

export default Header;
