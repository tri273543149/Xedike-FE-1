import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { bookTripSchema } from "../../services/trip";
import { useSelector, useDispatch } from "react-redux";
import { bookTripFromUser } from "../../store/actions/trip";
import Swal from "sweetalert2";

const BookTrip = ({ tripId, availableSeats, history, fee }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const inputErrors = useSelector((state) => state.error.inputErrors) || {
    numberOfBookingSeats: "",
  };
  let { numberOfBookingSeats } = inputErrors;
  const handleOnSubmit = (values) => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "error",
        title: "Bạn phải đăng nhập",
      });
    } else {
      let data = { numberOfBookingSeats: values.numberOfBookingSeats };
      dispatch(bookTripFromUser(tripId, data, history));
    }
  };
  return (
    <div className="booktrip">
      <p className="sub_title">Đặt chuyến đi</p>
      <Formik
        initialValues={{
          numberOfBookingSeats: "1",
          typeCard: "Visa",
          name: "",
          number: "",
          code: "",
          locationFrom: "",
          locationTo: "",
        }}
        validationSchema={bookTripSchema}
        onSubmit={handleOnSubmit}
      >
        {({ handleChange }) => (
          <Form>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Điểm đón</span>
                    <ErrorMessage name="locationFrom">
                      {(msg) => <span className="text text-danger">{msg}</span>}
                    </ErrorMessage>
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
                      {(msg) => <span className="text text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    className="form-control"
                    type="text"
                    name="locationTo"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-100 mb-3">
                  <i className="fa fa-search-location mr-2"></i>
                  Bạn hãy nhập thật chi tiết địa chỉ (số nhà, số hẻm, tên
                  đường...). Tất cả để tài xế có thể dễ dàng đưa đón bạn.
                </div>
                <div className="w-100 mb-3">
                  <i className="fa fa-globe-asia mr-2"></i>
                  Bạn đã góp phần giảm thiểu 18.3 kg CO2 với chuyến đi này. Bạn
                  thật tuyệt vời!
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">
                      Số ghế ( hợp lệ {"<"} {availableSeats} )
                    </span>
                    <ErrorMessage name="numberOfBookingSeats">
                      {(msg) => <span className="text text-danger">{msg}</span>}
                    </ErrorMessage>
                    <span
                      className={
                        numberOfBookingSeats
                          ? "text d-block text-danger"
                          : "d-none"
                      }
                    >
                      {numberOfBookingSeats}
                    </span>
                  </div>
                  <Field
                    className="form-control"
                    type="text"
                    name="numberOfBookingSeats"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Hành lý</span>
                  </div>
                  <select className="form-control">
                    <option>Không có hành lý</option>
                    <option>Có hành lý</option>
                  </select>
                </div>
                <div className="w-100 mb-3">
                  <i className="fa fa-money-bill-wave mr-2"></i>
                  Giá của mỗi ghế là{" "}
                  <span className="text-danger font-weight-bold">
                    {fee ? fee.toLocaleString() : ""}VND
                  </span>
                  . Số ghế tối đa là{" "}
                  <span className="font-weight-bold text-primary">
                    {availableSeats}
                  </span>{" "}
                  ghế. Không đặt quá số ghế quy định.
                </div>
                <div className="w-100 mb-3">
                  <i className="fa fa-suitcase-rolling mr-2"></i>
                  Mỗi hành khách chỉ mang tối đa 02 hành lý. Và không được quá
                  10 kg.
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Chọn loại thẻ</span>
                    <ErrorMessage name="typeCard">
                      {(msg) => <span className="text text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    component="select"
                    className="form-control"
                    name="typeCard"
                    onChange={handleChange}
                  >
                    <option value="Visa">Visa</option>
                    <option value="Master">Master card</option>
                  </Field>
                </div>
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Tên người sở hữu</span>
                    <ErrorMessage name="name">
                      {(msg) => <span className="text text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    className="form-control"
                    type="password"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Mã số trên thẻ</span>
                    <ErrorMessage name="number">
                      {(msg) => <span className="text text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    className="form-control"
                    type="password"
                    name="number"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Mã bảo mật</span>
                    <ErrorMessage name="code">
                      {(msg) => <span className="text text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    className="form-control"
                    type="password"
                    name="code"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-danger">
                    XÁC NHẬN THANH TOÁN
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookTrip;
