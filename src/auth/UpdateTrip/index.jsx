import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addNewTripSchema } from "../../services/trip";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE } from "../../store/constants/modal";
import { updateDriverTrip } from "../../store/actions/trip";

const UpdateTrip = () => {
  const dispatch = useDispatch();
  const tripDetail = useSelector((state) => state.trip.tripDetail) || {
    _id: "",
    locationFrom: "",
    locationTo: "",
    availableSeats: "",
    startTime: "",
    fee: "",
  };
  let {
    locationFrom,
    locationTo,
    availableSeats,
    startTime,
    fee,
    _id,
  } = tripDetail;
  const inputErrors = useSelector(
    (state) =>
      state.error.inputErrors || {
        locationFrom: "",
        locationTo: "",
        availableSeats: "",
        startTime: "",
        fee: "",
      }
  );
  const handleSubmit = (values) => {
    dispatch(updateDriverTrip(_id, values));
  };
  return (
    <section className="addtrip">
      <div className="input_box">
        <div className="row m-0">
          <div className="col-5"></div>
          <div className="col-7 item_right">
            <p className="title">KHỞI TẠO CHUYẾN ĐI</p>
            <Formik
              initialValues={{
                locationFrom,
                locationTo,
                availableSeats,
                startTime,
                fee,
              }}
              validationSchema={addNewTripSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange }) => (
                <Form>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Điểm đón</span>
                      <ErrorMessage name="locationFrom">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          inputErrors.locationFrom
                            ? "text d-block text-danger"
                            : "d-none"
                        }
                      >
                        {inputErrors.locationFrom}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="locationFrom"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Điểm đến</span>
                      <ErrorMessage name="locationTo">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          inputErrors.locationTo
                            ? "text d-block text-danger"
                            : "d-none"
                        }
                      >
                        {inputErrors.locationTo}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="locationTo"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Số ghế trống</span>
                      <ErrorMessage name="availableSeats">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          inputErrors.availableSeats
                            ? "text d-block text-danger"
                            : "d-none"
                        }
                      >
                        {inputErrors.availableSeats}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="availableSeats"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Thời gian bắt đầu</span>
                      <ErrorMessage name="startTime">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          inputErrors.startTime
                            ? "text d-block text-danger"
                            : "d-none"
                        }
                      >
                        {inputErrors.startTime}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="date"
                      name="startTime"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Phí vận chuyển</span>
                      <ErrorMessage name="fee">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          inputErrors.fee
                            ? "text d-block text-danger"
                            : "d-none"
                        }
                      >
                        {inputErrors.fee}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="fee"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary mr-1">
                      Cập nhật chuyến đi
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}
                    >
                      Đóng
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateTrip;
