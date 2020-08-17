import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateUserSchema } from "../../services/user";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE } from "../../store/constants/modal";
import { updateUserInfo } from "../../store/actions/user";

const UpdateInfo = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.auth.profile);
  const inputErrors = useSelector(
    (state) =>
      state.error.inputErrors || {
        email: "",
        fullName: "",
        phone: "",
        sex: "",
        address: "",
      }
  );
  let { email, fullName, phone, sex, address, _id } = profile;
  const handleOnSubmit = (values) => {
    dispatch(updateUserInfo(_id, values));
  };
  return (
    <section className="update_userinfo">
      <div className="content_box">
        <p className="title">Cập nhật thông tin</p>
        <Formik
          initialValues={{
            email,
            fullName,
            phone,
            sex: sex || "male",
            address: address || "",
          }}
          enableReinitialize={true}
          validationSchema={updateUserSchema}
          onSubmit={handleOnSubmit}
        >
          {({ handleChange, values, setFieldValue }) => (
            <Form>
              <div className="container-fluid">
                <div className="row m-0">
                  <div className="col-12 p-0">
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
                            inputErrors.email
                              ? "text d-block text-danger"
                              : "d-none"
                          }
                        >
                          {inputErrors.email}
                        </span>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 p-0">
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
                            inputErrors.fullName
                              ? "text d-block text-danger"
                              : "d-none"
                          }
                        >
                          {inputErrors.fullName}
                        </span>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="fullName"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 p-0">
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
                            inputErrors.phone
                              ? "text d-block text-danger"
                              : "d-none"
                          }
                        >
                          {inputErrors.phone}
                        </span>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="phone"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 p-0">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Địa chỉ</span>
                        <ErrorMessage name="address">
                          {(msg) => (
                            <span className="text text-danger">{msg}</span>
                          )}
                        </ErrorMessage>
                        <span
                          className={
                            inputErrors.address
                              ? "text d-block text-danger"
                              : "d-none"
                          }
                        >
                          {inputErrors.address}
                        </span>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="address"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 p-0">
                    <div className="form-group">
                      <span className="label_name">Giới tính</span>
                      <Field
                        type="radio"
                        value="male"
                        name="sex"
                        onChange={() => setFieldValue("sex", "male")}
                        checked={values.sex === "male"}
                      />
                      <span className="label_name">Nam</span>
                      <Field
                        type="radio"
                        value="female"
                        name="sex"
                        onChange={() => setFieldValue("sex", "female")}
                        checked={values.sex === "female"}
                      />
                      <span className="label_name">Nữ</span>
                    </div>
                  </div>
                  <div className="col-12 p-0 text-right">
                    <button type="submit" className="btn btn-primary mr-2">
                      Cập nhật
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default UpdateInfo;
