import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpUserSchema } from "../../services/user";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../store/actions/user";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE, IS_MODAL_OPEN } from "../../store/constants/modal";

const SignUp = () => {
  const dispatch = useDispatch();
  const inputErrors = useSelector(
    (state) =>
      state.error.inputErrors || {
        email: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        phone: "",
      }
  );
  let { email, password, confirmPassword, fullName, phone } = inputErrors;
  const handleOnSubmit = (values) => {
    dispatch(register(values));
  };
  return (
    <div className="sign_up">
      <div className="content_box">
        <div className="row m-0">
          <div className="col-6 item_left">
            <p className="title">Đăng ký thành viên</p>
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                fullName: "",
                userType: "admin",
                phone: "",
              }}
              validationSchema={signUpUserSchema}
              onSubmit={handleOnSubmit}
            >
              {({ handleChange, values, setFieldValue }) => (
                <Form>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Email</span>
                      <ErrorMessage name="email">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          email ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {email}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Mật khẩu</span>
                      <ErrorMessage name="password">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          password ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {password}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Xác nhận mật khẩu</span>
                      <ErrorMessage name="confirmPassword">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          confirmPassword
                            ? "text d-block text-danger"
                            : "d-none"
                        }
                      >
                        {confirmPassword}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Họ tên</span>
                      <ErrorMessage name="fullName">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          fullName ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {fullName}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="fullName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form_content">
                      <span className="label_name">Số điện thoại</span>
                      <ErrorMessage name="phone">
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                      <span
                        className={
                          phone ? "text d-block text-danger" : "d-none"
                        }
                      >
                        {phone}
                      </span>
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="phone"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <span className="label_name">Loại người dùng</span>
                    <Field
                      type="radio"
                      value="passenger"
                      name="userType"
                      onChange={() => setFieldValue("userType", "passenger")}
                      checked={values.userType === "passenger"}
                    />
                    <span className="label_name">Hành khách</span>
                    <Field
                      type="radio"
                      value="driver"
                      name="userType"
                      onChange={() => setFieldValue("userType", "driver")}
                      checked={values.userType === "driver"}
                    />
                    <span className="label_name">Tài xế</span>
                  </div>
                  <div className="button_box">
                    <button type="submit" className="btn btn-success">
                      Đăng ký
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-6 item_right">
            <div className="text_scroll">
              <p className="sub_title">Điều khoản và chính sách</p>
              <p className="body">
                1. Đồng hồ đo của taxi hiện đại được phát minh bởi một người Đức
                Wilhelm Bruhn năm 1891 và Daimler Victoria, chiếc taxi được
                trang bị đồng hồ đo đầu tiên, được Gottlieb Daimler chế tạo năm
                1897.
              </p>
              <p className="body">
                2. Đồng hồ đo của taxi ban đầu sử dụng cơ và được đặt bên ngoài
                xe. Các đồng hồ đo của taxi sau này được đặt trong xe, đến thập
                niên 1980 thì đồng hồ đo điện tử ra đời.
              </p>
              <p className="body">
                3. Các loại xe ngựa dịch vụ bắt đầu hoạt động ở Paris và London
                vào đầu thế kỷ 17, các loại dịch vụ xe ngựa đầu tiên được ghi
                chép được khởi xướng đầu tiên bởi Nicolas Sauvage ở Paris năm
                1640. Ở London, đạo luật xe ngựa chở khách trở thành đạo luật
                đầu tiên về kiểm soát các phương tiện cho thuê.
              </p>
              <p className="body">
                4. Năm 1891, Wilhelm Bruhn phát minh ra đồng hồ đo cho taxi, báo
                hiệu sự mở đầu của taxi thời hiện đại. Trước xe trang bị đồng đồ
                đo taxi đầu tiên là Daimler Victoria, chế tạo bởi Gottlieb
                Daimler năm 1897. Công ty taxi hiện đại đầu tiên được mở bởi
                Friedrich Greiner và bắt đầu hoạt động tại thành phố Stuttgart
                cùng năm đó.
              </p>
            </div>
            <div className="button_box_2">
              <button className="btn btn-primary w-100 mb-1">
                Đăng nhập bằng Facebook
              </button>
              <button className="btn btn-warning w-100 mb-3">
                Đăng nhập bằng Google
              </button>
              <button
                className="btn btn-info mr-2"
                onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignIn"))}
              >
                Đăng nhập
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
