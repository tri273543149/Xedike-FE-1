import { SET_DRIVER_PROFILE } from "../constants/driver";
import { SET_ERROR_INPUT, SET_ERROR_AUTH } from "../constants/error";
import { IS_MODAL_CLOSE } from "../constants/modal";
import { createAction } from ".";
import _ from "lodash";
import { carService } from "../../services";
import Swal from "sweetalert2";

export const addNewDriverCar = (data) => {
  return (dispatch) => {
    carService
      .createCar(data)
      .then((res) => {
        dispatch(createAction(SET_DRIVER_PROFILE, res.data));
        dispatch(createAction(SET_ERROR_INPUT, {}));
        dispatch(createAction(IS_MODAL_CLOSE));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Đăng ký xe thành công",
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

export const updateCarImage = (id, data) => {
  return (dispatch) => {
    carService
      .updateCarImage(id, data)
      .then((res) => {
        dispatch(createAction(SET_DRIVER_PROFILE, res.data));
        dispatch(createAction(SET_ERROR_AUTH, {}));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật hình ảnh thành công",
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

export const deleteDriverCar = (id) => {
  return (dispatch) => {
    carService
      .deleteCar(id)
      .then((res) => {
        dispatch(createAction(SET_DRIVER_PROFILE, res.data));
        dispatch(createAction(SET_ERROR_AUTH, {}));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Hủy đăng ký thành công",
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
