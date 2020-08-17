import { SET_ERROR_AUTH, SET_ERROR_INPUT } from "../constants/error";
import { createAction } from "../actions";
import { IS_MODAL_CLOSE } from "../constants/modal";
import {
  SET_TRIPS,
  SET_USER_TRIPS,
  ADD_USER_TRIP,
  DELETE_USER_TRIP,
  UPDATE_TRIP,
} from "../constants/trip";
import { tripService } from "../../services";
import _ from "lodash";
import Swal from "sweetalert2";

export const createDriverTrip = (data) => {
  return (dispatch) => {
    tripService
      .createTrip(data)
      .then((res) => {
        dispatch(createAction(ADD_USER_TRIP, res.data));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thêm chuyến đi thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(IS_MODAL_CLOSE));
        dispatch(createAction(SET_ERROR_INPUT, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_INPUT, _.get(err, "response.data")));
      });
  };
};

export const updateDriverTrip = (id, data) => {
  return (dispatch) => {
    tripService
      .updateTrip(id, data)
      .then((res) => {
        dispatch(createAction(UPDATE_TRIP, res.data));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật chuyến đi thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(IS_MODAL_CLOSE));
        dispatch(createAction(SET_ERROR_INPUT, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_INPUT, _.get(err, "response.data")));
      });
  };
};

export const getPassengerTrips = (id) => {
  return (dispatch) => {
    tripService
      .getPassengerTrips(id)
      .then((res) => {
        if (!_.isEqual(res.data, [])) {
          dispatch(createAction(SET_USER_TRIPS, res.data));
        }

        dispatch(createAction(SET_ERROR_AUTH, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_AUTH, _.get(err, "response.data")));
      });
  };
};

export const getDriverTrips = (id) => {
  return (dispatch) => {
    tripService
      .getDriverTrips(id)
      .then((res) => {
        if (!_.isEqual(res.data, [])) {
          dispatch(createAction(SET_USER_TRIPS, res.data));
        }
        dispatch(createAction(SET_ERROR_AUTH, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_AUTH, _.get(err, "response.data")));
      });
  };
};

export const getTripList = () => {
  return (dispatch) => {
    tripService
      .getTrips()
      .then((res) => {
        dispatch(createAction(SET_TRIPS, res.data));
        dispatch(createAction(SET_ERROR_AUTH, {}));
      })
      .catch((err) => {
        if (err)
          dispatch(createAction(SET_ERROR_AUTH, _.get(err, "response.data")));
      });
  };
};

export const bookTripFromUser = (id, data, history) => {
  return (dispatch) => {
    tripService
      .booktrip(id, data)
      .then((res) => {
        dispatch(createAction(SET_ERROR_INPUT, {}));
        history.push("/trips");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Đặt chuyến đi thành công",
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

export const cancelTrip = (id) => {
  return (dispatch) => {
    tripService
      .cancelTrip(id)
      .then((res) => {
        dispatch(createAction(DELETE_USER_TRIP, id));
        dispatch(createAction(SET_ERROR_AUTH, {}));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Hủy chuyến thành công",
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

export const deleteTrip = (id) => {
  return (dispatch) => {
    tripService
      .deleteTrip(id)
      .then((res) => {
        dispatch(createAction(DELETE_USER_TRIP, id));
        dispatch(createAction(SET_ERROR_AUTH, {}));
        dispatch(getTripList());
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Xóa chuyến đi thành công",
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
