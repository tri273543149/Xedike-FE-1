import { driverService } from "../../services";
import { SET_DRIVER_PROFILE } from "../constants/driver";
import { SET_ERROR_AUTH, SET_ERROR_INPUT } from "../constants/error";
import { createAction } from ".";
import _ from "lodash";
import Swal from "sweetalert2";

export const createDriverProfile = () => {
  return (dispatch) => {
    driverService
      .createDriver()
      .then((res) => {
        dispatch(createAction(SET_DRIVER_PROFILE, res.data));
        dispatch(createAction(SET_ERROR_AUTH, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_AUTH, _.get(err, "response.data")));
      });
  };
};
export const getDriverProfile = (id) => {
  return (dispatch) => {
    driverService
      .getDriverInfo(id)
      .then((res) => {
        dispatch(createAction(SET_DRIVER_PROFILE, res.data));
        dispatch(createAction(SET_ERROR_AUTH, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_AUTH, _.get(err, "response.data")));
      });
  };
};

export const updatePassportId = (data) => {
  return (dispatch) => {
    driverService
      .updateDriverInfo(data)
      .then((res) => {
        dispatch(createAction(SET_DRIVER_PROFILE, res.data));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật thông tin thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(SET_ERROR_INPUT, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_INPUT, _.get(err, "response.data")));
      });
  };
};
