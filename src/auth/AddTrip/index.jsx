import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addNewTripSchema } from "../../services/trip";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE } from "../../store/constants/modal";
import { createDriverTrip } from "../../store/actions/trip";

const AddTrip = () => {
  const dispatch = useDispatch();
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
  let {
    locationFrom,
    locationTo,
    availableSeats,
    startTime,
    fee,
  } = inputErrors;
  const handleSubmit = (values) => {
    dispatch(createDriverTrip(values));
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
                locationFrom: "",
                locationTo: "",
                availableSeats: "",
                startTime: "",
                fee: "",
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
                          locationFrom ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {locationFrom}
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
                          locationTo ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {locationTo}
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
                          availableSeats ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {availableSeats}
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
                          startTime ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {startTime}
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
                        className={fee ? "text d-block text-danger" : "d-none"}
                      >
                        {fee}
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
                      Tạo chuyến đi
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

export default AddTrip;
