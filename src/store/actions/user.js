import { userService } from "../../services";
import { SET_ERROR_INPUT, SET_ERROR_AUTH } from "../constants/error";
import {
  SET_USER_LIST,
  UPDATE_USER,
  DELETE_USER,
  ADD_NEW_USER,
} from "../constants/user";
import { SET_CURRENT_USER } from "../constants/auth";
import { createAction } from ".";
import Swal from "sweetalert2";
import _ from "lodash";
import { IS_MODAL_CLOSE } from "../constants/modal";
import getFingerprint from "../../helpers/getFingerprint";
import jwtDecode from "jwt-decode";
import setHeaders from "../../helpers/setHeaders";
import { SET_USER_TRIPS } from "../constants/trip";
import { SET_DRIVER_PROFILE } from "../constants/driver";

export const register = (data) => {
  return (dispatch) => {
    userService
      .registerUser(data)
      .then((res) => {
        dispatch(createAction(SET_ERROR_INPUT, {}));
        dispatch(createAction(ADD_NEW_USER, res.data));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Đăng ký thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(IS_MODAL_CLOSE));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_INPUT, _.get(err, "response.data")));
      });
  };
};

export const login = (data) => {
  const { email, password } = data;
  return (dispatch) => {
    getFingerprint((fingerprint) => {
      userService
        .loginUser({ email, password, fingerprint })
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("token", token);
          const decoded = jwtDecode(token);
          dispatch(createAction(SET_CURRENT_USER, decoded));
          setHeaders(token, fingerprint);
          dispatch(createAction(SET_ERROR_INPUT, {}));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Đăng nhập thành công",
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch(createAction(IS_MODAL_CLOSE));
        })
        .catch((err) => {
          if (err)
            dispatch(
              createAction(SET_ERROR_INPUT, _.get(err, "response.data"))
            );
        });
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(createAction(SET_CURRENT_USER, {}));
    dispatch(createAction(SET_USER_TRIPS, []));
    dispatch(createAction(SET_DRIVER_PROFILE, {}));
    setHeaders();
  };
};

export const uploadAvatarUser = (id, data) => {
  return (dispatch) => {
    userService
      .uploadAvatar(id, data)
      .then((res) => {
        dispatch(createAction(SET_CURRENT_USER, res.data));
        dispatch(createAction(SET_ERROR_AUTH, {}));
        dispatch(createAction(UPDATE_USER, res.data));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật ảnh thành công",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_AUTH, _.get(err, "response.data")));
      });
  };
};

export const updateUserInfo = (id, data) => {
  return (dispatch) => {
    userService
      .updateUserInfo(id, data)
      .then((res) => {
        dispatch(createAction(SET_CURRENT_USER, res.data));
        dispatch(createAction(SET_ERROR_INPUT, {}));
        dispatch(createAction(IS_MODAL_CLOSE));
        dispatch(createAction(UPDATE_USER, res.data));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật thông tin thành công",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_INPUT, _.get(err, "response.data")));
      });
  };
};

export const changeUserPassword = (data) => {
  return (dispatch) => {
    userService
      .changePassword(data)
      .then((res) => {
        dispatch(createAction(SET_ERROR_INPUT, {}));
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.msg,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_INPUT, _.get(err, "response.data")));
      });
  };
};

export const getUserById = (id) => {
  return (dispatch) => {
    userService
      .getUserInfo(id)
      .then((res) => {
        dispatch(createAction(SET_CURRENT_USER, res.data));
        dispatch(createAction(SET_ERROR_AUTH, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_AUTH, _.get(err, "response.data")));
      });
  };
};

export const getUserList = () => {
  return (dispatch) => {
    userService
      .getUsers()
      .then((res) => {
        dispatch(createAction(SET_USER_LIST, res.data));
        dispatch(createAction(SET_ERROR_AUTH, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_AUTH, _.get(err, "response.data")));
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    userService
      .deleteUser(id)
      .then((res) => {
        dispatch(createAction(DELETE_USER, id));
        dispatch(createAction(SET_ERROR_AUTH, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_AUTH, _.get(err, "response.data")));
      });
  };
};
