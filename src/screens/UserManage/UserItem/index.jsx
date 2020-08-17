import React from "react";
import { domain } from "../../../config";
import UserImage from "../user.jpg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../store/actions/user";
import Swal from "sweetalert2";

const UserItem = ({ user, index }) => {
  const dispatch = useDispatch();
  let { avatar, email, phone, fullName, userType, _id } = user;
  const handleOnDeleteUser = () => {
    Swal.fire({
      title: `Bạn muốn xóa người dùng ${fullName}?`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteUser(_id));
        Swal.fire("Đã xóa!", "success");
      }
    });
  };
  let loaiNguoiDung = "";
  switch (userType) {
    case "admin":
      loaiNguoiDung = "Quản trị";
      break;
    case "driver":
      loaiNguoiDung = "Tài xế";
      break;
    default:
      loaiNguoiDung = "Hành khách";
      break;
  }
  return (
    <>
      <td>{index}</td>
      <td>
        <img src={avatar ? domain + avatar : UserImage} alt="/" />
      </td>
      <td>
        <div className="item">{email}</div>
      </td>
      <td>
        <div className="item">{fullName}</div>
      </td>
      <td>
        <div className="item">{phone}</div>
      </td>
      <td>
        <div className="item">{loaiNguoiDung}</div>
      </td>
      <td>
        <div className="item">
          <NavLink to={`/profile/${_id}`} className="btn btn-primary">
            <i className="fab fa-product-hunt"></i>
          </NavLink>
          <button className="btn btn-danger ml-1" onClick={handleOnDeleteUser}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </td>
    </>
  );
};

export default UserItem;
