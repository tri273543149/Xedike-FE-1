import React, { useState, useEffect } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import ControlBar from "./ControlBar";

const UserManage = () => {
  const userList = useSelector((state) => state.user.userList);
  const filter = useSelector((state) => state.filter);
  const renderUserItem = () => {
    let temptArray = [];
    switch (filter.filterType) {
      case "searchName":
        temptArray = userList.filter((user) => {
          return (
            user.fullName
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
      case "searchEmail":
        temptArray = userList.filter((user) => {
          return (
            user.email
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
      case "userType":
        if (filter.filterValue === "all") {
          temptArray = [...userList];
        } else {
          for (let user of userList) {
            if (user.userType === filter.filterValue) {
              temptArray = [...temptArray, user];
            }
          }
        }
        break;
      default:
        temptArray = [...userList];
        break;
    }
    return temptArray.map((user, key) => (
      <tr key={key}>
        <UserItem user={user} index={key + 1} />
      </tr>
    ));
  };
  return (
    <section className="usermanage">
      <div className="container">
        <ControlBar />
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Ảnh</th>
                  <th>Email</th>
                  <th>Họ tên</th>
                  <th>Điện thoại</th>
                  <th>Người dùng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>{renderUserItem()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserManage;
