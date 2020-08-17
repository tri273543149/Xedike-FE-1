import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordUserSchema } from "../../services/user";
import { changeUserPassword } from "../../store/actions/user";
import _ from "lodash";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const inputErrors = useSelector(
    (state) =>
      state.error.inputErrors || {
        oldPassword: "",
        newPassword: "",
        newPassword2: "",
      }
  );
  let { oldPassword, newPassword, newPassword2 } = inputErrors;
  const handleOnSubmit = (values, { resetForm }) => {
    dispatch(changeUserPassword(values));
    if (
      !_.isEqual(inputErrors, {
        oldPassword: "",
        newPassword: "",
        newPassword2: "",
      })
    ) {
      resetForm({ values: "" });
    }
  };
  return (
    <section className="changepassword">
      <p className="title">Đổi mật khẩu</p>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          newPassword2: "",
        }}
        validationSchema={changePasswordUserSchema}
        onSubmit={handleOnSubmit}
      >
        {({ handleChange }) => (
          <Form>
            <div className="form-group">
              <div className="form_content">
                <span className="label_name">Mật khẩu cũ</span>
                <ErrorMessage name="oldPassword">
                  {(msg) => <span className="text text-danger">{msg}</span>}
                </ErrorMessage>
                <span
                  className={
                    oldPassword ? "text d-block text-danger" : "d-none"
                  }
                >
                  {oldPassword}
                </span>
              </div>
              <Field
                className="form-control"
                type="password"
                name="oldPassword"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <div className="form_content">
                <span className="label_name">Mật khẩu mới</span>
                <ErrorMessage name="newPassword">
                  {(msg) => <span className="text text-danger">{msg}</span>}
                </ErrorMessage>
                <span
                  className={
                    newPassword ? "text d-block text-danger" : "d-none"
                  }
                >
                  {newPassword}
                </span>
              </div>
              <Field
                className="form-control"
                type="password"
                name="newPassword"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <div className="form_content">
                <span className="label_name">Xác thực</span>
                <ErrorMessage name="newPassword2">
                  {(msg) => <span className="text text-danger">{msg}</span>}
                </ErrorMessage>
                <span
                  className={
                    newPassword2 ? "text d-block text-danger" : "d-none"
                  }
                >
                  {newPassword2}
                </span>
              </div>
              <Field
                className="form-control"
                type="password"
                name="newPassword2"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">
                Đổi mật khẩu
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ChangePassword;
