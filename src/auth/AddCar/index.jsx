import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addNewCarSchema } from "../../services/car";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE } from "../../store/constants/modal";
import { addNewDriverCar } from "../../store/actions/car";

const AddCar = () => {
  const dispatch = useDispatch();
  const inputErrors = useSelector(
    (state) =>
      state.error.inputErrors || {
        brand: "",
        model: "",
        manufacturingYear: "",
        licensePlate: "",
        numberOfSeats: "",
      }
  );
  let {
    brand,
    model,
    manufacturingYear,
    licensePlate,
    numberOfSeats,
  } = inputErrors;
  const handleSubmit = (values) => {
    dispatch(addNewDriverCar(values));
  };
  return (
    <section className="addcar">
      <div className="content_box">
        <div className="row m-0">
          <div className="col-6 item_left">
            <p className="title">ĐĂNG KÝ THÔNG TIN XE</p>
            <Formik
              initialValues={{
                brand: "",
                model: "",
                manufacturingYear: "",
                licensePlate: "",
                numberOfSeats: "",
              }}
              validationSchema={addNewCarSchema}
              enableReinitialize={true}
              onSubmit={handleSubmit}
            >
              {({ handleChange }) => (
                <Form>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Tên xe</span>
                      <ErrorMessage name="brand">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          brand ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {brand}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="brand"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Hãng xe</span>
                      <ErrorMessage name="model">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          model ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {model}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="model"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Năm sản xuất</span>
                      <ErrorMessage name="manufacturingYear">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          manufacturingYear
                            ? "text d-block text-danger"
                            : "d-none"
                        }
                      >
                        {manufacturingYear}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="manufacturingYear"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Biển số</span>
                      <ErrorMessage name="licensePlate">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          licensePlate ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {licensePlate}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="licensePlate"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Số ghế</span>
                      <ErrorMessage name="numberOfSeats">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          numberOfSeats ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {numberOfSeats}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="numberOfSeats"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-success mr-1">
                      Thêm xe
                    </button>
                    <button
                      type="button"
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

export default AddCar;
