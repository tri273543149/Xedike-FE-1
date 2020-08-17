import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { passportIdDriverSchema } from "../../services/driver";
import { updatePassportId } from "../../store/actions/driver";
import { createAction } from "../../store/actions";
import { IS_MODAL_OPEN } from "../../store/constants/modal";
import CarItem from "../CarItem";

const DriverProfile = () => {
  const dispatch = useDispatch();
  const driverProfile = useSelector((state) => state.driver.driverProfile);
  const inputErrors = useSelector(
    (state) => state.error.inputErrors || { passportId: "" }
  );
  let { passportId, carInformation } = driverProfile;
  const renderCarItem = () => {
    if (carInformation) {
      return carInformation.map((car, key) => (
        <CarItem key={key} car={car} index={key + 1} />
      ));
    }
  };
  const handleOnSubmit = (values) => {
    dispatch(updatePassportId(values));
  };
  return (
    <section className="driver_profile">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <p className="title">Hồ sơ tài xế</p>
            <div className="passportId">
              <Formik
                initialValues={{ passportId: passportId || "" }}
                validationSchema={passportIdDriverSchema}
                enableReinitialize={true}
                onSubmit={handleOnSubmit}
              >
                {({ handleChange }) => (
                  <Form>
                    <div className="form-group">
                      <div className="form_content">
                        <span className="sub_title">Passport ID:</span>
                        <ErrorMessage name="passportId">
                          {(msg) => (
                            <span className="text text-danger">{msg}</span>
                          )}
                        </ErrorMessage>
                        <span
                          className={
                            inputErrors.passportId
                              ? "text d-block text-danger"
                              : "d-none"
                          }
                        >
                          {inputErrors.passportId}
                        </span>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="passportId"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-100">
                      <button type="submit" className="btn btn-primary mt-1">
                        Cập nhật
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="driver_info">
              <p className="font-weight-bold">Đánh giá</p>
              <p className="star">
                <span className="font-weight-bold text-dark mr-2">4.9</span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </p>
              <p className="font-weight-bold">Ngày đăng ký</p>
              <p>27/07/2019</p>
              <p className="font-weight-bold">Ngày hết hạn</p>
              <p>27/07/2021</p>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="top_content">
              <p className="title">Thông tin xe</p>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(createAction(IS_MODAL_OPEN, "AddCar"))}
              >
                Đăng ký xe mới
              </button>
            </div>
            <div className="car_content">{renderCarItem()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverProfile;
